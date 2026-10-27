import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import * as colors from "@radix-ui/colors";

const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
type Step = (typeof steps)[number];

function scaleDeclarations<Name extends string>(
  name: Name,
  light: Record<`${Name}${Step}`, string>,
  dark: Record<`${Name}${Step}`, string>,
) {
  return steps.map((step) => {
    const key: `${Name}${Step}` = `${name}${step}`;
    return `  --nui-${name}-${step}: light-dark(${light[key]}, ${dark[key]});`;
  });
}

const declarations = [
  ...scaleDeclarations("slate", colors.slate, colors.slateDark),
  ...scaleDeclarations("blue", colors.blue, colors.blueDark),
  ...scaleDeclarations("sky", colors.sky, colors.skyDark),
  ...scaleDeclarations("green", colors.green, colors.greenDark),
  ...scaleDeclarations("amber", colors.amber, colors.amberDark),
  ...scaleDeclarations("red", colors.red, colors.redDark),
  `  --nui-shadow-ink: ${colors.blackA.blackA12};`,
  `  --nui-highlight-ink: ${colors.whiteA.whiteA12};`,
];

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
