import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Navbar } from "./navbar";
import { ControlledNavbar } from "./stories/controlled-navbar";
import { NavbarExample } from "./stories/navbar-example";

const meta = {
  title: "Navigation/Navbar",
  component: Navbar.Root,
  tags: ["autodocs"],
  globals: { spacing: "flush" },
  args: { tone: "default", width: "lg" },
  argTypes: {
    tone: { control: "inline-radio", options: ["default", "subtle"] },
    width: { control: "select", options: ["sm", "md", "lg", "full"] },
    open: { control: false },
    defaultOpen: { control: "boolean" },
    onOpenChange: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Responsive header using the shared Navigation Menu foundation: text links with current/open indicators, simple or grouped panels, and cascading page-link disclosures. Click/tap opens each level; mobile cascades expand inline. Ark Navigation Menu owns top-level navigation, Popover owns deeper disclosures, and Collapsible owns the mobile toggle. Use Tab to traverse cascading links, Enter/Space to open, and Escape to dismiss. Desktop links remain visible from 768px. Link selection closes the navigation unless canceled.",
      },
    },
  },
  render: (args) => <NavbarExample {...args} />,
} satisfies Meta<typeof Navbar.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Subtle: Story = { args: { tone: "subtle" } };
export const WithSubmenus: Story = { args: { defaultValue: "resources" } };
export const GroupedPanel: Story = {
  render: (args) => <NavbarExample {...args} defaultValue="resources" grouped />,
};
export const Dark: Story = { globals: { theme: "dark" } };
export const SubmenusDark: Story = { ...WithSubmenus, globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileInitiallyOpen: Story = {
  args: { defaultOpen: true },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const MobileSubmenus: Story = {
  args: { defaultOpen: true, defaultValue: "resources" },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const Controlled: Story = {
  render: () => <ControlledNavbar />,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
