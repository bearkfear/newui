import { create } from "storybook/theming/create";

export function catalogTheme(base: "light" | "dark") {
  const dark = base === "dark";
  return create({
    base,
    brandTitle: "newui · component workshop",
    brandImage: dark ? "./brand-dark.svg" : "./brand-light.svg",
    brandUrl: "?path=/story/getting-started-introduction--overview",
    brandTarget: "_self",
    fontBase: '"Inter", ui-sans-serif, system-ui, sans-serif',
    fontCode: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    colorPrimary: dark ? "#93c5fd" : "#2563eb",
    colorSecondary: dark ? "#93c5fd" : "#2563eb",
    appBg: dark ? "#0b1220" : "#f5f7fb",
    appContentBg: dark ? "#111b2c" : "#ffffff",
    appPreviewBg: dark ? "#0b1220" : "#ffffff",
    appBorderColor: dark ? "#2a3950" : "#dce3ee",
    appBorderRadius: 8,
    textColor: dark ? "#e5edf9" : "#17243b",
    textMutedColor: dark ? "#a8b7ce" : "#52647d",
    barBg: dark ? "#111b2c" : "#ffffff",
    barTextColor: dark ? "#a8b7ce" : "#52647d",
    barSelectedColor: dark ? "#93c5fd" : "#2563eb",
    barHoverColor: dark ? "#bfdbfe" : "#1d4ed8",
    inputBg: dark ? "#0b1220" : "#ffffff",
    inputBorder: dark ? "#40516c" : "#bdcadd",
    inputTextColor: dark ? "#e5edf9" : "#17243b",
    inputBorderRadius: 6,
  });
}
