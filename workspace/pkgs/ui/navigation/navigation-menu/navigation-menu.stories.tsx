import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { NavigationMenuExample } from "./stories/navigation-menu-example";
import { groupedNavigationSource, navigationMenuSource } from "./stories/navigation-menu-source";

const meta = {
  title: "Navigation/Navigation Menu",
  tags: ["autodocs"],
  parameters: {
    docs: {
      source: { language: "tsx", code: navigationMenuSource },
      description: {
        component:
          "Website links with simple dropdowns, grouped panels, and nested disclosures. This is the shared navigation foundation used by Navbar. Top-level panels use Ark Navigation Menu; cascading levels use nonmodal Ark Popover with native links and Tab navigation. Click/tap opens each level. This is page navigation; use Menubar for application commands.",
      },
    },
  },
  render: () => <NavigationMenuExample />,
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Open: Story = { render: () => <NavigationMenuExample defaultValue="resources" /> };
export const GroupedPanel: Story = {
  parameters: { docs: { source: { code: groupedNavigationSource } } },
  render: () => <NavigationMenuExample wide defaultValue="resources" />,
};
export const Cascading: Story = {
  render: () => <NavigationMenuExample defaultValue="resources" />,
};
export const Dark: Story = { globals: { theme: "dark" } };
export const GroupedDark: Story = { ...GroupedPanel, globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
