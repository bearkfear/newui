import type { Meta, StoryObj } from "storybook-solidjs-vite";
import "../stories/text-fields-demo.css";
import "./switch.demo.css";
import type { SwitchRootProps } from "./switch";
import {
  ControlledSwitchExample,
  SwitchExample,
  SwitchSizesExample,
  SwitchTonesExample,
  SwitchVariantsExample,
} from "./switch.examples";
import { SwitchFormExample } from "./switch.form.examples";
import { SwitchSettingsExample, SwitchStatesExample } from "./switch.states.examples";

const meta = {
  title: "Forms/Switch",
  tags: ["autodocs"],
  args: { size: "md", tone: "neutral", variant: "solid", rounded: true, labelPosition: "end" },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    passiveTone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    variant: { control: "inline-radio", options: ["solid", "outline"] },
    labelPosition: { control: "inline-radio", options: ["start", "end"] },
    rounded: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    invalid: { control: "boolean" },
  },
  render: (args) => <SwitchExample {...args} />,
  parameters: {
    docs: {
      description: {
        component:
          "Ark Switch with Buefy-inspired solid/outline tracks, rounded/square geometry, passive tones, label placement, and Field feedback. Includes a native input for keyboard interaction, FormData, and cancelable resets.",
      },
    },
  },
} satisfies Meta<SwitchRootProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Controlled: Story = { render: () => <ControlledSwitchExample /> };
export const Sizes: Story = { render: () => <SwitchSizesExample /> };
export const Tones: Story = { render: () => <SwitchTonesExample /> };
export const VariantsAndIcons: Story = { render: () => <SwitchVariantsExample /> };
export const States: Story = { render: () => <SwitchStatesExample /> };
export const Settings: Story = { render: () => <SwitchSettingsExample /> };
export const NativeSubmissionAndReset: Story = { render: () => <SwitchFormExample /> };
export const Dark: Story = { ...VariantsAndIcons, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Settings,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
