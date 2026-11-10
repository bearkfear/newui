import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "./file-input.demo.css";
import {
  FileInputDisabledFieldsetExample,
  FileInputRequiredDropzoneExample,
} from "./file-input.accessibility.examples";
import {
  FileInputControlledExample,
  FileInputExample,
  FileInputMultipleExample,
  FileInputPresentationsExample,
} from "./file-input.examples";
import { FileInputFormExample } from "./file-input.form.examples";
import { FileInputInlineExample, FileInputLongNameExample } from "./file-input.inline.examples";
import { FileInputStatesExample } from "./file-input.states.examples";
import type { FileInputRootProps } from "./file-input.types";

const meta = {
  title: "Forms/FileInput",
  tags: ["autodocs"],
  args: { variant: "button", size: "md", tone: "neutral" },
  argTypes: {
    variant: { control: "inline-radio", options: ["button", "boxed", "compact"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    required: { control: "boolean" },
    multiple: { control: "boolean" },
    maxFiles: { control: "number" },
  },
  render: (args) => <FileInputExample {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          "Local file selection powered by Ark FileUpload. Simple button, full-surface boxed upload and a compact control sharing Input's 32/40/48px heights. The application owns network submission.",
      },
    },
  },
} satisfies Meta<FileInputRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Presentations: Story = { render: () => <FileInputPresentationsExample /> };
export const SizesAndInlineForm: Story = { render: () => <FileInputInlineExample /> };
export const States: Story = { render: () => <FileInputStatesExample /> };
export const StatesDark: Story = { ...States, globals: { theme: "dark" } };
export const MultipleAndLimits: Story = { render: () => <FileInputMultipleExample /> };
export const Controlled: Story = { render: () => <FileInputControlledExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <FileInputFormExample /> };
export const DisabledFieldset: Story = { render: () => <FileInputDisabledFieldsetExample /> };
export const RequiredDropzone: Story = { render: () => <FileInputRequiredDropzoneExample /> };
export const LongName: Story = { render: () => <FileInputLongNameExample /> };
export const Dark: Story = { ...Presentations, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...SizesAndInlineForm,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
