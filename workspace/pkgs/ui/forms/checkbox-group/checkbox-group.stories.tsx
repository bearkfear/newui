import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import { ChoiceFormExample } from "../choice/choice.form.examples";
import type { CheckboxGroupRootProps } from "./checkbox-group";
import {
  CheckboxGroupExample,
  CheckboxGroupStatesExample,
  CheckboxGroupValidationExample,
  SelectAllExample,
} from "./checkbox-group.examples";

const meta = {
  title: "Forms/CheckboxGroup",
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
  render: (args) => <CheckboxGroupExample {...args} />,
} satisfies Meta<CheckboxGroupRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const SelectAll: Story = { render: () => <SelectAllExample /> };
export const Validation: Story = { render: () => <CheckboxGroupValidationExample /> };
export const StatesAndLimit: Story = { render: () => <CheckboxGroupStatesExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <ChoiceFormExample /> };
export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
