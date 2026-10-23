import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import * as colors from "@radix-ui/colors";

const palettes = ["slate", "blue", "sky", "green", "amber", "red"] as const;
const ramps = colors as unknown as Record<string, Record<string, string>>;
const declarations: string[] = [];
for (const name of palettes) {
  for (let step = 1; step <= 12; step++) {
    declarations.push(`  --nui-${name}-${step}: light-dark(${ramps[name][`${name}${step}`]}, ${ramps[`${name}Dark`][`${name}${step}`]});`);
  }
}

// Match Radix Themes contrast tokens for solid steps 9 and 10 in both modes.
// https://github.com/radix-ui/themes/tree/main/packages/radix-ui-themes/src/styles/tokens/colors
const solidForegrounds = {
  blue: "white",
  sky: colors.slate.slate12,
  green: "white",
  amber: colors.sand.sand12,
  red: "white",
};
for (const [name, foreground] of Object.entries(solidForegrounds)) {
  declarations.push(`  --nui-on-${name}: ${foreground};`);
}
const css = `/*! Generated from @radix-ui/colors (MIT). Run bun run colors:generate; do not edit values. */
:root {
${declarations.join("\n")}
}
`;
await writeFile(fileURLToPath(new URL("../foundations/radix.css", import.meta.url)), css);
console.log("Generated official Radix light/dark scales and solid foregrounds.");
