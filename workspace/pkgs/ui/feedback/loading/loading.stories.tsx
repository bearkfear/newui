import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Loading } from "./loading";
import { LoadingInCard } from "./stories/loading-in-card";
import { LoadingSizes } from "./stories/loading-sizes";

const meta = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  args: { size: "md", tone: "primary", label: "Loading…", showLabel: false },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: { control: "inline-radio", options: ["primary", "neutral"] },
    label: { control: "text" },
    showLabel: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An indeterminate loading indicator with a native status message. The spinner is decorative; its text remains available to assistive technology even when visually hidden. Reduced motion stops rotation. Use Button loading for an action and PageLoading for a larger placeholder.",
      },
    },
  },
} satisfies Meta<typeof Loading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithLabel: Story = { args: { showLabel: true, label: "Loading projects…" } };
export const Neutral: Story = { args: { tone: "neutral", showLabel: true } };
export const Sizes: Story = { render: () => <LoadingSizes /> };
export const InsideCard: Story = { render: () => <LoadingInCard /> };
export const LongLabel: Story = {
  args: { showLabel: true, label: "Preparing the latest project activity for your workspace…" },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "16rem" }}>
        <Story />
      </div>
    ),
  ],
};
export const Dark: Story = { globals: { theme: "dark" } };
export const ReducedMotion: Story = { args: { showLabel: true }, globals: { motion: "reduced" } };
