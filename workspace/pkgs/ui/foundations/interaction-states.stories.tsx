import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { FocusMotion } from "./stories/focus-motion";
import { FocusAndStates, MotionSample } from "./stories/interaction-samples";

const meta = {
  title: "Foundations/Interaction states",
  parameters: { controls: { disable: true } },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <main class="nui-catalog nui-catalog-stack">
      <p class="nui-catalog-eyebrow">Foundations / Interaction states</p>
      <h1>Clear feedback, familiar behavior.</h1>
      <p class="nui-catalog-lead">
        Use Tab and Shift+Tab to review focus, then Enter or Space to activate controls. System
        reduced motion remains respected in both samples.
      </p>
      <FocusAndStates />
      <MotionSample reduced={false} />
      <MotionSample reduced />
    </main>
  ),
};

export const Dark: Story = { ...Overview, globals: { theme: "dark" } };
export const ReducedMotion: Story = { ...Overview, globals: { motion: "reduced" } };
export const SharedFocus: Story = { render: () => <FocusMotion /> };
