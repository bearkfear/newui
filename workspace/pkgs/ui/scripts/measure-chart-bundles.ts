import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { transformAsync } from "@babel/core";
import solid from "babel-preset-solid";
import { build, type Plugin, stop } from "esbuild";

const root = fileURLToPath(new URL("../", import.meta.url));
const solidDependencies: Plugin = {
  name: "compile-solid-dependencies",
  setup(builder) {
    builder.onLoad({ filter: /\.jsx$/ }, async ({ path }) => {
      const result = await transformAsync(await readFile(path, "utf8"), {
        filename: path,
        babelrc: false,
        configFile: false,
        presets: [[solid, { generate: "dom", hydratable: true }]],
      });
      if (!result?.code) throw new Error(`No compiled output for ${path}`);
      return { contents: result.code, loader: "js" };
    });
  },
};
const cases = [
  { name: "Button only", contents: 'export { Button } from "./dist/index.js";' },
  { name: "Line chart", contents: 'export { LineChart } from "./dist/charts.js";' },
  {
    name: "Three chart types",
    contents: 'export { LineChart, BarChart, DonutChart } from "./dist/charts.js";',
  },
  {
    name: "Button and three chart types",
    contents:
      'export { Button } from "./dist/index.js"; export { LineChart, BarChart, DonutChart } from "./dist/charts.js";',
  },
];

for (const entry of cases) {
  const result = await build({
    stdin: { contents: entry.contents, resolveDir: root, sourcefile: "consumer.js" },
    bundle: true,
    write: false,
    minify: true,
    metafile: true,
    format: "esm",
    platform: "browser",
    target: "es2022",
    plugins: [solidDependencies],
  });
  const output = result.outputFiles[0];
  if (!output) throw new Error("Consumer build produced no output.");
  const modules = Object.values(result.metafile.outputs).flatMap((file) =>
    Object.entries(file.inputs),
  );
  const unovisBytes = modules
    .filter(([path]) => path.includes("@unovis"))
    .reduce((sum, [, info]) => sum + info.bytesInOutput, 0);
  console.log(
    JSON.stringify({
      name: entry.name,
      javascriptBytes: output.contents.byteLength,
      gzipBytes: gzipSync(output.contents).byteLength,
      unovisBytesInOutput: unovisBytes,
    }),
  );
}
stop();
