import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "./button";

const meta = {
  title: "Actions/Button",
  component: Button,
  render: (args) => <Button {...args} />,
  args: { children: "Button", variant: "solid", size: "md", disabled: false },
  argTypes: {
    children: { control: "text" },
    variant: { control: "inline-radio", options: ["solid", "outline"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
    disabled: { control: "boolean" },
    type: { control: "select", options: ["button", "submit", "reset"] },
    class: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Small: Story = { args: { size: "sm" } };
export const Disabled: Story = { args: { disabled: true } };

export const Counter: Story = {
  render: (args) => {
    const [count, setCount] = createSignal(0);
    return <Button {...args} onClick={() => setCount(count() + 1)}>Count: {count()}</Button>;
  },
};

export const CustomTokens: Story = {
  render: (args) => (
    <div style={{ "--nui-primary": "#15803d", "--nui-primary-hover": "#166534", "--nui-on-primary": "white" }}>
      <Button {...args} />
    </div>
  ),
};
