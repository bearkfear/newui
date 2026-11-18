import { createSignal, onMount } from "solid-js";

/** The color scheme applied to the document. */
export type ColorMode = "light" | "dark" | "system";

/** Configuration shared by the Solid color-mode helper and its pre-paint script. */
export type ColorModeOptions = {
  /** The mode used when storage has no valid value. Defaults to `system`. */
  defaultMode?: ColorMode;
  /** Optional localStorage key used to restore and persist the selected mode. */
  storageKey?: string;
};

function isColorMode(value: string | null): value is ColorMode {
  return value === "light" || value === "dark" || value === "system";
}

function readStoredMode(storageKey: string | undefined): ColorMode | undefined {
  if (!storageKey || typeof window === "undefined") return undefined;
  try {
    const value = window.localStorage.getItem(storageKey);
    return isColorMode(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

function applyColorMode(mode: ColorMode, storageKey?: string) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-nui-theme", mode);
  if (!storageKey) return;
  try {
    window.localStorage.setItem(storageKey, mode);
  } catch {
    // The document still receives the selected mode when storage is unavailable.
  }
}

/**
 * Creates a Solid accessor and setter for the document color mode.
 *
 * With `storageKey`, the mode is restored after mount and saved whenever it changes. For SSR apps,
 * pair this with `getColorModeScript` in the document head before stylesheets to prevent a flash.
 * `system` follows the operating system through the library's CSS theme tokens.
 *
 * Call this while setting up a Solid component owner.
 *
 * @example
 * ```tsx
 * import { createColorMode } from "@egcs/newui/theme";
 *
 * function AppearanceControl() {
 *   const colorMode = createColorMode({ storageKey: "app-color-mode" });
 *   return <button onClick={() => colorMode.setMode("dark")}>Use dark mode</button>;
 * }
 * ```
 */
export function createColorMode(options: ColorModeOptions = {}) {
  const defaultMode = options.defaultMode ?? "system";
  const [mode, setModeSignal] = createSignal<ColorMode>(defaultMode);

  onMount(() => {
    const initialMode = readStoredMode(options.storageKey) ?? defaultMode;
    setModeSignal(initialMode);
    applyColorMode(initialMode);
  });

  function setMode(nextMode: ColorMode) {
    setModeSignal(nextMode);
    applyColorMode(nextMode, options.storageKey);
  }

  return { mode, setMode };
}

/**
 * Returns a small inline script that applies a saved color mode before the first paint.
 * Place its output in the document head before the library stylesheet. The script falls back to
 * `defaultMode` when storage is missing, blocked, or contains an unknown value.
 *
 * @example
 * ```tsx
 * import { getColorModeScript } from "@egcs/newui/theme";
 *
 * <head>
 *   <script innerHTML={getColorModeScript({ storageKey: "app-color-mode" })} />
 *   <link rel="stylesheet" href="/styles.css" />
 * </head>
 * ```
 */
export function getColorModeScript(options: ColorModeOptions = {}): string {
  const storageKey = JSON.stringify(options.storageKey ?? null);
  const defaultMode = JSON.stringify(options.defaultMode ?? "system");
  return `try {\n  const key = ${storageKey};\n  const saved = key ? localStorage.getItem(key) : null;\n  const mode = saved === "light" || saved === "dark" || saved === "system" ? saved : ${defaultMode};\n  document.documentElement.setAttribute("data-nui-theme", mode);\n} catch {\n  document.documentElement.setAttribute("data-nui-theme", ${defaultMode});\n}`;
}
