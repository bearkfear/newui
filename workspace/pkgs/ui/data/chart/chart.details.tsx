import { Collapsible } from "@ark-ui/solid/collapsible";
import { ChevronDown, Table2 } from "lucide-solid";
import { For, type JSX } from "solid-js";
import { Button } from "../../actions/button/button";
import { chartRecipe } from "./chart.recipe";
import type { ChartLabels, ChartLegendItem } from "./chart.types";

const styles = chartRecipe();

export function ChartDetails(props: {
  title: string;
  legend: ChartLegendItem[];
  labels?: ChartLabels | undefined;
  children: JSX.Element;
}) {
  return (
    <Collapsible.Root lazyMount class={styles.details()}>
      <div class={styles.detailsHeader()}>
        <ul class={styles.legend()} aria-label={props.labels?.legend ?? "Chart legend"}>
          <For each={props.legend}>
            {(item) => (
              <li class={styles.legendItem()}>
                <span
                  aria-hidden="true"
                  class={styles.swatch()}
                  style={{ background: item.color }}
                />
                {item.label}
              </li>
            )}
          </For>
        </ul>
        <Collapsible.Context>
          {(api) => (
            <Collapsible.Trigger
              asChild={(triggerProps) => (
                <Button
                  {...triggerProps()}
                  variant="ghost"
                  tone="neutral"
                  size="xs"
                  class={styles.dataTrigger()}
                  aria-label={
                    api().open
                      ? (props.labels?.hideDataFor?.(props.title) ?? `Hide data for ${props.title}`)
                      : (props.labels?.viewDataFor?.(props.title) ?? `View data for ${props.title}`)
                  }
                  startIcon={<Table2 />}
                  endIcon={<ChevronDown class="nui-chart-data-chevron" />}
                >
                  {api().open
                    ? (props.labels?.hideData ?? "Hide data")
                    : (props.labels?.viewData ?? "View data")}
                </Button>
              )}
            />
          )}
        </Collapsible.Context>
      </div>
      <Collapsible.Content class={styles.dataContent()}>{props.children}</Collapsible.Content>
    </Collapsible.Root>
  );
}
