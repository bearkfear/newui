import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ContextMenuExample } from "./stories/context-menu-example";

const meta = {
  title: "Actions/Context Menu",
  tags: ["autodocs"],
  args: { icons: true },
  argTypes: { icons: { control: "boolean" } },
  parameters: {
    controls: { include: ["icons"] },
    docs: {
      description: {
        component:
          "Ark context actions opened by right-click or touch long-press. The ordinary Document actions button is an accessible click/keyboard alternative for the same menu. Menu navigation, selection, dismissal, and focus are managed by Ark. Both menus share one visual recipe and theme-preserving portal.",
      },
      source: {
        language: "tsx",
        code: `import { ContextMenu, DropdownMenu } from "newui";
import "newui/styles.css";

function Actions() {
  return <>
    <ContextMenu.Item value="open">Open</ContextMenu.Item>
    <ContextMenu.SubRoot>
      <ContextMenu.SubTrigger>Share</ContextMenu.SubTrigger>
      <ContextMenu.Content>
        <ContextMenu.Item value="copy-link">Copy link</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.SubRoot>
    <ContextMenu.Item value="archive" disabled>Archive</ContextMenu.Item>
  </>;
}

export function DocumentActions() {
  return <>
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild={(props) =>
        <div {...props()}>Right-click or press and hold this document.</div>
      } />
      <ContextMenu.Content><Actions /></ContextMenu.Content>
    </ContextMenu.Root>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Document actions</DropdownMenu.Trigger>
      <DropdownMenu.Content><Actions /></DropdownMenu.Content>
    </DropdownMenu.Root>
  </>;
}`,
      },
    },
  },
  render: (args) => <ContextMenuExample {...args} />,
} satisfies Meta<{ icons?: boolean }>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutIcons: Story = { args: { icons: false } };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
