import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AsyncToast } from "./stories/async-toast";
import { CustomToast } from "./stories/custom-toast";
import { ScopedToast } from "./stories/scoped-toast";
import { ToastExample, type ToastExampleProps } from "./stories/toast-example";

const meta = {
  title: "Feedback/Toast",
  tags: ["autodocs"],
  args: {
    placement: "bottom-end",
    duration: 5000,
    max: 3,
    variant: "soft",
    showIcon: true,
    preview: false,
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"],
    },
    duration: { control: { type: "number", min: 1000, step: 1000 } },
    max: { control: { type: "number", min: 1, max: 5, step: 1 } },
    variant: { control: "inline-radio", options: ["soft", "outline"] },
    showIcon: { control: "boolean" },
    preview: { control: false },
  },
  parameters: {
    docs: {
      story: { inline: false, height: "480px" },
      description: {
        component:
          "Temporary notifications powered by Ark Toast, with the approved Callout colors, title/description hierarchy, and optional icons. One store manages stacking, the queue, timers, hover/focus pause, actions, and dismissal. Mount one themed Toaster for each store. Controls reset the demo store; no global singleton is created.",
      },
    },
  },
  render: (args) => <ToastExample {...args} />,
} satisfies Meta<ToastExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const VisualPreview: Story = { args: { preview: true } };
export const Outline: Story = { args: { variant: "outline", preview: true } };
export const WithoutIcon: Story = { args: { showIcon: false, preview: true } };
export const TopStart: Story = { args: { placement: "top-start" } };
export const TopCenter: Story = { args: { placement: "top" } };
export const BottomStart: Story = { args: { placement: "bottom-start" } };
export const Queue: Story = { args: { max: 2 } };
export const LoadingToResult: Story = { render: () => <AsyncToast /> };
export const CustomComposition: Story = { render: () => <CustomToast /> };
export const NestedTheme: Story = { render: () => <ScopedToast /> };
export const Dark: Story = { args: { preview: true }, globals: { theme: "dark" } };
export const Mobile: Story = {
  args: { preview: true },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
