import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { build, stop, transform } from "esbuild";
import { transformAsync } from "@babel/core";
import solid from "babel-preset-solid";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await writeFile("dist/RADIX_COLORS_LICENSE.txt", await readFile(new URL("./LICENSE", import.meta.resolve("@radix-ui/colors")), "utf8"));

// Keep JSX for the consumer's Solid compiler, including its SSR target.
await build({
  entryPoints: ["index.ts"],
  outfile: "dist/index.jsx",
  bundle: true,
  packages: "external",
  format: "esm",
  platform: "neutral",
  target: "es2022",
  jsx: "preserve",
});

// Supply a browser-compiled fallback for tools without the Solid export condition.
const compiled = await transformAsync(await readFile("dist/index.jsx", "utf8"), {
  filename: "index.jsx",
  babelrc: false,
  configFile: false,
  presets: [[solid, { generate: "dom", hydratable: true }]],
});
if (!compiled?.code) throw new Error("Solid compilation produced no output.");
await writeFile("dist/index.js", compiled.code);

const stylesheet = "foundations/styles.css";
const result = await postcss([tailwind()]).process(await readFile(stylesheet, "utf8"), {
  from: stylesheet,
  to: "dist/styles.css",
});
const css = await transform(result.css, { loader: "css", minify: true });
await writeFile("dist/styles.css", css.code);

const types = Bun.spawn([
  "bun", fileURLToPath(import.meta.resolve("typescript/bin/tsc")), "--project", "tsconfig.build.json",
], { stdout: "inherit", stderr: "inherit" });
if (await types.exited !== 0) throw new Error("Declaration generation failed.");
console.log(`Built library, declarations, and CSS (${Buffer.byteLength(css.code)} bytes).`);
// Release esbuild's persistent service before this one-shot CLI completes.
stop();
