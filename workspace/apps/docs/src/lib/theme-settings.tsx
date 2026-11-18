import { type ColorMode, createTheme, type ThemeToken } from "@egcs/newui/theme";
import {
  createContext,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  type ParentProps,
  useContext,
} from "solid-js";
import { themeOptions } from "./theme-options";

export type ThemeColorName = "accent" | "gray" | "background";
export type ThemeColors = Record<ThemeColorName, string>;
export type ThemeGeometry = { radius: string; spacing: string };
const defaultGeometry: ThemeGeometry = { radius: "0.375rem", spacing: "0.25rem" };

type ThemeSettingsValue = {
  colors: () => ThemeColors;
  mode: () => ColorMode;
  setMode: (mode: ColorMode) => void;
  setColor: (name: ThemeColorName, value: string) => void;
  reset: () => void;
  selectTheme: (accent: string) => void;
  geometry: () => ThemeGeometry;
  setGeometry: (name: keyof ThemeGeometry, value: string) => void;
  overrides: () => Partial<Record<ThemeToken, string>>;
  setOverride: (name: ThemeToken, value: string) => void;
};

const storageKey = "newui-docs-palette";
const defaultColors: ThemeColors = {
  accent: "#0090ff",
  gray: "#8b8d98",
  background: "#111113",
};
const ThemeSettingsContext = createContext<ThemeSettingsValue>();

export function ThemeSettingsProvider(
  props: ParentProps<{ mode: () => ColorMode; setMode: (mode: ColorMode) => void }>,
) {
  const [colors, setColors] = createSignal(defaultColors);
  const [geometry, setGeometrySignal] = createSignal(defaultGeometry);
  const [overrides, setOverrides] = createSignal<Partial<Record<ThemeToken, string>>>({});
  const [systemDark, setSystemDark] = createSignal(false);
  const [lightBackground, setLightBackground] = createSignal("#fcfcfd");
  const [darkBackground, setDarkBackground] = createSignal("#111113");
  const isDark = () => props.mode() === "dark" || (props.mode() === "system" && systemDark());
  const activeColors = () => ({
    ...colors(),
    gray: colors().gray === "#8b8d98" && isDark() ? "#696e77" : colors().gray,
    background: isDark() ? darkBackground() : lightBackground(),
  });

  onMount(() => {
    observeSystemMode(setSystemDark);
    const saved = loadTheme();
    if (saved.colors) {
      setColors({
        ...saved.colors,
        gray: saved.colors.gray === "#696e77" ? "#8b8d98" : saved.colors.gray,
      });
      if (isDarkColor(saved.colors.background)) setDarkBackground(saved.colors.background);
      else setLightBackground(saved.colors.background);
    }
    if (saved.geometry) setGeometrySignal(saved.geometry);
  });

  syncTheme(activeColors, props.mode, geometry, overrides);

  const setColor = (name: ThemeColorName, value: string) => {
    if (!isHexColor(value)) return;
    if (name === "background") {
      if (isDark()) setDarkBackground(value.toLowerCase());
      else setLightBackground(value.toLowerCase());
      return;
    }
    setColors((current) => ({ ...current, [name]: value.toLowerCase() }));
  };
  const reset = () => {
    for (const key of Object.keys(createTheme({ tokens: overrides() })))
      document.documentElement.style.removeProperty(key);
    setColors(defaultColors);
    setLightBackground("#fcfcfd");
    setDarkBackground("#111113");
    setGeometrySignal(defaultGeometry);
    setOverrides({});
  };
  const selectTheme = (accent: string) => setColor("accent", accent);
  const setGeometry = (name: keyof ThemeGeometry, value: string) =>
    setGeometrySignal((current) => ({ ...current, [name]: value }));

  return (
    <ThemeSettingsContext.Provider
      value={{
        colors: activeColors,
        mode: props.mode,
        setMode: props.setMode,
        setColor,
        reset,
        selectTheme,
        geometry,
        setGeometry,
        overrides,
        setOverride: (name, value) => setOverrides((current) => ({ ...current, [name]: value })),
      }}
    >
      {props.children}
    </ThemeSettingsContext.Provider>
  );
}

function syncTheme(
  colors: () => ThemeColors,
  mode: () => ColorMode,
  geometry: () => ThemeGeometry,
  overrides: () => Partial<Record<ThemeToken, string>>,
) {
  createEffect(() => {
    const currentColors = colors();
    applyThemeTokens(document.documentElement, currentColors, mode(), geometry(), overrides());
    saveTheme(currentColors, geometry());
  });
}

function loadTheme(): { colors?: ThemeColors; geometry?: ThemeGeometry } {
  try {
    const colors = window.localStorage.getItem(storageKey);
    const geometry = window.localStorage.getItem("newui-docs-geometry");
    return {
      ...(colors ? { colors: parseStoredColors(colors) } : {}),
      ...(geometry ? { geometry: parseGeometry(geometry) } : {}),
    };
  } catch {
    return {};
  }
}

function saveTheme(colors: ThemeColors, geometry: ThemeGeometry) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(colors));
    window.localStorage.setItem("newui-docs-geometry", JSON.stringify(geometry));
  } catch {
    // The current page still receives the selected theme when storage is blocked.
  }
}

function observeSystemMode(setDark: (value: boolean) => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  setDark(media.matches);
  const update = (event: MediaQueryListEvent) => setDark(event.matches);
  media.addEventListener("change", update);
  onCleanup(() => media.removeEventListener("change", update));
}

function parseGeometry(value: string): ThemeGeometry {
  const parsed: unknown = JSON.parse(value);
  if (!parsed || typeof parsed !== "object") return defaultGeometry;
  const data = parsed as Record<string, unknown>;
  const radius = data["radius"];
  const spacing = data["spacing"];
  if (
    typeof radius !== "string" ||
    !["0rem", "0.375rem", "0.75rem"].includes(radius) ||
    typeof spacing !== "string" ||
    !["0.2rem", "0.25rem", "0.3rem"].includes(spacing)
  )
    return defaultGeometry;
  return { radius, spacing };
}

export function useThemeSettings() {
  const settings = useContext(ThemeSettingsContext);
  if (!settings) throw new Error("ThemeSettingsProvider is required.");
  return settings;
}

function parseStoredColors(value: string): ThemeColors {
  try {
    const parsed: unknown = JSON.parse(value);
    if (!parsed || typeof parsed !== "object") return defaultColors;
    const candidate = parsed as Record<string, unknown>;
    const accent = candidate["accent"];
    const gray = candidate["gray"];
    const background = candidate["background"];
    if (!isHexColor(accent) || !isHexColor(gray) || !isHexColor(background)) return defaultColors;
    return { accent, gray, background };
  } catch {
    return defaultColors;
  }
}

function isHexColor(value: unknown): value is string {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
}

function isDarkColor(hex: string): boolean {
  const red = Number.parseInt(hex.slice(1, 3), 16) / 255;
  const green = Number.parseInt(hex.slice(3, 5), 16) / 255;
  const blue = Number.parseInt(hex.slice(5, 7), 16) / 255;
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue < 0.42;
}

function applyThemeTokens(
  element: HTMLElement,
  colors: ThemeColors,
  mode: ColorMode,
  geometry: ThemeGeometry,
  overrides: Partial<Record<ThemeToken, string>>,
) {
  const values = createTheme(themeOptions(colors, geometry, overrides));
  for (const [name, value] of Object.entries(values)) element.style.setProperty(name, value);
  element.setAttribute("data-nui-theme", mode);
}
