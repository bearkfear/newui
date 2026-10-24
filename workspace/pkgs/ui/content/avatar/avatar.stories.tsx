import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Avatar } from "./avatar";
import { AvatarExample } from "./stories/avatar-example";
import { AvatarLoading } from "./stories/avatar-loading";

const meta = {
  title: "Content/Avatar",
  component: Avatar.Root,
  tags: ["autodocs"],
  args: { size: "md", shape: "circle" },
  argTypes: {
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "inline-radio", options: ["circle", "square"] },
    onStatusChange: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Ark UI Avatar manages image loading and fallback visibility. Root sets size and shape; Image and Fallback remain optional parts. Give the avatar an accessible name, or hide a redundant avatar when the adjacent text already identifies its owner. Initials are explicit fallback content supplied by the application.",
      },
    },
  },
  render: (args) => <AvatarExample {...args} />,
} satisfies Meta<typeof Avatar.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Square: Story = { args: { shape: "square" } };
export const Fallback: Story = {
  render: (args) => (
    <Avatar.Root {...args} role="img" aria-label="Alex Morgan">
      <Avatar.Fallback>AM</Avatar.Fallback>
    </Avatar.Root>
  ),
};
export const BrokenImage: Story = {
  render: (args) => (
    <Avatar.Root {...args} role="img" aria-label="Alex Morgan">
      <Avatar.Image src="data:image/png;base64,broken" alt="" />
      <Avatar.Fallback>AM</Avatar.Fallback>
    </Avatar.Root>
  ),
};
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", "flex-wrap": "wrap", "align-items": "center", gap: "16px" }}>
      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {(size) => <AvatarExample size={size} />}
      </For>
    </div>
  ),
};
export const ImageRecovery: Story = { render: () => <AvatarLoading /> };
export const WithName: Story = {
  render: (args) => (
    <div style={{ display: "flex", "align-items": "center", gap: "12px" }}>
      <Avatar.Root {...args} aria-hidden="true">
        <Avatar.Fallback>AM</Avatar.Fallback>
      </Avatar.Root>
      <span>Alex Morgan</span>
    </div>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
