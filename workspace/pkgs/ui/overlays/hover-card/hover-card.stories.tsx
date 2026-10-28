import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledHoverCard } from "./stories/controlled-hover-card";
import { HoverCardExample, type HoverCardExampleProps } from "./stories/hover-card-example";
import { HoverCardInDialog } from "./stories/hover-card-in-dialog";
import { HoverCardThemes } from "./stories/hover-card-themes";

const meta = {
  title: "Overlays/Hover Card",
  tags: ["autodocs"],
  args: {
    placement: "bottom-start",
    openDelay: 600,
    closeDelay: 300,
    showArrow: true,
    disabled: false,
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "top-start", "right", "bottom", "bottom-start", "bottom-end", "left"],
    },
    openDelay: { control: { type: "number", min: 0, step: 100 } },
    closeDelay: { control: { type: "number", min: 0, step: 100 } },
    showArrow: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Rich supplementary previews on hover or focus. Ark manages delays, pointer travel to the card, dismissal, positioning, and presence. Content includes the themed portal, a scrollable body, and an optional bordered arrow. The trigger stays a native link; keep essential content at its destination and use Popover for deliberate interactive tasks.",
      },
    },
  },
  render: (args) => <HoverCardExample {...args} />,
} satisfies Meta<HoverCardExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithoutArrow: Story = { args: { showArrow: false } };
export const Top: Story = { args: { placement: "top" } };
export const Right: Story = { args: { placement: "right" } };
export const Delayed: Story = { args: { openDelay: 1200, closeDelay: 500 } };
export const Disabled: Story = { args: { disabled: true } };
export const Controlled: Story = { render: () => <ControlledHoverCard /> };
export const WithinDialog: Story = { render: () => <HoverCardInDialog /> };
export const BothThemes: Story = { render: (args) => <HoverCardThemes {...args} /> };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
