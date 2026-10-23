import { blue, blueDark, slate, slateDark } from "@radix-ui/colors";
import { create } from "storybook/theming/create";

export function resolveCatalogTheme(preference: unknown, systemDark: boolean): "light" | "dark" {
  if (preference === "light" || preference === "dark") return preference;
  return systemDark ? "dark" : "light";
}

export function catalogTheme(base: "light" | "dark") {
  const dark = base === "dark";
  const gray = dark ? slateDark : slate;
  const accent = dark ? blueDark : blue;
  return create({
    base,
    brandTitle: "newui · component workshop",
    brandImage: dark ? "./brand-dark.svg" : "./brand-light.svg",
    brandUrl: "?path=/story/getting-started-introduction--overview",
    brandTarget: "_self",
    fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
    fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    colorPrimary: accent.blue9,
    colorSecondary: accent.blue9,
    appBg: gray.slate2,
    appContentBg: gray.slate1,
    appHoverBg: gray.slate4,
    appPreviewBg: gray.slate1,
    appBorderColor: gray.slate6,
    appBorderRadius: 8,
    textInverseColor: "white",
    textColor: gray.slate12,
    textMutedColor: gray.slate11,
    barBg: gray.slate2,
    barTextColor: gray.slate11,
    barSelectedColor: accent.blue11,
    barHoverColor: accent.blue12,
    buttonBg: gray.slate3,
    buttonBorder: gray.slate7,
    booleanBg: gray.slate3,
    booleanSelectedBg: accent.blue9,
    inputBg: gray.slate1,
    inputBorder: gray.slate7,
    inputTextColor: gray.slate12,
    inputBorderRadius: 6,
  });
}
