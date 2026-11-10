import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "../choice/choice.flow.demo.css";
import { ChoiceFlowExample } from "../choice/choice.flow.examples";
import { ChoiceFormExample } from "../choice/choice.form.examples";
import type { RadioGroupRootProps } from "./radio-group";
import {
  ControlledRadioExample,
  RadioAppearanceExample,
  RadioGroupExample,
  RadioStatesExample,
} from "./radio-group.examples";

const meta = {
  title: "Forms/RadioGroup",
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
  render: (args) => <RadioGroupExample {...args} />,
} satisfies Meta<RadioGroupRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Controlled: Story = { render: () => <ControlledRadioExample /> };
export const States: Story = { render: () => <RadioStatesExample /> };
export const SizesAndTones: Story = { render: () => <RadioAppearanceExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <ChoiceFormExample /> };
export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const FlowAlignment: Story = { render: () => <ChoiceFlowExample /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
