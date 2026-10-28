import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledSheet } from "./stories/controlled-sheet";
import { LongSheet } from "./stories/long-sheet";
import { ResponsiveSheet } from "./stories/responsive-sheet";
import { SheetExample, type SheetExampleProps } from "./stories/sheet-example";
import { SheetWithDialog } from "./stories/sheet-with-dialog";

const meta = {
  title: "Overlays/Sheet",
  tags: ["autodocs"],
  args: {
    side: "right",
    size: "md",
    modal: true,
    closeOnEscape: true,
    closeOnInteractOutside: true,
  },
  argTypes: {
    side: { control: "inline-radio", options: ["right", "left", "top", "bottom"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    modal: { control: "boolean" },
    closeOnEscape: { control: "boolean" },
    closeOnInteractOutside: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "An edge-attached presentation of the existing Ark-powered Dialog. Slides from any viewport edge, with the shared header, scrollable body, footer, backdrop, and themed portal. Modal by default; focus, dismissal, presence, and nested layers remain owned by Ark Dialog. No drag gestures or snap points are added.",
      },
    },
  },
  render: (args) => <SheetExample {...args} />,
} satisfies Meta<SheetExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Right: Story = {};
export const Left: Story = { args: { side: "left" } };
export const Top: Story = { args: { side: "top" } };
export const Bottom: Story = { args: { side: "bottom" } };
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const Controlled: Story = { render: () => <ControlledSheet /> };
export const NonModal: Story = { args: { modal: false } };
export const NoOutsideDismiss: Story = { args: { closeOnInteractOutside: false } };
export const LongContent: Story = { render: () => <LongSheet /> };
export const BottomLongContent: Story = { render: () => <LongSheet side="bottom" /> };
export const Responsive: Story = { render: () => <ResponsiveSheet /> };
export const NestedDialog: Story = { render: () => <SheetWithDialog /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileBottom: Story = {
  args: { side: "bottom" },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const MobileLongContent: Story = {
  ...BottomLongContent,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
