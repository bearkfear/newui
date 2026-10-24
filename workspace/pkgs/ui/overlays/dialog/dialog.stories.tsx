import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledDialog } from "./stories/controlled-dialog";
import { CustomDialog } from "./stories/custom-dialog";
import type { DialogExampleProps } from "./stories/dialog-example";
import { DialogExample } from "./stories/dialog-example";
import { ImageDialog } from "./stories/image-dialog";
import { LongDialog } from "./stories/long-dialog";
import { NestedDialog } from "./stories/nested-dialog";

const meta = {
  title: "Overlays/Dialog",
  tags: ["autodocs"],
  args: { size: "md", closeOnEscape: true, closeOnInteractOutside: true },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    closeOnEscape: { control: "boolean" },
    closeOnInteractOutside: { control: "boolean" },
    defaultOpen: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A Bulma-inspired modal card with a distinct header, scrollable body, and action footer. Ark UI manages focus, dismissal, scroll locking, IDs, and controlled state. Content includes a scoped portal, backdrop, and positioner; those parts are also available for custom composition. The free variant supports media previews without card chrome.",
      },
    },
  },
  render: (args) => <DialogExample {...args} />,
} satisfies Meta<DialogExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const LongContent: Story = { render: () => <LongDialog /> };
export const ImagePreview: Story = { render: () => <ImageDialog /> };
export const Controlled: Story = { render: () => <ControlledDialog /> };
export const NoOutsideDismiss: Story = { args: { closeOnInteractOutside: false } };
export const Nested: Story = { render: () => <NestedDialog /> };
export const CustomComposition: Story = { render: () => <CustomDialog /> };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileLongContent: Story = {
  render: () => <LongDialog />,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
