import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledTooltip } from "./stories/controlled-tooltip";
import { TooltipExample, type TooltipExampleProps } from "./stories/tooltip-example";
import { TooltipInDialog } from "./stories/tooltip-in-dialog";
import { TooltipPlacements } from "./stories/tooltip-placements";
import { TooltipThemes } from "./stories/tooltip-themes";

const meta = {
  title: "Overlays/Tooltip",
  tags: ["autodocs"],
  args: {
    placement: "top",
    openDelay: 400,
    closeDelay: 150,
    showArrow: true,
    disabled: false,
    content: "Move this project to your archive.",
  },
  argTypes: {
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
      ],
    },
    openDelay: { control: { type: "number", min: 0, step: 100 } },
    closeDelay: { control: { type: "number", min: 0, step: 50 } },
    showArrow: { control: "boolean" },
    disabled: { control: "boolean" },
    content: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Short supporting text on hover or keyboard focus. Ark owns delays, accessible descriptions, dismissal, and collision-aware positioning. Content includes a themed portal and an optional arrow. The pointer can move onto the tooltip to keep it visible; use Popover for links or controls. Touch users should have visible labels or another way to find the information.",
      },
    },
  },
  render: (args) => <TooltipExample {...args} />,
} satisfies Meta<TooltipExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithoutArrow: Story = { args: { showArrow: false } };
export const Placements: Story = { render: () => <TooltipPlacements /> };
export const Delayed: Story = { args: { openDelay: 1000, closeDelay: 300 } };
export const Disabled: Story = { args: { disabled: true } };
export const Controlled: Story = { render: () => <ControlledTooltip /> };
export const WithinDialog: Story = { render: () => <TooltipInDialog /> };
export const NestedThemes: Story = { render: () => <TooltipThemes /> };
export const LongContent: Story = {
  args: {
    content:
      "Archived projects stay available to workspace members. You can restore this project from the archive whenever you need it.",
  },
};
export const Mobile: Story = {
  ...LongContent,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
