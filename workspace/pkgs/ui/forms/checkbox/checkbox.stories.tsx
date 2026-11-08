import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import { ChoiceFormExample } from "../choice/choice.form.examples";
import type { CheckboxRootProps } from "./checkbox";
import {
  CheckboxAppearanceExample,
  CheckboxExample,
  CheckboxStatesExample,
  ControlledCheckboxExample,
} from "./checkbox.examples";

const meta = {
  title: "Forms/Checkbox",
  tags: ["autodocs"],
  args: { size: "md", tone: "neutral" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: (args) => <CheckboxExample {...args} />,
} satisfies Meta<CheckboxRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Controlled: Story = { render: () => <ControlledCheckboxExample /> };
export const States: Story = { render: () => <CheckboxStatesExample /> };
export const SizesAndTones: Story = { render: () => <CheckboxAppearanceExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <ChoiceFormExample /> };
export const Indeterminate: Story = { args: { defaultChecked: "indeterminate" } };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
