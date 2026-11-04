import { readFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import postcss, { type AtRule, type ChildNode, type Plugin, type Result, type Root } from "postcss";

const library = fileURLToPath(new URL("../", import.meta.url));
interface StyleGraph {
  library: string;
  visited: Set<string>;
  active: Set<string>;
  result: Result;
}

function libraryImport(node: ChildNode, file: string, base: string) {
  if (node.type !== "atrule" || node.name !== "import") return;
  const match = /^['"](\.[^'"]+\.css)['"]$/.exec(node.params);
  if (!match?.[1]) return;
  const target = resolve(dirname(file), match[1]);
  return relative(base, target).startsWith("..") ? undefined : target;
}

function resolveSource(node: AtRule, file: string) {
  const match = /^['"](\.[^'"]+)['"]$/.exec(node.params);
  if (node.name === "source" && match?.[1]) {
    node.params = JSON.stringify(resolve(dirname(file), match[1]).replaceAll("\\", "/"));
  }
}

async function expandImports(root: Root, file: string, graph: StyleGraph) {
  graph.active.add(file);
  for (const node of [...root.nodes]) {
    // Vite may have already inlined imports; keep each node's original base path.
    const origin = node.source?.input.file ?? file;
    const target = libraryImport(node, origin, graph.library);
    if (!target) {
      if (node.type === "atrule") resolveSource(node, origin);
      continue;
    }
    if (graph.active.has(target)) throw node.error(`Circular stylesheet import: ${target}`);
    if (graph.visited.has(target)) {
      node.remove();
      continue;
    }
    graph.visited.add(target);
    const imported = postcss.parse(await readFile(target, "utf8"), { from: target });
    graph.result.messages.push({
      type: "dependency",
      plugin: "newui-style-imports",
      file: target,
      parent: origin,
    });
    await expandImports(imported, target, graph);
    node.replaceWith(...imported.nodes);
  }
  graph.active.delete(file);
}

export function libraryStyleImports(base = library): Plugin {
  return {
    postcssPlugin: "newui-style-imports",
    async Once(root, { result }) {
      const file = root.source?.input.file;
      if (!file) return;
      await expandImports(root, file, {
        library: base,
        visited: new Set([file]),
        active: new Set(),
        result,
      });
    },
  };
}
