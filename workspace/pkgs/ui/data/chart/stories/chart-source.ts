export const lineChartSource = `import { LineChart } from "@egcs/newui/charts";
import "@egcs/newui/styles.css";

const data = [
  { month: "Jan", subscriptions: 4200, services: 2100 },
  { month: "Feb", subscriptions: 5100, services: 2400 },
  { month: "Mar", subscriptions: 4700, services: 2800 },
];

<LineChart
  title="Monthly revenue"
  description="Subscriptions and services · USD"
  data={data}
  label={(datum) => datum.month}
  series={[
    { label: "Subscriptions", value: (datum) => datum.subscriptions, tone: "primary" },
    { label: "Services", value: (datum) => datum.services, tone: "success" },
  ]}
  valueFormat={(value) => new Intl.NumberFormat("en-US", {
    style: "currency", currency: "USD", maximumFractionDigits: 0,
  }).format(value)}
/>;`;

export const barChartSource = lineChartSource.replaceAll("LineChart", "BarChart");
export const donutChartSource = `import { DonutChart } from "@egcs/newui/charts";
import "@egcs/newui/styles.css";

const data = [
  { channel: "Search", visits: 4280 },
  { channel: "Direct", visits: 2610 },
  { channel: "Referrals", visits: 1840 },
];

<DonutChart
  title="Traffic sources"
  description="Sessions by acquisition channel"
  data={data}
  label={(datum) => datum.channel}
  value={(datum) => datum.visits}
  valueLabel="Sessions"
/>;`;
