import type { JSX } from "solid-js";
import { createMemo, createUniqueId, For, Show, splitProps } from "solid-js";
import { Empty } from "../../feedback/empty/empty";

export type BarListTone = "primary" | "neutral" | "success" | "warning" | "danger" | "info";
export type BarListProps<T> = Omit<JSX.HTMLAttributes<HTMLElement>, "children" | "title"> & {
  title: string;
  description?: string;
  data: readonly T[];
  label: (datum: T) => string;
  value: (datum: T) => number;
  valueFormat?: (value: number) => string;
  tone?: BarListTone | ((datum: T) => BarListTone);
  /** Optional shared scale. Never smaller than the largest valid value. */
  maxValue?: number;
  emptyMessage?: string;
};

const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

export function BarList<T>(props: BarListProps<T>) {
  const [local, rest] = splitProps(props, [
    "title",
    "description",
    "data",
    "label",
    "value",
    "valueFormat",
    "tone",
    "maxValue",
    "emptyMessage",
    "class",
  ]);
  const captionId = createUniqueId();
  const rows = createMemo(() =>
    local.data
      .map((datum) => ({ datum, value: local.value(datum) }))
      .filter((row) => Number.isFinite(row.value) && row.value >= 0),
  );
  const maximum = createMemo(() =>
    rows().reduce(
      (max, row) => Math.max(max, row.value),
      Number.isFinite(local.maxValue) && (local.maxValue ?? 0) > 0 ? (local.maxValue ?? 0) : 0,
    ),
  );
  return (
    <figure {...rest} aria-labelledby={captionId} class={barListClass(local.class)}>
      <figcaption id={captionId} class="nui-data-label">
        {local.title}
      </figcaption>
      <Show when={local.description}>
        <p class="nui-data-description">{local.description}</p>
      </Show>
      <Show when={rows().length > 0} fallback={<BarListEmpty message={local.emptyMessage} />}>
        <ul class="nui-bar-list-items">
          <For each={rows()}>
            {(row) => (
              <BarListRow
                label={local.label(row.datum)}
                value={(local.valueFormat ?? number.format)(row.value)}
                width={(row.value / (maximum() || 1)) * 100}
                tone={
                  typeof local.tone === "function"
                    ? local.tone(row.datum)
                    : (local.tone ?? "primary")
                }
              />
            )}
          </For>
        </ul>
      </Show>
    </figure>
  );
}

function BarListRow(props: { label: string; value: string; width: number; tone: BarListTone }) {
  return (
    <li class="nui-bar-list-item">
      <span class="nui-bar-list-label">{props.label}</span>
      <span class="nui-bar-list-value">{props.value}</span>
      <div class="nui-bar-list-track" aria-hidden="true">
        <span
          class="nui-bar-list-fill"
          data-tone={props.tone}
          style={{ width: `${props.width}%` }}
        />
      </div>
    </li>
  );
}

function BarListEmpty(props: { message: string | undefined }) {
  return (
    <Empty.Root layout="compact">
      <Empty.Title>{props.message ?? "No data available"}</Empty.Title>
    </Empty.Root>
  );
}

function barListClass(className: string | undefined) {
  return ["nui-bar-list", className].filter(Boolean).join(" ");
}
