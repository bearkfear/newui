import { fn } from "storybook/test";
import type { Meta } from "storybook-solidjs-vite";
import { Button } from "../button";

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"],
  render: (args) => <Button {...args} />,
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    disabled: false,
    type: "button",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        component:
          "A native SolidJS button with five visual variants, six semantic tones, four sizes, icons, loading, rounded and full-width options, and visible keyboard focus. Use the native disabled attribute when an action is unavailable. Defaults to type=button to avoid accidental form submission.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Visible label. Provide an accessible name for every button.",
      table: { category: "Content" },
    },
    variant: {
      control: "inline-radio",
      options: ["solid", "outline", "soft", "ghost", "link"],
      description: "Visual emphasis.",
      table: { category: "Appearance", defaultValue: { summary: "solid" } },
    },
    size: {
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg"],
      description: "Control height: xs = 24px; sm = 32px; md = 40px; lg = 48px.",
      table: { category: "Appearance", defaultValue: { summary: "md" } },
    },
    tone: {
      control: "select",
      options: ["primary", "neutral", "info", "success", "warning", "danger"],
    },
    loading: {
      control: "boolean",
      description:
        "Disables activation, retains the accessible name and label width, and exposes aria-busy.",
    },
    rounded: { control: "boolean" },
    fullWidth: { control: "boolean" },
    responsive: {
      control: "boolean",
      description: "Use one smaller size below 640px; xs remains unchanged.",
    },
    iconOnly: {
      control: "boolean",
      description: "Square button; supply aria-label for an icon-only action.",
    },
    startIcon: { control: false },
    endIcon: { control: false },
    disabled: {
      control: "boolean",
      description: "Prevents pointer and keyboard activation.",
      table: { category: "Behavior", defaultValue: { summary: "false" } },
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "Native button type.",
      table: { category: "Behavior", defaultValue: { summary: "button" } },
    },
    class: {
      control: "text",
      description:
        "Additional CSS classes; arbitrary utility conflict resolution is not guaranteed.",
      table: { category: "Appearance" },
    },
    onClick: {
      control: false,
      description: "Native click handler. Calls are visible in Actions.",
      table: { category: "Events" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
