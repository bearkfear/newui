import type { ChartLegendItem, ChartSeries, ChartTone, XYChartProps } from "./chart.types";

export function chartColor(tone: ChartTone | undefined, index: number) {
  return tone ? `var(--nui-${tone})` : `var(--nui-chart-${(index % 5) + 1})`;
}
const numberFormatter = new Intl.NumberFormat("en-US");
export const formatChartValue = (value: number) => numberFormatter.format(value);
export const chartX = (_datum: unknown, index: number) => index;

export function seriesLegend<Datum>(series: ChartSeries<Datum>[]): ChartLegendItem[] {
  return series.map((item, index) => ({ label: item.label, color: chartColor(item.tone, index) }));
}

export function chartTooltip<Datum>(props: XYChartProps<Datum>, datum: Datum) {
  const content = document.createElement("div");
  content.className = "nui-chart-tooltip";
  const title = document.createElement("strong");
  title.textContent = props.label(datum);
  content.append(title);
  for (const series of props.series) {
    const row = document.createElement("div");
    row.textContent = `${series.label}: ${(props.valueFormat ?? formatChartValue)(series.value(datum))}`;
    content.append(row);
  }
  return content;
}

export const chartBaseKeys = [
  "title",
  "description",
  "data",
  "label",
  "height",
  "valueFormat",
  "series",
  "axisFormat",
] as const;
