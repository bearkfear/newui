import { readFile } from "node:fs/promises";
import { relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = fileURLToPath(new URL("../", import.meta.url));
const resolution = {
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  jsx: ts.JsxEmit.Preserve,
};

function localDependencies(source: ts.SourceFile) {
  return source.statements.flatMap((statement) => {
    if (!ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement)) return [];
    const specifier = statement.moduleSpecifier;
    if (!specifier || !ts.isStringLiteral(specifier) || !specifier.text.startsWith(".")) return [];
    const target = ts.resolveModuleName(specifier.text, source.fileName, resolution, ts.sys)
      .resolvedModule?.resolvedFileName;
    return target && /\.tsx?$/.test(target) && !target.endsWith(".d.ts") ? [target] : [];
  });
}

export async function implementationEntries(publicEntries: Record<string, string>) {
  const entries = { ...publicEntries };
  const publicPaths = new Set(Object.values(publicEntries).map((path) => resolve(root, path)));
  const pending = [...publicPaths];
  const visited = new Set<string>();
  while (pending.length) {
    const path = pending.pop();
    if (!path || visited.has(path)) continue;
    visited.add(path);
    const source = ts.createSourceFile(
      path,
      await readFile(path, "utf8"),
      ts.ScriptTarget.Latest,
      true,
    );
    pending.push(...localDependencies(source));
    if (publicPaths.has(path)) continue;
    const local = relative(root, path).replaceAll("\\", "/");
    entries[`internal/${local.replace(/\.tsx?$/, "")}`] = local;
  }
  return entries;
}
