import { relative } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { stop } from "esbuild";
import postcss, { type AnyNode } from "postcss";
import { compileStyles } from "./compile-styles";

const library = fileURLToPath(new URL("../", import.meta.url));
const cases = [
  { name: "Foundations", entries: ["./foundations.css"] },
  { name: "Button", entries: ["../actions/button/button.styles.css"] },
  { name: "Actions", entries: ["./actions.css"] },
  { name: "Forms", entries: ["./forms.css"] },
  { name: "Actions and Forms", entries: ["./actions.css", "./forms.css"] },
  { name: "Forms and Actions", entries: ["./forms.css", "./actions.css"] },
  { name: "Sidebar", entries: ["../navigation/sidebar/sidebar.styles.css"] },
  { name: "Data without Charts", entries: ["./data.css"] },
  { name: "Charts", entries: ["./charts.css"] },
  { name: "Full catalog", entries: ["./index.css"] },
];

function ruleSummary(css: string) {
  const rules = new Set<string>();
  let repeatedRules = 0;
  postcss.parse(css).walkRules((rule) => {
    const scope: string[] = [];
    for (let parent: AnyNode | undefined = rule.parent; parent; parent = parent.parent) {
      if (parent.type === "atrule") scope.unshift(`@${parent.name} ${parent.params}`);
    }
    const key = JSON.stringify([scope, rule.toString()]);
    if (rules.has(key)) repeatedRules++;
    rules.add(key);
  });
  return { distinctRules: rules.size, repeatedRules };
}

try {
  for (const entry of cases) {
    const source = [
      '@import "tailwindcss" prefix(nui) source(none);',
      ...entry.entries.map((path) => `@import "${path}";`),
    ].join("\n");
    const result = await compileStyles(`${library}styles/measurement.css`, source);
    const files = result.messages.flatMap((message) =>
      message.type === "dependency" && message.plugin === "newui-style-imports"
        ? [relative(library, String(message["file"]))]
        : [],
    );
    console.log(
      JSON.stringify({
        name: entry.name,
        cssBytes: Buffer.byteLength(result.css),
        gzipBytes: gzipSync(result.css).byteLength,
        ...ruleSummary(result.css),
        modules: files.filter((path) => path.endsWith(".styles.css")),
      }),
    );
  }
} finally {
  stop();
}
