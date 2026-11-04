import type { Meta, StoryObj } from "storybook-solidjs-vite";
import actions from "./stories/modular-actions.css?inline";
import combined from "./stories/modular-combined.css?inline";
import forms from "./stories/modular-forms.css?inline";
import { ModularStyleFrame } from "./stories/modular-style-frame";

const meta = {
  title: "Getting started/Modular styles",
  tags: ["autodocs"],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          "These examples compile source area styles and render in isolated iframe documents. The complete catalog stylesheet cannot fill in missing dependencies. Forms includes the Button and Loading styles used by InputGroup, without importing action-menu styles. The theme toolbar applies inside each document. Source composition is internal in this stage; public Tailwind consumer exports come next.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  render: (_, context) => (
    <ModularStyleFrame css={actions} mode="actions" theme={String(context.globals["theme"])} />
  ),
};

export const Forms: Story = {
  render: (_, context) => (
    <ModularStyleFrame css={forms} mode="forms" theme={String(context.globals["theme"])} />
  ),
};

export const Combined: Story = {
  render: (_, context) => (
    <ModularStyleFrame css={combined} mode="combined" theme={String(context.globals["theme"])} />
  ),
};

export const Dark: Story = { ...Combined, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Combined,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
