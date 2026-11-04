import { fileURLToPath } from "node:url";
import { build } from "esbuild";

// Node loads one generated module; extensionless source imports stay with the bundler.
await build({
  entryPoints: [fileURLToPath(new URL("./tooling-entry.ts", import.meta.url))],
  outfile: fileURLToPath(new URL("../dist/storybook-tooling.mjs", import.meta.url)),
  bundle: true,
  packages: "external",
  platform: "node",
  format: "esm",
  target: "es2022",
});
