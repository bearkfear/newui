import type { ThemeToken } from "@egcs/newui/theme";
import type { ThemeColors, ThemeGeometry } from "./theme-settings";

const defaultGeometry: ThemeGeometry = { radius: "0.375rem", spacing: "0.25rem" };
function mixColors(color: string, base: string, colorPercent: number) {
  return `color-mix(in srgb, ${color} ${colorPercent}%, ${base})`;
}
function isDarkColor(hex: string) {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255;
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255;
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.42;
}
export function themeOptions(
  colors: ThemeColors,
  geometry: ThemeGeometry = defaultGeometry,
  overrides: Partial<Record<ThemeToken, string>> = {},
) {
  const foreground = isDarkColor(colors.background) ? "#f8f9fa" : "#17191c";
  const surface = mixColors(colors.gray, colors.background, 10);
  const defaultNeutral =
    (colors.gray === "#8b8d98" || colors.gray === "#696e77") &&
    (colors.background === "#fcfcfd" || colors.background === "#111113");
  const preset =
    colors.accent === "#0090ff"
      ? "blue"
      : colors.accent === "#30a46c"
        ? "green"
        : colors.accent === "#e5484d"
          ? "red"
          : undefined;
  return {
    tokens: {
      background: colors.background,
      surface: surface,
      foreground: foreground,
      mutedForeground: colors.gray,
      border: mixColors(colors.gray, colors.background, 40),
      controlBorder: mixColors(colors.gray, colors.background, 55),
      controlBorderHover: mixColors(colors.gray, colors.background, 70),
      primary: colors.accent,
      primaryHover: mixColors(colors.accent, foreground, 12),
      primarySoft: mixColors(colors.accent, colors.background, 16),
      primarySoftHover: mixColors(colors.accent, colors.background, 22),
      primarySoftActive: mixColors(colors.accent, colors.background, 30),
      primaryBorder: mixColors(colors.accent, colors.background, 48),
      primaryBorderHover: mixColors(colors.accent, colors.background, 62),
      primaryText: mixColors(colors.accent, foreground, 42),
      primaryTextStrong: mixColors(colors.accent, foreground, 58),
      primaryFocus: colors.accent,
      focusRing: colors.accent,
      ...radiusTokens(geometry.radius),
      spaceUnit: geometry.spacing,
      onPrimary:
        colors.accent === "#30a46c" || colors.accent === "#e5484d" || isDarkColor(colors.accent)
          ? "#ffffff"
          : "#111111",
      ...(defaultNeutral
        ? {
            background: "var(--nui-slate-1)",
            surface: "var(--nui-slate-2)",
            foreground: "var(--nui-slate-12)",
            mutedForeground: "var(--nui-slate-11)",
            border: "var(--nui-slate-6)",
            controlBorder: "var(--nui-slate-7)",
            controlBorderHover: "var(--nui-slate-8)",
          }
        : {}),
      ...presetTokens(preset),
      ...overrides,
    },
  };
}

function presetTokens(preset: string | undefined) {
  if (!preset) return {};
  return {
    primary: `var(--nui-${preset}-9)`,
    primaryHover: `var(--nui-${preset}-10)`,
    primarySoft: `var(--nui-${preset}-3)`,
    primarySoftHover: `var(--nui-${preset}-4)`,
    primarySoftActive: `var(--nui-${preset}-5)`,
    primaryBorder: `var(--nui-${preset}-7)`,
    primaryBorderHover: `var(--nui-${preset}-8)`,
    primaryText: `var(--nui-${preset}-11)`,
    primaryTextStrong: `var(--nui-${preset}-12)`,
    primaryFocus: `var(--nui-${preset}-8)`,
    focusRing: `var(--nui-${preset}-8)`,
    onPrimary: `var(--nui-on-${preset})`,
  };
}

function radiusTokens(radius: string) {
  const factor = radius === "0rem" ? 0 : radius === "0.75rem" ? 2 : 1;
  return {
    radiusXs: `${0.125 * factor}rem`,
    radiusSm: `${0.25 * factor}rem`,
    radiusMd: `${0.375 * factor}rem`,
    radiusLg: `${0.5 * factor}rem`,
    radiusXl: `${0.75 * factor}rem`,
    radius2xl: `${1 * factor}rem`,
    radius3xl: `${1.5 * factor}rem`,
    radius4xl: `${2 * factor}rem`,
  };
}
