import type { JSX } from "solid-js";
import { createUniqueId, Show, splitProps } from "solid-js";
import type { DeltaOptions } from "../delta/delta";
import { deltaDirection, deltaLabel, deltaTone } from "../delta/delta";

export type DeltaBarProps = Omit<JSX.HTMLAttributes<HTMLElement>, "children" | "title"> &
  DeltaOptions & { label: string; description?: string };

export function DeltaBar(props: DeltaBarProps) {
  const [local, rest] = splitProps(props, [
    "label",
    "description",
    "value",
    "isPositiveGood",
    "valueFormat",
    "class",
  ]);
  const captionId = createUniqueId();
  const magnitude = () =>
    Number.isFinite(local.value) ? Math.min(100, Math.abs(local.value)) / 2 : 0;
  return (
    <figure {...rest} aria-labelledby={captionId} class={deltaBarClass(local.class)}>
      <figcaption id={captionId} class="nui-data-caption">
        <span class="nui-data-label">{local.label}</span>
        <span class="nui-data-value" data-tone={deltaTone(local.value, local.isPositiveGood)}>
          <span class="nui-data-sr-only">{deltaDirection(local.value)}: </span>
          {deltaLabel(local)}
        </span>
      </figcaption>
      <Show when={local.description}>
        <p class="nui-data-description">{local.description}</p>
      </Show>
      <div class="nui-delta-track" aria-hidden="true">
        <span
          class="nui-delta-fill"
          data-tone={deltaTone(local.value, local.isPositiveGood)}
          style={{ left: `${local.value < 0 ? 50 - magnitude() : 50}%`, width: `${magnitude()}%` }}
        />
      </div>
    </figure>
  );
}

function deltaBarClass(className: string | undefined) {
  return ["nui-delta-bar", className].filter(Boolean).join(" ");
}
