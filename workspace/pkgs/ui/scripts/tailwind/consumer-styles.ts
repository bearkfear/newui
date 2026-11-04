import { resolve } from "node:path";
import tailwind from "@tailwindcss/postcss";
import postcss, { type Plugin } from "postcss";
import { libraryStyleImports } from "../style-imports";
import { collectStyleAreas, expandEntryImports } from "./entry-imports";

interface ConsumerStylePaths {
  publicRoot: string;
  sourceRoot: string;
}

export function createConsumerStyles(paths: ConsumerStylePaths): Plugin {
  return {
    postcssPlugin: "newui",
    async Once(root, { result }) {
      await expandEntryImports(root, paths.publicRoot, result);
      const normalized = await postcss([libraryStyleImports(paths.sourceRoot)]).process(root, {
        from: root.source?.input.file,
      });
      result.messages.push(...normalized.messages);
      const areas = collectStyleAreas(root);
      if (!areas.length) return;
      const source = [
        "@layer theme, base, components, utilities;",
        '@import "tailwindcss/theme.css" layer(theme) prefix(nui);',
        '@import "tailwindcss/utilities.css" layer(utilities) source(none);',
        ...areas.map((area) => `@import "./styles/${area}.css";`),
      ].join("\n");
      const compiled = await postcss([
        libraryStyleImports(paths.sourceRoot),
        tailwind({ optimize: false }),
      ]).process(source, { from: resolve(paths.sourceRoot, "consumer.css") });
      result.messages.push(...compiled.messages);
      // Library defaults precede application overrides; the application owns Preflight.
      root.prepend(...postcss.parse(compiled.css).nodes);
    },
    OnceExit(root) {
      root.walkAtRules("newui", (node) => {
        throw node.error(
          "Import newui styles in the entry stylesheet before Tailwind compilation.",
        );
      });
    },
  };
}
