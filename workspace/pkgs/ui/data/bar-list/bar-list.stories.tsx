import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { channels, IndicatorOverview } from "../stories/indicator-examples";
import { BarList } from "./bar-list";

const meta = {
  title: "Data/Bar List",
  tags: ["autodocs"],
  render: () => (
    <BarList
      title="Acquisition channels"
      description="Sessions this month"
      data={channels}
      label={(item) => item.name}
      value={(item) => item.sessions}
    />
  ),
  parameters: {
    docs: {
      description: {
        component:
          "A native figure and list with proportional decorative bars and visible values. Input order is preserved; the largest value defines the scale unless maxValue is larger. Zero rows remain visible; negative and nonfinite values are excluded. No Ark interaction or chart dependency is needed. Import from newui.",
      },
      source: {
        code: `import { BarList } from "newui";

<BarList
  title="Sessions by channel"
  data={[{ name: "Direct", sessions: 4250 }, { name: "Search", sessions: 3180 }]}
  label={(item) => item.name}
  value={(item) => item.sessions}
/>;`,
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Dashboard: Story = { render: () => <IndicatorOverview /> };
export const SharedScaleAndTones: Story = {
  render: () => (
    <BarList
      title="Goal progress"
      description="All bars share a goal of 5,000 sessions"
      data={channels}
      label={(item) => item.name}
      value={(item) => item.sessions}
      maxValue={5000}
      tone={(item) => (item.sessions >= 3000 ? "success" : "info")}
    />
  ),
};
export const Empty: Story = {
  render: () => <BarList title="Acquisition channels" data={[]} label={String} value={Number} />,
};
export const EdgeCases: Story = {
  render: () => (
    <BarList
      title="Small values and long names"
      description="Negative and unavailable records are excluded. Zero remains visible."
      data={[
        { name: "LongChannelNameWithoutSpacesToExerciseNarrowContainers", value: 0.75 },
        { name: "A longer channel label that wraps naturally on mobile", value: 0.25 },
        { name: "No sessions", value: 0 },
        { name: "Invalid", value: Number.NaN },
        { name: "Negative", value: -1 },
      ]}
      label={(item) => item.name}
      value={(item) => item.value}
    />
  ),
};
export const Mobile: Story = {
  render: () => <IndicatorOverview />,
  globals: { viewport: { value: "smallMobile", isRotated: false } },
};
