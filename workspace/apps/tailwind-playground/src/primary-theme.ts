export type Palette = "blue" | "green" | "red";
export type ThemeMode = "system" | "light" | "dark";

export function themeMode(value: string | undefined): ThemeMode {
  return value === "light" || value === "dark" ? value : "system";
}

export function primaryTheme(palette: Palette) {
  return {
    "--nui-primary": `var(--nui-${palette}-9)`,
    "--nui-primary-hover": `var(--nui-${palette}-10)`,
    "--nui-primary-soft": `var(--nui-${palette}-3)`,
    "--nui-primary-soft-hover": `var(--nui-${palette}-4)`,
    "--nui-primary-soft-active": `var(--nui-${palette}-5)`,
    "--nui-primary-border": `var(--nui-${palette}-7)`,
    "--nui-primary-border-hover": `var(--nui-${palette}-8)`,
    "--nui-primary-text": `var(--nui-${palette}-11)`,
    "--nui-primary-text-strong": `var(--nui-${palette}-12)`,
    "--nui-primary-focus": `var(--nui-${palette}-8)`,
    "--nui-on-primary": `var(--nui-on-${palette})`,
    "--nui-focus-ring": `var(--nui-${palette}-8)`,
  };
}
