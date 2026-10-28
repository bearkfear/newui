import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { CollapsibleExample, type CollapsibleExampleProps } from "./stories/collapsible-example";
import { ControlledCollapsible } from "./stories/controlled-collapsible";
import { CustomCollapsible } from "./stories/custom-collapsible";
import { DynamicCollapsible } from "./stories/dynamic-collapsible";

const meta = {
  title: "Content/Collapsible",
  tags: ["autodocs"],
  args: { variant: "outline", disabled: false, defaultOpen: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["outline", "soft"] },
    disabled: { control: "boolean" },
    defaultOpen: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "44rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A standalone disclosure powered by Ark Collapsible. The trigger uses native disabled behavior, supports Button composition, and exposes Ark’s expanded/controlled associations. Content lazily mounts and stays mounted after opening. Disclosure animation and indicator rotation respect reduced motion.",
      },
    },
  },
  render: (args) => <CollapsibleExample {...args} />,
} satisfies Meta<CollapsibleExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Soft: Story = { args: { variant: "soft" } };
export const InitiallyOpen: Story = { args: { defaultOpen: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Controlled: Story = { render: () => <ControlledCollapsible /> };
export const ButtonTrigger: Story = { render: () => <CustomCollapsible /> };
export const DynamicContent: Story = { render: () => <DynamicCollapsible /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const ReducedMotion: Story = { globals: { motion: "reduced" } };
