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
      title: "newui",
      titleTemplate: "%s · newui",
      description: "Documentation and examples for the newui SolidJS component library.",
    }),
    solidStart(solidBase.startConfig()),
  ],
});
