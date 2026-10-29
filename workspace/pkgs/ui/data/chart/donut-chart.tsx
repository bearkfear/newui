import { VisDonut } from "@unovis/solid/components/donut";
import { VisSingleContainer } from "@unovis/solid/containers/single-container";
import { createMemo, splitProps } from "solid-js";
import { ChartFrame } from "./chart.frame";
import { chartColor, formatChartValue } from "./chart.helpers";
import type { DonutChartProps } from "./chart.types";
import { ChartData } from "./chart-data";

export function DonutChart<Datum>(props: DonutChartProps<Datum>) {
  const [local, rest] = splitProps(props, [
    "title",
    "description",
    "data",
    "label",
    "height",
    "valueFormat",
    "value",
    "tone",
    "valueLabel",
  ]);
  // Donut slices represent nonnegative, finite parts of a whole. Zero values remain in the data table.
  const slices = createMemo(() =>
    local.data.filter((datum) => Number.isFinite(local.value(datum)) && local.value(datum) >= 0),
  );
  const total = () => slices().reduce((sum, datum) => sum + local.value(datum), 0);
  const series = () => [{ label: local.valueLabel ?? "Value", value: local.value }];
  return (
    <ChartFrame
      {...rest}
      title={local.title}
      description={local.description}
      height={local.height ?? 260}
      legend={slices().map((datum, index) => ({
        label: local.label(datum),
        color: chartColor(local.tone?.(datum), index),
      }))}
      empty={total() <= 0}
      dataTable={<ChartData {...local} data={slices()} series={series()} />}
    >
      <VisSingleContainer height={local.height ?? 260} duration={0}>
        <VisDonut
          data={slices()}
          value={local.value}
          color={(datum, index) => chartColor(local.tone?.(datum), index)}
          arcWidth={32}
          cornerRadius={3}
          padAngle={0.025}
          duration={0}
          centralLabel={(local.valueFormat ?? formatChartValue)(total())}
          centralSubLabel={local.valueLabel ?? "Total"}
        />
      </VisSingleContainer>
    </ChartFrame>
  );
}
