import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { MenubarExample } from "./stories/menubar-example";
import { menubarSource } from "./stories/menubar-source";

const meta = {
  title: "Actions/Menubar",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: { language: "tsx", code: menubarSource },
      description: {
        component:
          "Persistent application commands, such as File / Edit / View. Reuses Ark's multi-trigger Menu and the existing Dropdown Menu foundation. Tab enters the bar; Left/Right and Home/End move between enabled triggers. Enter, Space, or Up/Down opens a menu. While open, Left/Right switches menus unless Right enters a submenu. Nested menus keep Ark keyboard navigation, pointer intent, typeahead, dismissal, and selection. Use Navigation Menu or Navbar for page links.",
      },
    },
  },
  render: () => <MenubarExample />,
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Open: Story = { render: () => <MenubarExample defaultOpen /> };
export const Controlled: Story = { render: () => <MenubarExample controlled /> };
export const Cascading: Story = { ...Open };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
