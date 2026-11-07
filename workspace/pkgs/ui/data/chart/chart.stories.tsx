import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { BarChart } from "./bar-chart";
import { LineChart } from "./line-chart";
import { currency, currencyAxis, monthLabel, revenue, revenueSeries } from "./stories/chart-data";
import {
  BarExample,
  ChartOverview,
  DonutExample,
  EmptyCharts,
  LineExample,
  ResizableChart,
} from "./stories/chart-examples";
import { barChartSource, donutChartSource, lineChartSource } from "./stories/chart-source";

const meta = {
  title: "Data/Charts",
  tags: ["autodocs"],
  render: () => <ChartOverview />,
  parameters: {
    docs: {
      source: { language: "tsx", code: lineChartSource },
      description: {
        component:
          "Line, grouped bars, and donut charts powered by the official Unovis Solid integration. Radix tokens provide nested light/dark colors; responsive axes and hover details come from Unovis. Legends, visible captions, and keyboard-accessible View data disclosures provide a textual alternative. Charts render without animation. Import named components from newui/charts and the shared newui/styles.css stylesheet.",
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {};
export const Line: Story = { render: () => <LineExample /> };
export const Bars: Story = {
  render: () => <BarExample />,
  parameters: { docs: { source: { code: barChartSource } } },
};
export const Donut: Story = {
  render: () => <DonutExample />,
  parameters: { docs: { source: { code: donutChartSource } } },
};
export const Empty: Story = { render: () => <EmptyCharts /> };
export const Resizable: Story = { render: () => <ResizableChart /> };
export const Dark: Story = { globals: { theme: "dark" } };
export const Mobile: Story = { globals: { viewport: { value: "mobile", isRotated: false } } };
export const MobileDark: Story = { ...Mobile, globals: { ...Mobile.globals, theme: "dark" } };
export const NestedDark: Story = {
  globals: { theme: "light" },
  render: () => (
    <div data-nui-theme="dark" style={{ padding: "1rem", background: "var(--nui-surface)" }}>
      <ChartOverview />
    </div>
  ),
};

export const SinglePoint: Story = {
  render: () => (
    <LineChart
      title="First month"
      data={revenue.slice(0, 1)}
      label={monthLabel}
      series={revenueSeries}
      valueFormat={currency}
      axisFormat={currencyAxis}
    />
  ),
};
export const NegativeValues: Story = {
  render: () => (
    <BarChart
      title="Balance adjustments"
      description="Values above and below zero · USD"
      data={[
        { month: "Jan", subscriptions: 1200, services: -500 },
        { month: "Feb", subscriptions: -800, services: 600 },
        { month: "Mar", subscriptions: 900, services: -300 },
      ]}
      label={monthLabel}
      series={revenueSeries}
      valueFormat={currency}
      axisFormat={currencyAxis}
    />
  ),
};
