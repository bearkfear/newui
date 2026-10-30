import { ChevronDown, Download } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { DonutChart, LineChart } from "../../data/chart";
import { BarList, Button, Card, DeltaBar, DropdownMenu } from "../../index";
import { downloadCsv, MetricCard, type Notify, PageHeading } from "./page-parts";

const revenue = [
  { week: "Week 1", current: 6800, previous: 5400 },
  { week: "Week 2", current: 9200, previous: 8100 },
  { week: "Week 3", current: 11300, previous: 9500 },
  { week: "Week 4", current: 15500, previous: 13200 },
];
const sources = [
  { name: "Organic search", value: 4250 },
  { name: "Direct", value: 3180 },
  { name: "Referrals", value: 1740 },
  { name: "Social", value: 920 },
];
const plans = [
  { name: "Studio", value: 62 },
  { name: "Team", value: 28 },
  { name: "Personal", value: 10 },
];
const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export function AnalyticsPage(props: { notify: Notify }) {
  const [period, setPeriod] = createSignal("October");
  const multiplier = () => (period() === "October" ? 1 : 0.86);
  const data = () => revenue.map((row) => ({ ...row, current: row.current * multiplier() }));
  const exportReport = () => {
    downloadCsv("revenue.csv", [
      ["Week", "Revenue", "Previous period"],
      ...data().map((row) => [row.week, row.current, row.previous]),
    ]);
    props.notify("Report exported", `${period()} revenue is ready as a CSV file.`);
  };
  return (
    <div class="example-page">
      <PageHeading
        eyebrow="THE BIG PICTURE"
        title="A good month, in perspective."
        description="Revenue, the people behind it, and where your next opportunity lives."
        actions={
          <>
            <PeriodMenu value={period()} onChange={setPeriod} />
            <Button size="sm" startIcon={<Download />} onClick={exportReport}>
              Export report
            </Button>
          </>
        }
      />
      <AnalyticsMetrics period={period()} multiplier={multiplier()} />
      <LineChart
        title="Revenue, week by week"
        description={`${period()} 2026 · USD`}
        data={data()}
        label={(row) => row.week}
        height={260}
        valueFormat={money}
        series={[
          { label: "This month", value: (row) => row.current, tone: "primary" },
          { label: "Previous month", value: (row) => row.previous, tone: "neutral" },
        ]}
      />
      <AcquisitionBreakdown />
      <Card.Root>
        <Card.Content>
          <DeltaBar
            label="Net revenue retention"
            value={24.8}
            description="Existing customers generated 24.8% more revenue than in the previous period."
          />
        </Card.Content>
      </Card.Root>
    </div>
  );
}

function PeriodMenu(props: { value: string; onChange: (value: string) => void }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline" size="sm" endIcon={<ChevronDown />}>
            {props.value} 2026
          </Button>
        )}
      />
      <DropdownMenu.Content>
        <DropdownMenu.GroupLabel>Reporting period</DropdownMenu.GroupLabel>
        <For each={["October", "September"]}>
          {(month) => (
            <DropdownMenu.Item value={month} onSelect={() => props.onChange(month)}>
              {month} 2026
            </DropdownMenu.Item>
          )}
        </For>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function AnalyticsMetrics(props: { period: string; multiplier: number }) {
  return (
    <div class="example-metrics">
      <MetricCard
        label="Total revenue"
        value={money(42800 * props.multiplier)}
        delta={props.period === "October" ? 18.2 : 8.4}
        description="vs. previous month"
      />
      <MetricCard
        label="Active customers"
        value={props.period === "October" ? "2,840" : "2,620"}
        delta={8.4}
        description="vs. previous month"
      />
      <MetricCard
        label="Acquisition cost"
        value="$18.40"
        delta={-6.2}
        isPositiveGood={false}
        description="lower is better"
      />
    </div>
  );
}

function AcquisitionBreakdown() {
  return (
    <div class="example-equal-columns">
      <Card.Root>
        <Card.Header>
          <Card.Title>How people find you</Card.Title>
          <Card.Description>Sessions by acquisition channel</Card.Description>
        </Card.Header>
        <Card.Content>
          <BarList
            title="Top channels"
            data={sources}
            label={(row) => row.name}
            value={(row) => row.value}
          />
        </Card.Content>
      </Card.Root>
      <DonutChart
        title="A plan for every kind of team"
        description="Share of active subscriptions"
        data={plans}
        label={(row) => row.name}
        value={(row) => row.value}
        valueLabel="Subscriptions (%)"
        height={210}
      />
    </div>
  );
}
