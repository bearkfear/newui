import { For } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Heading } from "../../content/heading/heading";
import { RichTabs } from "./stories/rich-tabs";
import {
  ControlledTabs,
  TabsExample,
  type TabsExampleProps,
  tabTones,
  tabVariants,
} from "./stories/tabs-example";

const meta = {
  title: "Navigation/Tabs",
  tags: ["autodocs"],
  args: {
    variant: "underline",
    tone: "primary",
    size: "md",
    align: "start",
    fullWidth: false,
    activationMode: "automatic",
  },
  argTypes: {
    variant: { control: "select", options: tabVariants },
    tone: { control: "select", options: tabTones },
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
    align: { control: "inline-radio", options: ["start", "center", "end"] },
    fullWidth: { control: "boolean" },
    activationMode: { control: "inline-radio", options: ["automatic", "manual"] },
  },
  decorators: [
    (Story) => (
      <div style={{ "max-width": "44rem", "min-width": "0" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Ark-powered horizontal tabs. Bulma-inspired underline, boxed, toggle and rounded styles, plus a Solid UI-inspired segmented appearance. Arrow Left/Right and Home/End navigate; manual activation uses Enter/Space. Panels mount lazily and retain their state after the first visit.",
      },
    },
  },
  render: (args) => <TabsExample {...args} />,
} satisfies Meta<TabsExampleProps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Boxed: Story = { args: { variant: "boxed" } };
export const Toggle: Story = { args: { variant: "toggle" } };
export const Rounded: Story = { args: { variant: "rounded" } };
export const Segmented: Story = { args: { variant: "segmented", tone: "neutral" } };
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "2rem" }}>
      <For each={tabVariants}>
        {(variant) => (
          <section style={{ display: "grid", gap: "0.75rem" }}>
            <Heading as="h2" size="6">
              {variant}
            </Heading>
            <TabsExample {...args} variant={variant} />
          </section>
        )}
      </For>
    </div>
  ),
};
export const AllTones: Story = {
  args: { variant: "toggle" },
  render: (args) => (
    <div style={{ display: "grid", gap: "1.5rem" }}>
      <For each={tabTones}>{(tone) => <TabsExample {...args} tone={tone} />}</For>
    </div>
  ),
};
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "1.5rem" }}>
      <For each={["sm", "md", "lg", "xl"] as const}>
        {(size) => <TabsExample {...args} size={size} />}
      </For>
    </div>
  ),
};
export const Centered: Story = { args: { align: "center" } };
export const EndAligned: Story = { args: { align: "end" } };
export const FullWidth: Story = { args: { variant: "segmented", fullWidth: true } };
export const ManualActivation: Story = { args: { activationMode: "manual" } };
export const Controlled: Story = { render: () => <ControlledTabs /> };
export const WithIcons: Story = { render: (args) => <RichTabs {...args} icons /> };
export const WithCounters: Story = { render: (args) => <RichTabs {...args} counts /> };
export const WithIconsAndCounters: Story = {
  render: (args) => <RichTabs {...args} icons counts />,
};
export const IconOnly: Story = { render: (args) => <RichTabs {...args} iconOnly /> };
export const RichContentAllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: "2rem" }}>
      <For each={tabVariants}>
        {(variant) => (
          <section style={{ display: "grid", gap: "0.75rem" }}>
            <Heading as="h2" size="6">
              {variant}
            </Heading>
            <RichTabs {...args} variant={variant} icons counts />
          </section>
        )}
      </For>
    </div>
  ),
};
export const RichContentDark: Story = { ...RichContentAllVariants, globals: { theme: "dark" } };
export const RichContentMobile: Story = {
  ...RichContentAllVariants,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
export const Dark: Story = { ...AllVariants, globals: { theme: "dark" } };
export const Mobile: Story = {
  ...AllVariants,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
