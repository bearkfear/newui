import type { JSX } from "solid-js";
import { createUniqueId, Show, splitProps } from "solid-js";
import type { DeltaOptions } from "../delta/delta";
import { deltaDirection, deltaLabel, deltaTone } from "../delta/delta";

/** `value` is a signed percent (12.5 means +12.5); `label` and description supply metric context. */
export type DeltaBarProps = Omit<JSX.HTMLAttributes<HTMLElement>, "children" | "title"> &
  DeltaOptions & { label: string; description?: string };

/**
 * Shows percentage change and context in text; the zero-centered bar is decorative.
 * Geometry clamps to ±100% while text preserves the full value. Reverse impact colors with
 * `isPositiveGood={false}` when a decrease is favorable; direction never reverses.
 */
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
