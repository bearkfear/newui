import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledDropdownMenu, DropdownMenuExample } from "./stories/dropdown-menu-example";

const meta = {
  title: "Actions/Dropdown Menu",
  tags: ["autodocs"],
  args: { defaultOpen: false, disabled: false, icons: true },
  argTypes: {
    defaultOpen: { control: "boolean" },
    disabled: { control: "boolean" },
    icons: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A compact Ark-powered action menu. Enter/Space or Arrow Down opens it; Arrow Up/Down, Home/End, and typeahead navigate enabled items. Enter selects, Escape dismisses, and Ark restores focus. Items support optional icons, grouping, disabled states, and destructive styling. SubRoot and SubTrigger compose Ark submenus; Arrow Right/Left opens and returns between levels. Selections update the demo status.",
      },
      source: {
        language: "tsx",
        code: `import { DropdownMenu } from "@egcs/newui";
import "@egcs/newui/styles.css";

<DropdownMenu.Root>
  <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item value="open" onSelect={() => console.log("Open")}>Open</DropdownMenu.Item>
    <DropdownMenu.SubRoot>
      <DropdownMenu.SubTrigger>Share</DropdownMenu.SubTrigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item value="copy-link">Copy link</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.SubRoot>
    <DropdownMenu.Item value="archive" disabled>Archive</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item value="delete" destructive>Delete</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>`,
      },
    },
  },
  render: (args) => <DropdownMenuExample {...args} />,
} satisfies Meta<{ defaultOpen?: boolean; disabled?: boolean; icons?: boolean }>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutIcons: Story = { args: { icons: false, defaultOpen: true } };
export const Open: Story = { args: { defaultOpen: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Controlled: Story = {
  render: () => <ControlledDropdownMenu />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: `import { createSignal } from "solid-js";
import { DropdownMenu } from "@egcs/newui";
import "@egcs/newui/styles.css";

export function Actions() {
  const [open, setOpen] = createSignal(false);
  return <DropdownMenu.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
    <DropdownMenu.Trigger>Actions</DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item value="open" onSelect={() => console.log("Open")}>Open</DropdownMenu.Item>
      <DropdownMenu.Item value="duplicate">Duplicate</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>;
}`,
      },
    },
  },
};
export const Dark: Story = { ...Open, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Open,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const NestedDark: Story = {
  globals: { theme: "light" },
  render: () => (
    <div
      data-nui-theme="dark"
      style={{
        background: "var(--nui-background)",
        color: "var(--nui-foreground)",
        padding: "1rem",
        "border-radius": "0.75rem",
      }}
    >
      <DropdownMenuExample defaultOpen />
    </div>
  ),
};
