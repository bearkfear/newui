/** Radix palettes included in the newui stylesheet. */
export type ThemePalette = "blue" | "sky" | "green" | "amber" | "red";
/** A CSS color or distinct colors selected by the active color scheme. */
export type ThemeColor = string | { light: string; dark: string };
type ColorRole = "primary" | "info" | "success" | "warning" | "danger" | "neutral";
type ColorStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColorSuffix =
  | ""
  | "-hover"
  | "-soft"
  | "-soft-hover"
  | "-soft-active"
  | "-border"
  | "-border-hover"
  | "-text"
  | "-text-strong"
  | "-focus";
/** Public semantic color variables supported by createTheme. */
export type ThemeColorToken =
  | `--nui-${ColorRole}${ColorSuffix}`
  | `--nui-${ColorRole}-${ColorStep}`
  | `--nui-on-${ColorRole}`
  | "--nui-background"
  | "--nui-surface"
  | "--nui-foreground"
  | "--nui-muted-foreground"
  | "--nui-muted"
  | "--nui-border"
  | "--nui-control-border"
  | "--nui-control-border-hover"
  | "--nui-disabled-background"
  | "--nui-disabled-foreground"
  | "--nui-disabled-border"
  | "--nui-focus-ring";
type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type MetricToken =
  | "space-unit"
  | `radius-${Size}`
  | `control-height-${"xs" | "sm" | "md" | "lg"}`
  | "font-sans"
  | "font-mono"
  | `font-size-${Size | "base" | "5xl" | "display-sm" | "display-md"}`
  | `font-weight-${"normal" | "medium" | "semibold"}`
  | `leading-${"tight" | "snug" | "normal" | "relaxed"}`
  | "tracking-tight"
  | "focus-width"
  | "focus-offset"
  | "motion-duration"
  | "motion-easing";
type Camel<S extends string> = S extends `${infer A}-${infer B}`
  ? `${A}${Capitalize<Camel<B>>}`
  : S;
type TokenName = ThemeColorToken extends infer T extends string
  ? T extends `--nui-${infer N}`
    ? N
    : never
  : never;
/** Names for public theme colors and metrics, without the CSS variable prefix. */
export type ThemeToken = Camel<TokenName | MetricToken>;
/** Optional primary palette and individual semantic color overrides. */
export type ThemeOptions = {
  primary?:
    | ThemePalette
    | { palette?: ThemePalette; tokens?: Partial<Record<ThemeToken, ThemeColor>> };
  tokens?: Partial<Record<ThemeToken, ThemeColor>>;
};
/** CSS custom properties suitable for a Solid style object. */
export type ThemeVariables = Record<string, string>;

const roles = {
  "": 9,
  "-hover": 10,
  "-soft": 3,
  "-soft-hover": 4,
  "-soft-active": 5,
  "-border": 7,
  "-border-hover": 8,
  "-text": 11,
  "-text-strong": 12,
  "-focus": 8,
} as const;

/**
 * Builds semantic color overrides without accessing the DOM. Import the newui stylesheet to
 * provide the Radix palette variables. Explicit tokens take precedence over the preset.
 *
 * @example
 * ```ts
 * import { createTheme } from "@egcs/newui/theme";
 * const theme = createTheme({ primary: { palette: "blue", tokens: { primaryHover: "yellow" } } });
 * ```
 */
export function createTheme(options: ThemeOptions): ThemeVariables {
  const primary =
    typeof options.primary === "string" ? { palette: options.primary } : options.primary;
  const variables: ThemeVariables = {};
  if (primary?.palette) applyPalette(variables, primary.palette);
  for (const tokens of [primary?.tokens, options.tokens]) {
    if (!tokens) continue;
    for (const [key, value] of Object.entries(tokens)) {
      if (value !== undefined)
        variables[toCssToken(key)] =
          typeof value === "string" ? value : `light-dark(${value.light}, ${value.dark})`;
    }
  }
  return variables;
}

function toCssToken(name: string): keyof ThemeVariables {
  const kebab = name
    .replace(/([A-Z])/g, "-$1")
    .replace(/([a-z])([0-9])/g, "$1-$2")
    .toLowerCase();
  return `--nui-${kebab}` as keyof ThemeVariables;
}

function applyPalette(variables: ThemeVariables, palette: ThemePalette) {
  for (let step = 1; step <= 12; step++) {
    variables[`--nui-primary-${step as ColorStep}`] = `var(--nui-${palette}-${step})`;
  }
  for (const [suffix, step] of Object.entries(roles)) {
    variables[`--nui-primary${suffix}` as ThemeColorToken] = `var(--nui-primary-${step})`;
  }
  variables["--nui-on-primary"] = `var(--nui-on-${palette})`;
  variables["--nui-focus-ring"] = "var(--nui-primary-8)";
}
