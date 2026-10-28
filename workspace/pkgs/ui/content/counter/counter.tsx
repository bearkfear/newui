import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { counterAnchorRecipe, counterLabelClass, counterRecipe } from "./counter.recipe";

export type CounterAnchorProps = JSX.HTMLAttributes<HTMLDivElement>;

export function CounterAnchor(props: CounterAnchorProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={counterAnchorRecipe({ class: local.class })} />;
}

export type CounterProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children"> &
  VariantProps<typeof counterRecipe> & {
    value: number;
    max?: number;
    showZero?: boolean;
    label?: string;
  };

function nonNegativeInteger(value: number, fallback: number) {
  return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : fallback;
}

export function Counter(props: CounterProps) {
  const [local, rest] = splitProps(props, [
    "value",
    "max",
    "showZero",
    "label",
    "variant",
    "tone",
    "size",
    "placement",
    "class",
  ]);
  const count = () => nonNegativeInteger(local.value, 0);
  const limit = () => nonNegativeInteger(local.max ?? 99, 99);
  const display = () => (count() > limit() ? `${limit()}+` : String(count()));
  return (
    <Show when={count() > 0 || local.showZero}>
      <span
        {...rest}
        class={counterRecipe({
          variant: local.variant,
          tone: local.tone,
          size: local.size,
          placement: local.placement,
          class: local.class,
        })}
      >
        <span aria-hidden="true">{display()}</span>
        <span class={counterLabelClass}>{local.label ?? String(count())}</span>
      </span>
    </Show>
  );
}
