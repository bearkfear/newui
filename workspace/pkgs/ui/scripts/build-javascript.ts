import { type BuildOptions, build } from "esbuild";
import { implementationEntries } from "./implementation-entries";
import { solidBrowser } from "./solid-browser";
import { writeJavaScript } from "./write-javascript";

const entries = {
  index: "index.ts",
  actions: "actions/index.ts",
  charts: "data/chart/index.ts",
  compositions: "compositions/index.ts",
  content: "content/index.ts",
  data: "data/index.ts",
  feedback: "feedback/index.ts",
  forms: "forms/index.ts",
  masking: "forms/masked-input/index.ts",
  numbers: "forms/number-input/index.ts",
  "rich-text": "forms/rich-text-editor/index.ts",
  layout: "layout/index.ts",
  navigation: "navigation/index.ts",
  overlays: "overlays/index.ts",
};

export async function buildJavaScript() {
  // Keep implementation boundaries so unused siblings and their initialization
  // can be dropped as modules, while shared contexts retain a single identity.
  const modules = await implementationEntries(entries);
  const shared = {
    outdir: "dist",
    bundle: true,
    splitting: true,
    packages: "external",
    format: "esm",
    platform: "neutral",
    target: "es2022",
    write: false,
  } satisfies BuildOptions;

  // Each export condition gets one shared module graph, including contexts.
  const preserved = await build({
    ...shared,
    entryPoints: modules,
    outExtension: { ".js": ".jsx" },
    chunkNames: "chunks/solid-[hash]",
    jsx: "preserve",
  });
  await writeJavaScript(preserved.outputFiles);

  // Compile the preserved graph for consumers without the Solid condition.
  const browser = await build({
    ...shared,
    entryPoints: Object.fromEntries(Object.keys(modules).map((name) => [name, `dist/${name}.jsx`])),
    chunkNames: "chunks/browser-[hash]",
    plugins: [solidBrowser],
  });
  await writeJavaScript(browser.outputFiles);
}
