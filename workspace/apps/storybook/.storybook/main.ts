import { fileURLToPath } from "node:url";
import tailwind from "@tailwindcss/postcss";
import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import { createConsumerStyles, libraryStyleImports, styleAreas } from "#storybook-tooling";

const sourceRoot = fileURLToPath(new URL("../../../pkgs/ui/", import.meta.url));

const config: StorybookConfig = {
  framework: "storybook-solidjs-vite",
  stories: ["../../../pkgs/ui/**/*.stories.tsx"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-links"],
  core: { disableTelemetry: true },
  features: { sidebarOnboardingChecklist: false, menuOnboardingChecklist: false },
  docs: { defaultName: "Documentation" },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: [
          { find: /^newui$/, replacement: `${sourceRoot}index.ts` },
          { find: /^newui\/charts$/, replacement: `${sourceRoot}data/chart/index.ts` },
          ...styleAreas
            .filter((area) => area !== "foundations" && area !== "charts")
            .map((area) => ({
              find: new RegExp(`^newui/${area}$`),
              replacement: `${sourceRoot}${area}/index.ts`,
            })),
        ],
      },
      css: {
        postcss: {
          plugins: [
            createConsumerStyles({ publicRoot: `${sourceRoot}tailwind`, sourceRoot }),
            libraryStyleImports(sourceRoot),
            tailwind(),
          ],
        },
      },
    });
  },
};

export default config;
