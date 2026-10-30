import type { JSX } from "solid-js";
import { Show } from "solid-js";
import { BadgeDelta, Card } from "../../index";

export type PageId = "analytics" | "orders" | "project" | "status" | "help";
export type Notify = (title: string, description?: string) => void;

export function PageHeading(props: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: JSX.Element;
}) {
  return (
    <header class="example-page-heading">
      <div>
        <p class="example-eyebrow">{props.eyebrow}</p>
        <h1>{props.title}</h1>
        <p class="example-muted">{props.description}</p>
      </div>
      <Show when={props.actions}>
        <div class="example-actions">{props.actions}</div>
      </Show>
    </header>
  );
}

export function MetricCard(props: {
  label: string;
  value: string;
  delta: number;
  description: string;
  isPositiveGood?: boolean;
}) {
  return (
    <Card.Root as="article">
      <Card.Content>
        <div class="example-metric">
          <h2>{props.label}</h2>
          <p>{props.value}</p>
          <div class="example-metric-comparison">
            <BadgeDelta value={props.delta} isPositiveGood={props.isPositiveGood ?? true} />
            <span>{props.description}</span>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  );
}

export function downloadCsv(filename: string, rows: readonly (readonly (string | number)[])[]) {
  const csv = rows
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
