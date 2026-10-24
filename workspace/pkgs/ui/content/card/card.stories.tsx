import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Text } from "../text/text";
import { Card } from "./card";
import { CardExample } from "./stories/card-example";
import { HeaderActionsCard } from "./stories/header-actions-card";
import { MediaCard } from "./stories/media-card";

const meta = {
  title: "Content/Card",
  component: Card.Root,
  tags: ["autodocs"],
  args: { variant: "outline" },
  argTypes: {
    variant: { control: "inline-radio", options: ["outline", "soft", "elevated"] },
    as: { control: "inline-radio", options: ["div", "article", "section"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Optional header, title, description, actions, media, content, and footer parts. Native HTML provides the structure; actions use real controls. Choose outline, soft, or elevated surfaces, and simple or divided footers. The card itself has no click behavior or automatic focus stop.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "28rem" }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => <CardExample {...args} />,
} satisfies Meta<typeof Card.Root>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Soft: Story = { args: { variant: "soft" } };
export const Elevated: Story = { args: { variant: "elevated" } };
export const WithMediaAndDividedFooter: Story = { render: (args) => <MediaCard {...args} /> };
export const HeaderActions: Story = { render: (args) => <HeaderActionsCard {...args} /> };
export const ContentOnly: Story = {
  render: (args) => (
    <Card.Root {...args}>
      <Card.Content>
        <Text size="6">A card can be just a surface for your content.</Text>
      </Card.Content>
    </Card.Root>
  ),
};
export const MediaAndContent: Story = {
  render: (args) => (
    <Card.Root {...args}>
      <Card.Media data-nui-theme="light">
        <img
          src="/brand-light.svg"
          alt="newui"
          style={{ padding: "32px", background: "var(--nui-primary-soft)" }}
        />
      </Card.Media>
      <Card.Content>
        <Text size="6">Media can sit directly above content, without a header.</Text>
      </Card.Content>
    </Card.Root>
  ),
};
export const Mobile: Story = { globals: { viewport: { value: "smallMobile", isRotated: false } } };
export const MobileHeaderActions: Story = {
  render: (args) => <HeaderActionsCard {...args} />,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
