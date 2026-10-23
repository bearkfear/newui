import { blue, blueDark } from "@radix-ui/colors";
import { addons } from "storybook/manager-api";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import { catalogTheme, resolveCatalogTheme } from "./theme";

const preference = window.matchMedia("(prefers-color-scheme: dark)");
addons.setConfig({
  theme: catalogTheme(preference.matches ? "dark" : "light"),
  layout: { navSize: 272, bottomPanelHeight: 300, panelPosition: "bottom" },
  sidebar: { showRoots: true, collapsedRoots: ["Foundations"] },
  toolbar: { title: { hidden: false } },
});

addons.register("newui/theme", (api) => {
  let selectedTheme = "system";
  function updateTheme() {
    const mode = resolveCatalogTheme(selectedTheme, preference.matches);
    const theme = catalogTheme(mode);
    api.setOptions({ theme });
    document.documentElement.style.colorScheme = mode;
    document.documentElement.dataset.nuiTheme = mode;
    const accent = mode === "dark" ? blueDark : blue;
    document.documentElement.style.setProperty("--catalog-selection", accent.blue9);
    document.documentElement.style.setProperty("--catalog-selection-hover", accent.blue10);
    document.documentElement.style.setProperty("--catalog-selection-text", theme.textInverseColor);
    document.documentElement.style.setProperty("--catalog-focus", accent.blue8);
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute("content", theme.appBg));
  }
  function syncTheme({ globals }: { globals: Record<string, unknown> }) {
    selectedTheme = typeof globals.theme === "string" ? globals.theme : "system";
    updateTheme();
  }
  updateTheme();
  preference.addEventListener("change", updateTheme);
  api.on(SET_GLOBALS, syncTheme);
  api.on(GLOBALS_UPDATED, syncTheme);
});
