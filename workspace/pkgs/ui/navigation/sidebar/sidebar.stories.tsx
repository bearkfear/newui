import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { ControlledSidebar, SidebarExample } from "./stories/sidebar-example";
import { sidebarSource } from "./stories/sidebar-source";

const meta = {
  title: "Navigation/Sidebar",
  tags: ["autodocs"],
  component: SidebarExample,
  args: { resizable: true, defaultCollapsed: false, defaultMobileOpen: false },
  argTypes: {
    resizable: {
      control: "boolean",
      description: "Expose the existing Resizable divider on desktop.",
    },
    defaultCollapsed: {
      control: "boolean",
      description: "Initial compact icon rail. Remount the story to reset.",
    },
    defaultMobileOpen: { control: "boolean", description: "Initially open the Sheet below 48rem." },
  },
  parameters: {
    docs: {
      source: { language: "tsx", code: sidebarSource },
      description: {
        component:
          "Application sidebar composed with VerticalMenu, Resizable (Ark Splitter), and Sheet (Ark Dialog). Drag or keyboard-resize the optional divider; use Enter or the toolbar toggle to collapse to icons. Desktop widths are constrained in pixels. Below 48rem, the navigation opens in a modal Sheet with Escape/outside dismissal and focus restoration. Native links and Collapsible branches retain their semantics. No new dependency or automated tests.",
      },
    },
  },
} satisfies Meta<typeof SidebarExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const FixedWidth: Story = { args: { resizable: false } };
export const Compact: Story = { args: { defaultCollapsed: true } };
export const Controlled: Story = { render: () => <ControlledSidebar /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
export const MobileOpen: Story = { ...Mobile, args: { defaultMobileOpen: true } };
export const MobileDark: Story = { ...MobileOpen, globals: { ...Mobile.globals, theme: "dark" } };
