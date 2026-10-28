import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ProgressThemes } from "../progress/stories/progress-themes";
import {
  ProgressSizes,
  ProgressStates,
  ProgressTones,
} from "../progress/stories/progress-variants";
import { UploadProgress } from "../progress/stories/upload-progress";
import { ProgressCircle } from "./progress-circle";

const meta = {
  title: "Feedback/Progress Circle",
  component: ProgressCircle,
  tags: ["autodocs"],
  args: {
    value: 65,
    min: 0,
    max: 100,
    label: "Workspace sync",
    showValue: true,
    size: "md",
    tone: "primary",
  },
  argTypes: {
    value: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    label: { control: "text" },
    showValue: { control: "boolean" },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Circular presentation of the same Ark progress state, with a centered value and an optional visible task label. value=null produces an indeterminate arc without a percentage. Ark supplies SVG geometry and accessible value attributes. CSS supplies the track, tones, and reduced-motion-aware transitions.",
      },
    },
  },
} satisfies Meta<typeof ProgressCircle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Sizes: Story = { render: () => <ProgressSizes circle /> };
export const Tones: Story = { render: () => <ProgressTones circle /> };
export const States: Story = { render: () => <ProgressStates circle /> };
export const Indeterminate: Story = { args: { value: null, label: "Syncing workspace…" } };
export const WithoutValue: Story = { args: { showValue: false } };
export const CustomRange: Story = { args: { value: 6, max: 10, label: "6 of 10 files uploaded" } };
export const SimulatedUpload: Story = { render: () => <UploadProgress /> };
export const BothThemes: Story = { render: () => <ProgressThemes /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const ReducedMotion: Story = { ...Indeterminate, globals: { motion: "reduced" } };
