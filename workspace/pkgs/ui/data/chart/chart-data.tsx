import { For } from "solid-js";
import { Table } from "../table/table";
import { formatChartValue } from "./chart.helpers";
import type { ChartBaseProps, ChartSeries } from "./chart.types";

export function ChartData<Datum>(props: ChartBaseProps<Datum> & { series: ChartSeries<Datum>[] }) {
  return (
    <Table.Container aria-label={`${props.title} values`}>
      <Table.Root density="compact" class="nui-chart-values">
        <Table.Caption>{props.title} — chart values</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head>Category</Table.Head>
            <For each={props.series}>
              {(series) => <Table.Head align="end">{series.label}</Table.Head>}
            </For>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <For each={props.data}>
            {(datum) => (
              <Table.Row>
                <Table.Head scope="row">{props.label(datum)}</Table.Head>
                <For each={props.series}>
                  {(series) => (
                    <Table.Cell align="end">
                      {(props.valueFormat ?? formatChartValue)(series.value(datum))}
                    </Table.Cell>
                  )}
                </For>
              </Table.Row>
            )}
          </For>
        </Table.Body>
      </Table.Root>
    </Table.Container>
  );
}
