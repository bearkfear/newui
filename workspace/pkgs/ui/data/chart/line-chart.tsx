import { VisCrosshair } from "@unovis/solid/components/crosshair";
import { VisLine } from "@unovis/solid/components/line";
import { VisScatter } from "@unovis/solid/components/scatter";
import { VisTooltip } from "@unovis/solid/components/tooltip";
import { VisXYContainer } from "@unovis/solid/containers/xy-container";
import { Show, splitProps } from "solid-js";
import { ChartAxes } from "./chart.axes";
import { ChartFrame } from "./chart.frame";
import { chartBaseKeys, chartColor, chartTooltip, chartX, seriesLegend } from "./chart.helpers";
import type { LineChartProps } from "./chart.types";
import { ChartData } from "./chart-data";

export function LineChart<Datum>(props: LineChartProps<Datum>) {
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
        <VisLine
          x={chartX}
          y={local.series.map((item) => item.value)}
          color={colors()}
          lineWidth={2.5}
          duration={0}
        />
        <Show when={local.data.length === 1}>
          <VisScatter
            x={chartX}
            y={local.series.map((item) => item.value)}
            color={colors()}
            size={8}
            duration={0}
          />
        </Show>
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
