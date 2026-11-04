import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { build, type Metafile } from "esbuild";
import type { BundleCase } from "./bundle-cases";
import { solidBrowser } from "./solid-browser";

export type ConsumerCondition = "solid" | "import";
const root = fileURLToPath(new URL("../", import.meta.url));

export function bundleConsumer(entry: BundleCase, condition: ConsumerCondition, minify = true) {
  return build({
    stdin: { contents: entry.contents, resolveDir: root, sourcefile: "consumer.js" },
    bundle: true,
    write: false,
    minify,
    metafile: true,
    format: "esm",
    platform: "browser",
    target: "es2022",
    conditions: condition === "solid" ? ["solid", "module"] : ["module"],
    plugins: [solidBrowser],
  });
}

function emittedInputs(metafile: Metafile) {
  const inputs = new Map<string, number>();
  for (const output of Object.values(metafile.outputs)) {
    for (const [path, info] of Object.entries(output.inputs)) {
      inputs.set(path, (inputs.get(path) ?? 0) + info.bytesInOutput);
    }
  }
  return [...inputs].filter(([, bytes]) => bytes > 0);
}

export async function measureConsumer(entry: BundleCase, condition: ConsumerCondition) {
  const result = await bundleConsumer(entry, condition);
  const output = result.outputFiles[0];
  if (!output) throw new Error("Consumer build produced no output.");
  const inputs = emittedInputs(result.metafile);
  const bytesFor = (pattern: RegExp) =>
    inputs.reduce((sum, [path, bytes]) => sum + (pattern.test(path) ? bytes : 0), 0);
  return {
    name: entry.name,
    condition,
    javascriptBytes: output.contents.byteLength,
    gzipBytes: gzipSync(output.contents).byteLength,
    dependencyBytesInOutput: {
      solid: bytesFor(/\/solid-js\//),
      recipes: bytesFor(/\/tailwind-variants\//),
      arkAndZag: bytesFor(/\/(?:@ark-ui|@zag-js)\//),
      unovis: bytesFor(/\/@unovis\//),
      icons: bytesFor(/\/lucide-solid\//),
    },
    libraryChunksInOutput: inputs
      .filter(([path]) => path.includes("dist/chunks/"))
      .map(([path]) => path),
  };
}
