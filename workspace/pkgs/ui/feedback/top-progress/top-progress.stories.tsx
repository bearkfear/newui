import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { GlobalProgressDemo } from "./stories/global-progress-demo";
import { TopProgressDemo } from "./stories/top-progress-demo";

const meta = {
  title: "Feedback/Top Progress",
  tags: ["autodocs"],
  args: { glow: true, delay: 150 },
  argTypes: {
    glow: { control: "boolean" },
    delay: { control: { type: "number", min: 0, step: 50 } },
  },
  parameters: {
    docs: {
      story: { inline: false, height: "420px" },
      description: {
        component:
          "A fixed page-loading bar with a shareable controller. Automatic progress is indeterminate to assistive technology; set(value) reports real progress through Ark. track(promise) keeps the bar active until all tracked operations finish. Fast operations remain hidden. Mount one bar per controller; no library singleton is created.",
      },
    },
  },
  render: (args) => <TopProgressDemo {...args} />,
} satisfies Meta<typeof TopProgressDemo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const GlobalController: Story = { render: () => <GlobalProgressDemo /> };
export const WithoutGlow: Story = { args: { glow: false } };
export const Immediate: Story = { args: { delay: 0 } };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
