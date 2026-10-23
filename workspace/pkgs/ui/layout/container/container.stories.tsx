import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Container } from "./container";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  args: { size: "lg" },
  argTypes: { size: { control: "select", options: ["sm", "md", "lg", "full"] } },
  parameters: { docs: { description: { component: "Centered full-width div with sm (48rem), md (64rem), lg (80rem), or full maximum width, including responsive gutters." } } },
  render: (args) => <Container {...args}><div style={{ padding: "24px", background: "var(--nui-muted)", border: "1px dashed var(--nui-primary)" }}>Centered content with responsive inline padding. Resize the viewport to inspect the gutters.</div></Container>,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const RightToLeft: Story = { globals: { direction: "rtl" } };
