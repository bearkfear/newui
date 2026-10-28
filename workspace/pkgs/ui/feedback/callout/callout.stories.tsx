import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Callout } from "./callout";
import { CalloutActionsExample } from "./stories/callout-actions";
import { CalloutExample, type CalloutExampleProps } from "./stories/callout-example";
import { CalloutMatrix } from "./stories/callout-matrix";
import { CalloutThemes } from "./stories/callout-themes";
import { DismissibleCallout } from "./stories/dismissible-callout";
import { LiveCallout } from "./stories/live-callout";
import { MessageCallout } from "./stories/message-callout";
import { DismissibleMessage, MessageTones } from "./stories/message-examples";

const meta = {
  title: "Feedback/Callout",
  tags: ["autodocs"],
  args: {
    tone: "info",
    variant: "soft",
    showIcon: true,
    showTitle: true,
    title: "Keep your team up to date",
    description: "Share project updates and important milestones with everyone in your workspace.",
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "primary", "info", "success", "warning", "danger"],
    },
    variant: { control: "inline-radio", options: ["soft", "outline", "message"] },
    showIcon: { control: "boolean" },
    showTitle: { control: "boolean" },
    title: { control: "text" },
    description: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "One composition for informational callouts and inline alerts, inspired by Bulma Message and Notification. Root, Icon, Content, Title, Description, Actions, and CloseButton are optional native parts. Color does not imply urgency: opt into role=status for polite updates or role=alert for urgent messages. Dismissal and actions remain application-owned.",
      },
    },
  },
  render: (args) => <CalloutExample {...args} />,
} satisfies Meta<CalloutExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const Message: Story = { render: (args) => <MessageCallout {...args} /> };
export const MessageTonesAndHeaders: Story = { render: () => <MessageTones /> };
export const MessageDismissible: Story = { render: () => <DismissibleMessage /> };
export const MessageDark: Story = { ...MessageTonesAndHeaders, globals: { theme: "dark" } };
export const MessageMobile: Story = {
  ...MessageDismissible,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const AllTonesAndVariants: Story = { render: () => <CalloutMatrix /> };
export const WithoutIcon: Story = { args: { showIcon: false } };
export const DescriptionOnly: Story = { args: { showTitle: false } };
export const WithActions: Story = { render: () => <CalloutActionsExample /> };
export const Dismissible: Story = { render: () => <DismissibleCallout /> };
export const LiveAlert: Story = { render: () => <LiveCallout /> };
export const BothThemes: Story = { render: (args) => <CalloutThemes {...args} /> };
export const StructuredContent: Story = {
  render: () => (
    <Callout.Root tone="warning">
      <Callout.Icon />
      <Callout.Content>
        <Callout.Title>Before sharing this project</Callout.Title>
        <Callout.Description>
          <ul style={{ "list-style": "disc", "padding-inline-start": "20px", margin: "4px 0 8px" }}>
            <li>Review who can view the project.</li>
            <li>Check that the latest update is ready.</li>
          </ul>
          <a href="?path=/docs/overlays-sheet--documentation" target="_top">
            Review the project details example
          </a>
        </Callout.Description>
      </Callout.Content>
    </Callout.Root>
  ),
};
export const LongContent: Story = {
  args: {
    title: "Review your workspace settings before publishing this update",
    description:
      "This project is shared with everyone in your workspace. Check the project details and confirm that the update is ready before making it visible to the whole team.",
  },
};
export const Mobile: Story = {
  ...LongContent,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const MobileDismissible: Story = {
  ...Dismissible,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
