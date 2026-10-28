import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { AlertDialogExample, type AlertDialogExampleProps } from "./stories/alert-dialog-example";
import { AsyncAlertDialog } from "./stories/async-alert-dialog";
import { PublishConfirmation } from "./stories/publish-confirmation";

const meta = {
  title: "Overlays/Alert Dialog",
  tags: ["autodocs"],
  args: { size: "sm", closeOnEscape: true },
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    closeOnEscape: { control: "boolean" },
    defaultOpen: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Critical confirmations built on the validated Dialog surface. Ark's alertdialog role focuses Cancel and prevents outside dismissal. Escape cancels by default. ActionTrigger closes unless its click is prevented; controlled async operations remain application-owned.",
      },
    },
  },
  render: (args) => <AlertDialogExample {...args} />,
} satisfies Meta<AlertDialogExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Medium: Story = { args: { size: "md" } };
export const ExplicitChoice: Story = { args: { closeOnEscape: false } };
export const AsyncConfirmation: Story = { render: () => <AsyncAlertDialog /> };
export const PublishUpdate: Story = { render: () => <PublishConfirmation /> };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const Dark: Story = { globals: { theme: "dark" } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
