import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AnchoredPopover } from "./stories/anchored-popover";
import { ControlledPopover } from "./stories/controlled-popover";
import { LongPopover } from "./stories/long-popover";
import { PopoverArrowThemes } from "./stories/popover-arrow-themes";
import { PopoverExample, type PopoverExampleProps } from "./stories/popover-example";
import { PopoverInDialog } from "./stories/popover-in-dialog";
import { PopoverThemes } from "./stories/popover-themes";

const meta = {
  title: "Overlays/Popover",
  tags: ["autodocs"],
  args: {
    placement: "bottom-start",
    modal: false,
    closeOnEscape: true,
    closeOnInteractOutside: true,
    showArrow: true,
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "top-start", "right", "bottom", "bottom-start", "bottom-end", "left"],
    },
    modal: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    closeOnInteractOutside: { control: "boolean" },
    showArrow: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Click or tap disclosure for interactive content. Ark owns focus, dismissal, accessible associations, and collision-aware positioning. Content includes the shared themed portal, a compact card, and an optional arrow. Header, body, and footer follow the Dialog visual language. Nonmodal by default; application state remains outside the lazy content.",
      },
    },
  },
  render: (args) => <PopoverExample {...args} />,
} satisfies Meta<PopoverExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithoutArrow: Story = { args: { showArrow: false } };
export const Top: Story = { args: { placement: "top" } };
export const Right: Story = { args: { placement: "right" } };
export const Modal: Story = { args: { modal: true } };
export const NoOutsideDismiss: Story = { args: { closeOnInteractOutside: false } };
export const Controlled: Story = { render: () => <ControlledPopover /> };
export const SeparateAnchor: Story = { render: () => <AnchoredPopover /> };
export const WithinDialog: Story = { render: () => <PopoverInDialog /> };
export const NestedThemes: Story = { render: () => <PopoverThemes /> };
export const ArrowInBothThemes: Story = { render: (args) => <PopoverArrowThemes {...args} /> };
export const LongContent: Story = { render: () => <LongPopover /> };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileLongContent: Story = {
  ...LongContent,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
