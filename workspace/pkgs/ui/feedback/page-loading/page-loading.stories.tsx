import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { PageLoading } from "./page-loading";
import { LoadingFlow } from "./stories/loading-flow";
import { LoadingThemes } from "./stories/loading-themes";
import { SectionLoading } from "./stories/section-loading";

const meta = {
  title: "Feedback/Page Loading",
  component: PageLoading,
  tags: ["autodocs"],
  args: {
    label: "Loading workspace…",
    description: "Preparing your projects and recent updates.",
    layout: "page",
    tone: "primary",
  },
  argTypes: {
    label: { control: "text" },
    description: { control: "text" },
    layout: { control: "inline-radio", options: ["page", "section"] },
    tone: { control: "inline-radio", options: ["primary", "neutral"] },
  },
  globals: { spacing: "flush" },
  parameters: {
    docs: {
      description: {
        component:
          "A centered in-flow loading placeholder, with a large indicator, message, and optional description. Page layout reserves at least the viewport height; section layout reserves 16rem. It does not create an overlay, trap focus, or run requests. Applications own pending state and aria-busy on the content region.",
      },
    },
  },
} satisfies Meta<typeof PageLoading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Section: Story = { args: { layout: "section" } };
export const WithoutDescription: Story = { args: { description: "" } };
export const InsideCard: Story = {
  render: () => <SectionLoading />,
  globals: { spacing: "comfortable" },
};
export const LoadingToContent: Story = {
  render: () => <LoadingFlow />,
  globals: { spacing: "comfortable" },
};
export const BothThemes: Story = {
  render: () => <LoadingThemes />,
  globals: { spacing: "comfortable" },
};
export const LongMessage: Story = {
  args: {
    label: "Preparing your workspace and synchronizing shared project updates…",
    description: "This message wraps within the available space, including small screens.",
  },
};
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
