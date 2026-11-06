import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import { TextareaExamples, TextTones } from "../stories/text-field-matrices";
import { Textarea, type TextareaProps } from "./textarea";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Textarea",
  tags: ["autodocs"],
  args: {
    rows: 4,
    size: "md",
    tone: "neutral",
    resize: "vertical",
    autoresize: false,
    placeholder: "Tell us a little about your project…",
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    resize: { control: "select", options: ["vertical", "horizontal", "both", "none"] },
    autoresize: {
      control: "boolean",
      description:
        "Ark configures autoresize on mount; remount the story after changing this option.",
    },
  },
  render: (args) => (
    <Field.Root>
      <Field.Label>Project brief</Field.Label>
      <Textarea {...args} name="brief" />
      <Field.Description>Keep the goal clear and the next step small.</Field.Description>
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "A native textarea powered by Ark Field.Textarea, with shared field styling and accessible associations. Supports rows, columns, maxlength, native events/refs, value/defaultValue, manual resizing, and Ark autoresize. Autoresize is configured on mount and disables manual resizing. Default resize is vertical; no rounded-pill variant is provided for multiline text.",
      },
    },
  },
} satisfies Meta<TextareaProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Disabled: Story = {
  args: { disabled: true, defaultValue: "A project brief that cannot be edited." },
};
export const Examples: Story = { render: () => <TextareaExamples /> };
export const Tones: Story = {
  render: () => <TextTones renderControl={() => <Textarea defaultValue="A semantic tone" />} />,
};
export const Small: Story = { args: { size: "sm", rows: 3 } };
export const Large: Story = { args: { size: "lg" } };
export const Standalone: Story = {
  render: () => <Textarea aria-label="Private notes" placeholder="Private notes" />,
};
export const Mobile: Story = {
  ...Examples,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
