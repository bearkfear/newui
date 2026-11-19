import type { JSX } from "solid-js";

export type ChartTone = "primary" | "success" | "warning" | "danger" | "info" | "neutral";
/** Series label, value accessor, and optional semantic color for LineChart or BarChart. */
export type ChartSeries<Datum> = {
  /** Legend label for this series. */
  label: string;
  /** Extracts this series' numeric value from a data record. */
  value: (datum: Datum) => number;
  /** Semantic color role; omitted series receive a palette color. */
  tone?: ChartTone;
};
export type ChartLegendItem = { label: string; color: string };
/** Optional translations for chart controls and the data table. */
export type ChartLabels = {
  legend?: string;
  viewData?: string;
  hideData?: string;
  viewDataFor?: (title: string) => string;
  hideDataFor?: (title: string) => string;
  values?: (title: string) => string;
  caption?: (title: string) => string;
  category?: string;
};
/**
 * Data and shared presentation inputs: title, optional description/height, x label accessor, and
 * numeric value formatter. Callers own sorting and data aggregation.
 */
export type ChartBaseProps<Datum> = Omit<JSX.HTMLAttributes<HTMLElement>, "title" | "children"> & {
  title: string;
  /** Optional context such as period, units, or comparison range. */
  description?: string;
  /** Records are rendered in supplied order; sort/aggregate before passing. */
  data: Datum[];
  /** Supplies the x-axis/category label for each record. */
  label: (datum: Datum) => string;
  /** Chart height in pixels; defaults to 260. */
  height?: number;
  /** Formats values displayed in axes, tooltips, and the readable data table. */
  valueFormat?: (value: number) => string;
  labels?: ChartLabels;
};
/** Shared series and axis formatting inputs for line and grouped bar charts. */
export type XYChartProps<Datum> = ChartBaseProps<Datum> & {
  series: ChartSeries<Datum>[];
  axisFormat?: (value: number) => string;
};
/** Data, series, and axis formatting accepted by LineChart. */
export type LineChartProps<Datum> = XYChartProps<Datum>;
/** Data, series, and axis formatting accepted by BarChart. */
export type BarChartProps<Datum> = XYChartProps<Datum>;
/** Data and value accessor expected by DonutChart; negative and non-finite values are omitted. */
export type DonutChartProps<Datum> = ChartBaseProps<Datum> & {
  value: (datum: Datum) => number;
  tone?: (datum: Datum) => ChartTone;
  valueLabel?: string;
};
