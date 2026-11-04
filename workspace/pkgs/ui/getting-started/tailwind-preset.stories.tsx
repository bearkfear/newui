import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { App } from "../../../apps/tailwind-playground/src/App";
import { ModularStyleFrame } from "./stories/modular-style-frame";
import css from "./stories/tailwind-preset.css?inline";

const meta = {
  title: "Getting started/Tailwind preset",
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "The optional newui preset maps application utilities to the same tokens as the prefixed components. Palette, spacing, radius, and appearance controls change CSS variables at runtime. This isolated document compiles the application and selected library areas through the consumer PostCSS integration. The full stylesheet is not loaded inside it. The same example is available as the standalone Tailwind playground application.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const SharedTokens: Story = {
  render: (_, context) => (
    <ModularStyleFrame
      css={css}
      title="Shared Tailwind preset"
      height="64rem"
      theme={String(context.globals["theme"])}
      content={() => <App theme={String(context.globals["theme"])} />}
    />
  ),
};
export const Dark: Story = { ...SharedTokens, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...SharedTokens,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
