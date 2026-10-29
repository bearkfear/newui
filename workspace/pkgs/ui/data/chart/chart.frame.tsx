import { createUniqueId, type JSX, Show, splitProps } from "solid-js";
import { Empty } from "../../feedback/empty/empty";
import { ChartDetails } from "./chart.details";
import { chartRecipe } from "./chart.recipe";
import type { ChartLegendItem } from "./chart.types";

export type ChartFrameProps = Omit<JSX.HTMLAttributes<HTMLElement>, "title"> & {
  title: string;
  description?: string | undefined;
  height: number;
  legend: ChartLegendItem[];
  empty: boolean;
  dataTable: JSX.Element;
};
const styles = chartRecipe();

export function ChartFrame(props: ChartFrameProps) {
  const [local, rest] = splitProps(props, [
    "title",
    "description",
    "height",
    "legend",
    "empty",
    "dataTable",
    "class",
    "children",
  ]);
  const titleId = `${createUniqueId()}-chart-title`;
  const descriptionId = `${titleId}-description`;
  return (
    <figure
      {...rest}
      aria-labelledby={titleId}
      aria-describedby={local.description ? descriptionId : undefined}
      class={styles.root({ class: local.class })}
    >
      <figcaption class={styles.caption()}>
        <h3 id={titleId} class={styles.title()}>
          {local.title}
        </h3>
        <Show when={local.description}>
          <p id={descriptionId} class={styles.description()}>
            {local.description}
          </p>
        </Show>
      </figcaption>
      <Show when={!local.empty} fallback={<ChartEmpty />}>
        <div aria-hidden="true" class={styles.plot()} style={{ height: `${local.height}px` }}>
          {local.children}
        </div>
        <ChartDetails title={local.title} legend={local.legend}>
          {local.dataTable}
        </ChartDetails>
      </Show>
    </figure>
  );
}

function ChartEmpty() {
  return (
    <Empty.Root layout="compact">
      <Empty.Content>
        <Empty.Title>No data available</Empty.Title>
        <Empty.Description>Values will appear here when data is available.</Empty.Description>
      </Empty.Content>
    </Empty.Root>
  );
}
