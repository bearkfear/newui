import { readFile } from "node:fs/promises";
import tailwind from "@tailwindcss/postcss";
import { transform } from "esbuild";
import postcss from "postcss";
import { libraryStyleImports } from "./style-imports";

export async function compileStyles(from: string, source?: string) {
  const result = await postcss([libraryStyleImports(), tailwind()]).process(
    source ?? (await readFile(from, "utf8")),
    { from },
  );
  const css = await transform(result.css, { loader: "css", minify: true });
  return { css: css.code, messages: result.messages };
}
