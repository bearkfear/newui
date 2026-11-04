import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { type PluginObj, transformAsync } from "@babel/core";
import type { OutputFile } from "esbuild";

const removeEvaluationImports: PluginObj = {
  visitor: {
    ImportDeclaration(path) {
      const source = path.node.source.value;
      if (path.node.specifiers.length === 0 && source.startsWith(".") && /\.jsx?$/.test(source)) {
        path.remove();
      }
    },
  },
};

export async function writeJavaScript(files: OutputFile[]) {
  for (const file of files) {
    // The package declares only CSS side effects. esbuild's splitting pass adds
    // local evaluation imports that consumers would otherwise discard and warn about.
    // Keep binding imports and external evaluation imports intact.
    const result = await transformAsync(file.text, {
      filename: file.path,
      babelrc: false,
      configFile: false,
      parserOpts: { plugins: ["jsx"] },
      plugins: [removeEvaluationImports],
    });
    if (result?.code == null) throw new Error(`JavaScript emission failed for ${file.path}.`);
    await mkdir(dirname(file.path), { recursive: true });
    await writeFile(file.path, result.code);
  }
}
