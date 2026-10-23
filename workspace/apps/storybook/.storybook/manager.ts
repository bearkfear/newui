import { addons } from "storybook/manager-api";
import { GLOBALS_UPDATED, SET_GLOBALS } from "storybook/internal/core-events";
import { catalogTheme } from "./theme";

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
    const dark = selectedTheme === "dark" || (selectedTheme === "system" && preference.matches);
    api.setOptions({ theme: catalogTheme(dark ? "dark" : "light") });
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }
  function syncTheme({ globals }: { globals: Record<string, unknown> }) {
    selectedTheme = typeof globals.theme === "string" ? globals.theme : "system";
    updateTheme();
  }
  preference.addEventListener("change", updateTheme);
  api.on(SET_GLOBALS, syncTheme);
  api.on(GLOBALS_UPDATED, syncTheme);
});
