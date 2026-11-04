import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { stop } from "esbuild";
import { buildJavaScript } from "./build-javascript";
import { buildTailwind } from "./build-tailwind";
import { compileStyles } from "./compile-styles";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await writeFile(
  "dist/RADIX_COLORS_LICENSE.txt",
  await readFile(new URL("./LICENSE", import.meta.resolve("@radix-ui/colors")), "utf8"),
);
await writeFile(
  "dist/LUCIDE_LICENSE.txt",
  await readFile(new URL("../../LICENSE", import.meta.resolve("lucide-solid")), "utf8"),
);

await buildJavaScript();
await buildTailwind();

const { css } = await compileStyles("foundations/styles.css");
await writeFile("dist/styles.css", css);

const types = Bun.spawn(
  [
    "bun",
    fileURLToPath(import.meta.resolve("typescript/bin/tsc")),
    "--project",
    "tsconfig.build.json",
  ],
  { stdout: "inherit", stderr: "inherit" },
);
if ((await types.exited) !== 0) throw new Error("Declaration generation failed.");
console.log(`Built library, declarations, and CSS (${Buffer.byteLength(css)} bytes).`);
// Release esbuild's persistent service before this one-shot CLI completes.
stop();
