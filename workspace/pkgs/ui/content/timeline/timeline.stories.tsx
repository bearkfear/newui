import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Heading } from "../heading/heading";
import { DeliveryTimeline } from "./stories/delivery-timeline";
import { EmptyHistory, RichTimeline, SingleEvent } from "./stories/timeline-content";
import { TimelineExample, type TimelineExampleProps } from "./stories/timeline-example";
import { Timeline } from "./timeline";

const meta = {
  title: "Content/Timeline",
  tags: ["autodocs"],
  args: {
    density: "comfortable",
    orientation: "vertical",
    showTime: true,
    showDescription: true,
    customIndicators: false,
  },
  argTypes: {
    density: { control: "inline-radio", options: ["comfortable", "compact"] },
    orientation: { control: "inline-radio", options: ["vertical", "horizontal"] },
    showTime: { control: "boolean" },
    showDescription: { control: "boolean" },
    customIndicators: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A native ordered list for event history and progress presentation. Items accept default, complete, current, or pending status; current supplies aria-current=step. Markers and connectors are decorative, so describe status in text when it matters. Indicator supports custom icons, Time preserves native datetime, and Content accepts arbitrary compositions. The final item has no trailing connector. Applications own ordering, active steps, actions, and announcements. This is presentation rather than an interactive stepper; no Ark primitive or additional dependency is required. Colors use Radix-backed newui tokens.",
      },
      source: {
        language: "tsx",
        code: `import { Timeline } from "newui";
import "newui/styles.css";

<Timeline.Root aria-label="Shipment progress">
  <Timeline.Item status="complete">
    <Timeline.Indicator />
    <Timeline.Content>
      <Timeline.Title>Order confirmed · Completed</Timeline.Title>
      <Timeline.Description>We received your order and payment.</Timeline.Description>
      <Timeline.Time dateTime="2026-10-28T09:00:00-03:00">October 28, 09:00</Timeline.Time>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item status="current">
    <Timeline.Indicator />
    <Timeline.Content>
      <Timeline.Title>Preparing shipment · Current step</Timeline.Title>
      <Timeline.Description>Your items are being packed.</Timeline.Description>
    </Timeline.Content>
  </Timeline.Item>
  <Timeline.Item status="pending">
    <Timeline.Indicator />
    <Timeline.Content>
      <Timeline.Title>Delivery · Pending</Timeline.Title>
    </Timeline.Content>
  </Timeline.Item>
</Timeline.Root>`,
      },
    },
  },
  render: (args) => <TimelineExample {...args} />,
} satisfies Meta<TimelineExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Compact: Story = { args: { density: "compact" } };
export const Horizontal: Story = { args: { orientation: "horizontal" } };
export const HorizontalCompact: Story = { args: { orientation: "horizontal", density: "compact" } };
export const HorizontalProgress: Story = {
  render: () => <DeliveryTimeline orientation="horizontal" />,
};
export const HorizontalSingle: Story = { render: () => <SingleEvent orientation="horizontal" /> };
export const HorizontalDark: Story = { ...HorizontalProgress, globals: { theme: "dark" } };
export const HorizontalMobile: Story = {
  ...HorizontalProgress,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const HorizontalMobileDark: Story = {
  ...HorizontalMobile,
  globals: { ...HorizontalMobile.globals, theme: "dark" },
};
export const TitlesOnly: Story = { args: { showTime: false, showDescription: false } };
export const CustomIndicators: Story = { args: { customIndicators: true } };
export const ShipmentProgress: Story = { render: () => <DeliveryTimeline /> };
export const RichContent: Story = { render: () => <RichTimeline /> };
export const Single: Story = { render: () => <SingleEvent /> };
export const Empty: Story = { render: () => <EmptyHistory /> };
export const LongContent: Story = {
  render: () => (
    <div style={{ "max-width": "20rem" }}>
      <Heading as="h2" size="5" style={{ "margin-bottom": "1.25rem" }}>
        Extended activity
      </Heading>
      <Timeline.Root aria-label="Extended activity">
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Title>
              Documentation and shared workspace configuration were updated
            </Timeline.Title>
            <Timeline.Description>
              The connector follows the content height as longer descriptions wrap. Reference:
              workspace_release_2026_october_documentation_and_configuration_update.
            </Timeline.Description>
            <Timeline.Time dateTime="2026-10-28">October 28, 2026</Timeline.Time>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Indicator />
          <Timeline.Content>
            <Timeline.Title>Review scheduled</Timeline.Title>
            <Timeline.Description>The next event remains aligned.</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
    </div>
  ),
};
export const Dark: Story = { globals: { theme: "dark" } };
export const ProgressDark: Story = { ...ShipmentProgress, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...ShipmentProgress,
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
      <TimelineExample />
    </div>
  ),
};
