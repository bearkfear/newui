import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Progress } from "./progress";
import { ProgressThemes } from "./stories/progress-themes";
import { ProgressSizes, ProgressStates, ProgressTones } from "./stories/progress-variants";
import { UploadProgress } from "./stories/upload-progress";

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 45,
    min: 0,
    max: 100,
    label: "Uploading project assets",
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
          "An Ark-powered horizontal progress bar with task labeling, formatted value, six Radix tones, and three thicknesses. Use value=null for indeterminate work. Unknown values do not show a fabricated percentage; reduced motion keeps a static partial indicator. Frequent value changes are not live-announced automatically.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "52rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Sizes: Story = { render: () => <ProgressSizes /> };
export const Tones: Story = { render: () => <ProgressTones /> };
export const States: Story = { render: () => <ProgressStates /> };
export const Indeterminate: Story = { args: { value: null, label: "Preparing upload…" } };
export const WithoutVisibleLabel: Story = {
  args: { label: "", showValue: false, "aria-label": "Uploading project assets" },
};
export const WithoutValue: Story = { args: { showValue: false } };
export const CustomRange: Story = {
  args: {
    value: 6,
    max: 10,
    label: "Files uploaded",
    translations: { value: ({ value, max }) => `${value} of ${max} files` },
  },
};
export const SimulatedUpload: Story = { render: () => <UploadProgress /> };
export const BothThemes: Story = { render: () => <ProgressThemes /> };
export const Mobile: Story = {
  args: { label: "Uploading the latest project assets to your workspace" },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { ...Indeterminate, globals: { motion: "reduced" } };
