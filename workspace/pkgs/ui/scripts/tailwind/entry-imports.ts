import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import postcss, { type Result, type Root } from "postcss";

export const styleAreas = [
  "foundations",
  "actions",
  "forms",
  "content",
  "layout",
  "navigation",
  "overlays",
  "feedback",
  "data",
  "charts",
  "compositions",
] as const;

export async function expandEntryImports(root: Root, publicRoot: string, result: Result) {
  for (const node of [...root.nodes]) {
    if (node.type !== "atrule" || node.name !== "import") continue;
    if (!node.params.includes("newui/tailwind/")) continue;
    const match = /^['"]newui\/tailwind\/([a-z-]+)\.css['"]$/.exec(node.params);
    const name = match?.[1];
    if (!name || ![...styleAreas, "preset"].some((area) => area === name)) {
      throw node.error("Use a plain @import of a documented newui/tailwind/*.css entry.");
    }
    const file = resolve(publicRoot, `${name}.css`);
    const imported = postcss.parse(await readFile(file, "utf8"), { from: file });
    result.messages.push({ type: "dependency", plugin: "newui", file });
    node.replaceWith(...imported.nodes);
  }
}

export function collectStyleAreas(root: Root) {
  const areas = new Set<string>();
  root.walkAtRules("newui", (node) => {
    if (node.parent?.type !== "root" || !styleAreas.some((area) => area === node.params)) {
      throw node.error("newui style selections must name a documented area at stylesheet root.");
    }
    areas.add(node.params);
    node.remove();
  });
  return [...areas];
}
