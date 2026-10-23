import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import tailwind from "@tailwindcss/postcss";

const config: StorybookConfig = {
  framework: "storybook-solidjs-vite",
  stories: ["../../../pkgs/ui/**/*.stories.tsx"],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-links"],
  core: { disableTelemetry: true },
  docs: { defaultName: "Documentation" },
  async viteFinal(config) {
    return mergeConfig(config, {
      css: { postcss: { plugins: [tailwind()] } },
    });
  },
};

export default config;
