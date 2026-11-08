import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import {
  GroupedSelectExample,
  ScrollableSelectExample,
  SelectDialogExample,
} from "./select.advanced.examples";
import {
  ControlledSelectExample,
  MultipleSelectExample,
  SelectExample,
  type SelectExampleProps,
} from "./select.examples";
import { SelectFormExample } from "./select.form.examples";
import {
  SelectSizesExample,
  SelectStatesExample,
  SelectTonesExample,
} from "./select.states.examples";

const meta = {
  title: "Forms/Select",
  tags: ["autodocs"],
  args: { size: "md", tone: "neutral" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
  },
  render: (args) => <SelectExample {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          "Ark Select with typed collections, single/multiple selection, Field states, native form participation, and theme-preserving overlays. Values use string arrays in both selection modes.",
      },
    },
  },
} satisfies Meta<SelectExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Open: Story = { args: { defaultOpen: true, defaultValue: ["br"] } };
export const Controlled: Story = { render: () => <ControlledSelectExample /> };
export const Multiple: Story = { render: () => <MultipleSelectExample /> };
export const Groups: Story = { render: () => <GroupedSelectExample /> };
export const Scrollable: Story = { render: () => <ScrollableSelectExample /> };
export const States: Story = { render: () => <SelectStatesExample /> };
export const Sizes: Story = { render: () => <SelectSizesExample /> };
export const Tones: Story = { render: () => <SelectTonesExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <SelectFormExample /> };
export const InsideDialog: Story = { render: () => <SelectDialogExample /> };
export const Dark: Story = { ...Open, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Open,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
