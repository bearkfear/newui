import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { build } from "esbuild";
import postcss from "postcss";
import { styleAreas } from "./tailwind/entry-imports";

async function copyStyleGraph(file: string, visited: Set<string>) {
  const absolute = resolve(file);
  if (visited.has(absolute)) return;
  visited.add(absolute);
  const contents = await readFile(absolute, "utf8");
  const output = resolve("dist/tailwind/source", relative(process.cwd(), absolute));
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, contents);
  if (!file.endsWith(".css")) return;
  const dependencies: string[] = [];
  postcss.parse(contents).walkAtRules((node) => {
    if (!["import", "source"].includes(node.name)) return;
    const match = /^['"](\.[^'"]+)['"]$/.exec(node.params);
    if (match?.[1]) dependencies.push(resolve(dirname(absolute), match[1]));
  });
  for (const dependency of dependencies) await copyStyleGraph(dependency, visited);
}

export async function buildTailwind() {
  await copyStyleGraph("styles/index.css", new Set());
  for (const area of styleAreas) {
    await writeFile(`dist/tailwind/${area}.css`, await readFile(`tailwind/${area}.css`, "utf8"));
  }
  const theme = await readFile("foundations/theme.css", "utf8");
  await writeFile("dist/tailwind/preset.css", `${theme}\n@newui foundations;\n`);
  await writeFile("dist/postcss.d.ts", await readFile("tailwind/postcss.d.ts", "utf8"));
  await build({
    entryPoints: ["scripts/consumer-postcss.ts"],
    outfile: "dist/postcss.js",
    bundle: true,
    packages: "external",
    format: "esm",
    platform: "node",
    target: "es2022",
  });
}
