import { VisCrosshair } from "@unovis/solid/components/crosshair";
import { VisGroupedBar } from "@unovis/solid/components/grouped-bar";
import { VisTooltip } from "@unovis/solid/components/tooltip";
import { VisXYContainer } from "@unovis/solid/containers/xy-container";
import { splitProps } from "solid-js";
import { ChartAxes } from "./chart.axes";
import { ChartFrame } from "./chart.frame";
import { chartBaseKeys, chartColor, chartTooltip, chartX, seriesLegend } from "./chart.helpers";
import type { BarChartProps } from "./chart.types";
import { ChartData } from "./chart-data";

export function BarChart<Datum>(props: BarChartProps<Datum>) {
  const [local, rest] = splitProps(props, chartBaseKeys);
  const colors = () => local.series.map((item, index) => chartColor(item.tone, index));
  return (
    <ChartFrame
      {...rest}
      title={local.title}
      description={local.description}
      height={local.height ?? 260}
      legend={seriesLegend(local.series)}
      empty={!local.data.length || !local.series.length}
      dataTable={<ChartData {...local} />}
    >
      <VisXYContainer
        data={local.data}
        height={local.height ?? 260}
        duration={0}
        yDomainMinConstraint={[undefined, 0]}
        yDomainMaxConstraint={[0, undefined]}
      >
        <VisGroupedBar
          x={chartX}
          y={local.series.map((item) => item.value)}
          color={colors()}
          barPadding={0.12}
          groupPadding={0.3}
          roundedCorners={4}
          duration={0}
        />
        <ChartAxes {...local} />
        <VisCrosshair<Datum>
          color={colors()}
          template={(datum) => chartTooltip(local, datum)}
          duration={0}
        />
        <VisTooltip />
      </VisXYContainer>
    </ChartFrame>
  );
}
