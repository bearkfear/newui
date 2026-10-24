import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Badge, BadgeGroup } from "./badge";
import { BadgeMatrix } from "./stories/badge-matrix";
import { RemovableBadge } from "./stories/removable-badge";

const meta = {
  title: "Content/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "In progress", variant: "soft", tone: "primary", size: "md", rounded: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["solid", "soft", "outline"] },
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    rounded: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A compact label with Radix tones. Defaults to a span; use as="a" with href for navigation or as="button" for an action. BadgeGroup wraps labels or attaches equal-size parts. Removal is a composition with a named native button, not automatic Badge behavior.',
      },
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const AllTonesAndVariants: Story = { render: () => <BadgeMatrix /> };
export const Rounded: Story = { args: { rounded: true } };
export const Sizes: Story = {
  render: () => (
    <BadgeGroup>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </BadgeGroup>
  ),
};
export const Groups: Story = {
  render: () => (
    <BadgeGroup>
      <Badge tone="primary">Design</Badge>
      <Badge tone="success">Published</Badge>
      <Badge>Documentation</Badge>
      <BadgeGroup attached>
        <Badge variant="solid">Build</Badge>
        <Badge variant="solid" tone="success">
          Passing
        </Badge>
      </BadgeGroup>
    </BadgeGroup>
  ),
};
export const Removable: Story = { render: () => <RemovableBadge /> };
export const Link: Story = {
  render: () => (
    <Badge
      as="a"
      href="?path=/docs/content-card--documentation"
      target="_top"
      tone="primary"
      variant="outline"
    >
      Card documentation
    </Badge>
  ),
};
export const DisabledAction: Story = {
  render: () => (
    <Badge as="button" tone="primary" disabled>
      Unavailable
    </Badge>
  ),
};
export const LongLabels: Story = {
  render: () => (
    <div style={{ "max-width": "15rem" }}>
      <BadgeGroup>
        <Badge>A longer label that wraps inside the available space</Badge>
        <Badge tone="info">DocumentationAndReleaseNotesWithoutSpaces</Badge>
      </BadgeGroup>
    </div>
  ),
};
export const Mobile: Story = {
  globals: { viewport: { value: "smallMobile", isRotated: false } },
  render: () => <BadgeMatrix />,
};
