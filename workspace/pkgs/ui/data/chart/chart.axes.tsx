import { VisAxis } from "@unovis/solid/components/axis";
import { formatChartValue } from "./chart.helpers";
import type { XYChartProps } from "./chart.types";

export function ChartAxes<Datum>(props: XYChartProps<Datum>) {
  return (
    <>
      <VisAxis
        type="x"
        gridLine={false}
        domainLine={false}
        tickLine={false}
        duration={0}
        tickValues={props.data.map((_, index) => index)}
        tickTextAdaptiveSets
        tickFormat={(value) => {
          const datum = props.data[Number(value)];
          return datum === undefined ? "" : props.label(datum);
        }}
      />
      <VisAxis
        type="y"
        domainLine={false}
        tickLine={false}
        numTicks={4}
        duration={0}
        tickFormat={(value) =>
          (props.axisFormat ?? props.valueFormat ?? formatChartValue)(Number(value))
        }
      />
    </>
  );
}
