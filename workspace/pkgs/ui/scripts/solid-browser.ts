import { readFile } from "node:fs/promises";
import { transformAsync } from "@babel/core";
import solid from "babel-preset-solid";
import type { Plugin } from "esbuild";

export const solidBrowser: Plugin = {
  name: "compile-solid-browser",
  setup(builder) {
    builder.onLoad({ filter: /\.jsx$/ }, async ({ path }) => {
      const result = await transformAsync(await readFile(path, "utf8"), {
        filename: path,
        babelrc: false,
        configFile: false,
        presets: [[solid, { generate: "dom", hydratable: true }]],
      });
      if (result?.code == null)
        throw new Error(`Solid compilation produced no output for ${path}.`);
      return { contents: result.code, loader: "js" };
    });
  },
};
