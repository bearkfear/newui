import type { JSX } from "solid-js";

export type ChartTone = "primary" | "success" | "warning" | "danger" | "info" | "neutral";
export type ChartSeries<Datum> = {
  label: string;
  value: (datum: Datum) => number;
  tone?: ChartTone;
};
export type ChartLegendItem = { label: string; color: string };
export type ChartBaseProps<Datum> = Omit<JSX.HTMLAttributes<HTMLElement>, "title" | "children"> & {
  title: string;
  description?: string;
  data: Datum[];
  label: (datum: Datum) => string;
  height?: number;
  valueFormat?: (value: number) => string;
};
export type XYChartProps<Datum> = ChartBaseProps<Datum> & {
  series: ChartSeries<Datum>[];
  axisFormat?: (value: number) => string;
};
export type LineChartProps<Datum> = XYChartProps<Datum>;
export type BarChartProps<Datum> = XYChartProps<Datum>;
export type DonutChartProps<Datum> = ChartBaseProps<Datum> & {
  value: (datum: Datum) => number;
  tone?: (datum: Datum) => ChartTone;
  valueLabel?: string;
};
