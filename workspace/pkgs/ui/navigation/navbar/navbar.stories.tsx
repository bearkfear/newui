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
          "A native navigation landmark powered by Ark Navigation Menu for submenus, current links, hover, dismissal, and keyboard navigation, plus Ark Collapsible for mobile disclosure. Desktop links remain visible from 768px; mobile supports a toggle, Escape with focus return, and closing after a link selection.",
      },
    },
  },
  render: (args) => <NavbarExample {...args} />,
} satisfies Meta<typeof Navbar.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Subtle: Story = { args: { tone: "subtle" } };
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileInitiallyOpen: Story = {
  args: { defaultOpen: true },
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const Controlled: Story = {
  render: () => <ControlledNavbar />,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
