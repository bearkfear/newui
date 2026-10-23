import { addons } from "storybook/manager-api";
import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { catalogTheme } from "./theme";

const preference = window.matchMedia("(prefers-color-scheme: dark)");
let selectedTheme = "system";
function updateTheme() {
  const dark = selectedTheme === "dark" || (selectedTheme === "system" && preference.matches);
  addons.setConfig({ theme: catalogTheme(dark ? "dark" : "light") });
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}

addons.setConfig({
  navSize: 272,
  bottomPanelHeight: 300,
  panelPosition: "bottom",
  sidebar: { showRoots: true, collapsedRoots: ["Foundations"] },
  toolbar: { title: { hidden: false } },
});
updateTheme();
preference.addEventListener("change", updateTheme);
addons.getChannel().on(GLOBALS_UPDATED, ({ globals }) => {
  selectedTheme = globals.theme ?? "system";
  updateTheme();
});
