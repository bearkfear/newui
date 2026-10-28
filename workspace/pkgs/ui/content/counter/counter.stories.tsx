import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Counter } from "./counter";
import { NotificationCounter } from "./stories/notification-counter";
import {
  InteractiveOverlayCounter,
  OverlayCounterExamples,
  OverlayCounterPlacements,
} from "./stories/overlay-counter";
import { interactiveOverlaySource, overlaySource } from "./stories/overlay-source";

const tones = ["neutral", "primary", "info", "success", "warning", "danger"] as const;
const meta = {
  title: "Content/Counter",
  component: Counter,
  tags: ["autodocs"],
  args: { value: 5, max: 99, showZero: false, variant: "solid", tone: "danger", size: "md" },
  argTypes: {
    value: { control: { type: "number", min: 0 } },
    max: { control: { type: "number", min: 0 } },
    showZero: { control: "boolean" },
    variant: { control: "inline-radio", options: ["solid", "soft", "outline"] },
    tone: { control: "select", options: tones },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Compact numeric indicator for notifications, unread counts, tabs and buttons. Single digits form a circle; longer values form a pill. Defaults to solid danger, hides zero, and caps the display at 99+. The full count remains available to assistive technology. Supply label for context; no live announcements or interactive behavior are added automatically.",
      },
    },
  },
} satisfies Meta<typeof Counter>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Values: Story = {
  render: (args) => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <For each={[0, 1, 5, 12, 99, 125]}>
        {(value) => <Counter {...args} value={value} showZero />}
      </For>
    </div>
  ),
};
export const TonesAndVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <For each={["solid", "soft", "outline"] as const}>
        {(variant) => (
          <div style={{ display: "flex", gap: "1rem" }}>
            <For each={tones}>
              {(tone) => (
                <Counter
                  {...args}
                  value={5}
                  tone={tone}
                  variant={variant}
                  label={`5 ${tone} notifications`}
                />
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  ),
};
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", "align-items": "center", gap: "1rem" }}>
      <For each={["sm", "md", "lg"] as const}>{(size) => <Counter {...args} size={size} />}</For>
    </div>
  ),
};
export const CustomMaximum: Story = { args: { value: 1250, max: 999 } };
export const ShowZero: Story = { args: { value: 0, showZero: true } };
export const Notifications: Story = { render: () => <NotificationCounter /> };
export const Overlay: Story = {
  render: (args) => <OverlayCounterExamples {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "CounterAnchor wraps the target and its sibling Counter. The source below shows the complete minimal button composition; the gallery also demonstrates icon buttons, Avatar, and content.",
      },
      source: { language: "tsx", transform: overlaySource },
    },
  },
};
export const OverlayPlacements: Story = {
  render: (args) => <OverlayCounterPlacements {...args} />,
};
export const OverlayNotifications: Story = {
  render: () => <InteractiveOverlayCounter />,
  parameters: { docs: { source: { language: "tsx", code: interactiveOverlaySource } } },
};
export const OverlayOverflow: Story = { ...Overlay, args: { value: 125 } };
export const OverlayOnSurface: Story = {
  parameters: {
    docs: {
      source: { language: "tsx", transform: overlaySource },
      description: {
        story:
          "Set --nui-counter-ring on the surrounding surface to match its background. The snippet shows the minimal button composition.",
      },
    },
  },
  render: (args) => (
    <div
      style={{
        background: "var(--nui-surface)",
        "border-radius": "1rem",
        padding: "1rem",
        "--nui-counter-ring": "var(--nui-surface)",
      }}
    >
      <OverlayCounterExamples {...args} />
    </div>
  ),
};
export const OverlayDark: Story = { ...Overlay, globals: { theme: "dark" } };
export const OverlayMobile: Story = {
  ...Overlay,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const Dark: Story = { ...TonesAndVariants, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...Notifications,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
