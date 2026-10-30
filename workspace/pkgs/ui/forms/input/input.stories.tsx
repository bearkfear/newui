import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Field } from "../field/field";
import { ClearableField, LoadingField, PasswordField } from "../stories/input-examples";
import { ReadonlyAndDisabled, TextSizes, TextTones } from "../stories/text-field-matrices";
import { Input, type InputProps } from "./input";
import "../stories/text-fields-demo.css";

const meta = {
  title: "Forms/Input",
  tags: ["autodocs"],
  args: {
    size: "md",
    tone: "neutral",
    rounded: false,
    placeholder: "you@example.com",
    type: "email",
    valid: false,
    invalid: false,
    disabled: false,
    readOnly: false,
  },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    type: { control: "select", options: ["text", "email", "password", "search", "tel", "url"] },
  },
  render: (args) => (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input {...args} name="email" />
    </Field.Root>
  ),
  parameters: {
    docs: {
      description: {
        component:
          "A styled Ark Field.Input. It remains a native input, works inside Field or independently, forwards attributes/events/refs, and supports controlled value or initial defaultValue. Use htmlSize for the native size attribute. Static appearance is readonly. A tone is visual; only explicit valid/invalid flags represent validation. Use InputGroup.Loading for a visible spinner.",
      },
    },
  },
} satisfies Meta<InputProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Standalone: Story = {
  render: () => <Input aria-label="Project name" placeholder="Project name" />,
};
export const Sizes: Story = { render: () => <TextSizes /> };
export const Tones: Story = { render: () => <TextTones /> };
export const Rounded: Story = { args: { rounded: true } };
export const Password: Story = { render: () => <PasswordField /> };
export const Clearable: Story = { render: () => <ClearableField /> };
export const ReadonlyDisabledAndStatic: Story = { render: () => <ReadonlyAndDisabled /> };
export const Loading: Story = { render: () => <LoadingField /> };
export const Mobile: Story = {
  ...Tones,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
