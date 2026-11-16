import { createSolidBase, defineTheme } from "@kobalte/solidbase/config";
import { solidStart } from "@solidjs/start/config";
import { defineConfig } from "vite";

const newuiTheme = defineTheme({
  componentsPath: new URL("./src/theme/", import.meta.url).href,
});

const solidBase = createSolidBase(newuiTheme);

export default defineConfig({
  resolve: { dedupe: ["@solidjs/router"] },
  plugins: [
    solidBase.plugin({
      title: "New UI",
      titleTemplate: ":title · New UI",
      description: "Documentation and examples for the newui SolidJS component library.",
      lang: "pt-BR",
      routes: {
        path: "/{locale}",
        locale: {
          default: "pt",
          values: {
            pt: { path: "", label: "Português", lang: "pt-BR" },
            en: { path: "en", label: "English", lang: "en-US" },
          },
        },
      },
    }),
    solidStart(solidBase.startConfig()),
  ],
});
