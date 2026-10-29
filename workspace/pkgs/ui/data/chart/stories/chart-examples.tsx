import { RefreshCw } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Resizable } from "../../../layout/resizable/resizable";
import { BarChart } from "../bar-chart";
import { DonutChart } from "../donut-chart";
import { LineChart } from "../line-chart";
import { channels, currency, currencyAxis, monthLabel, revenue, revenueSeries } from "./chart-data";
import "./chart-demo.css";

export function ChartOverview() {
  const [updated, setUpdated] = createSignal(false);
  const data = () =>
    revenue.map((datum) => ({
      ...datum,
      subscriptions: datum.subscriptions * (updated() ? 1.15 : 1),
    }));
  return (
    <div class="chart-demo">
      <header class="chart-demo-header">
        <div>
          <p>WORKSPACE ANALYTICS</p>
          <h2>A clearer view of your business</h2>
          <span>Revenue, growth, and where your audience comes from.</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          startIcon={<RefreshCw />}
          onClick={() => setUpdated(!updated())}
        >
          {updated() ? "Restore data" : "Update data"}
        </Button>
      </header>
      <LineChart
        title="Revenue over time"
        description="Monthly revenue by product · USD"
        data={data()}
        label={monthLabel}
        series={revenueSeries}
        valueFormat={currency}
        axisFormat={currencyAxis}
        height={280}
      />
      <div class="chart-demo-columns">
        <BarChart
          title="Quarterly performance"
          description="The final three months of the year · USD"
          data={data().slice(-3)}
          label={monthLabel}
          series={revenueSeries}
          valueFormat={currency}
          axisFormat={currencyAxis}
        />
        <DonutChart
          title="Traffic sources"
          description="Sessions by acquisition channel"
          data={channels}
          label={(datum) => datum.name}
          value={(datum) => datum.visits}
          tone={(datum) => datum.tone}
          valueLabel="Sessions"
        />
      </div>
    </div>
  );
}

export function LineExample() {
  return (
    <LineChart
      title="Revenue over time"
      description="Monthly revenue by product · USD"
      data={revenue}
      label={monthLabel}
      series={revenueSeries}
      valueFormat={currency}
      axisFormat={currencyAxis}
    />
  );
}
export function BarExample() {
  return (
    <BarChart
      title="Quarterly revenue"
      description="Revenue by product · USD"
      data={revenue.slice(-3)}
      label={monthLabel}
      series={revenueSeries}
      valueFormat={currency}
      axisFormat={currencyAxis}
    />
  );
}
export function DonutExample() {
  return (
    <DonutChart
      title="Traffic sources"
      description="Sessions by acquisition channel"
      data={channels}
      label={(datum) => datum.name}
      value={(datum) => datum.visits}
      tone={(datum) => datum.tone}
      valueLabel="Sessions"
    />
  );
}
export function EmptyCharts() {
  return (
    <div class="chart-demo-columns">
      <LineChart title="Revenue" data={[]} label={monthLabel} series={revenueSeries} />
      <DonutChart
        title="Traffic"
        data={channels.map((datum) => ({ ...datum, visits: 0 }))}
        label={(datum) => datum.name}
        value={(datum) => datum.visits}
      />
    </div>
  );
}
export function ResizableChart() {
  return (
    <Resizable.Root
      panels={[
        { id: "chart", minSize: 30 },
        { id: "notes", minSize: 20 },
      ]}
      defaultSize={[65, 35]}
      style={{ height: "32rem" }}
    >
      <Resizable.Panel id="chart">
        <div class="chart-demo-resizable">
          <LineExample />
        </div>
      </Resizable.Panel>
      <Resizable.Handle id="chart:notes" withHandle aria-label="Resize chart and notes" />
      <Resizable.Panel id="notes">
        <div class="chart-demo-notes">
          <h3>Revenue overview</h3>
          <p>
            Subscriptions and services across twelve months. Resize the chart to explore how its
            axes adapt to the available space.
          </p>
        </div>
      </Resizable.Panel>
    </Resizable.Root>
  );
}
