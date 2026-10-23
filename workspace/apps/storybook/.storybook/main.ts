import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import tailwind from "@tailwindcss/postcss";

const config: StorybookConfig = {
  framework: "storybook-solidjs-vite",
  stories: ["../../../pkgs/ui/**/*.stories.tsx"],
  addons: [],
  async viteFinal(config) {
    return mergeConfig(config, {
      css: { postcss: { plugins: [tailwind()] } },
    });
  },
};

export default config;
