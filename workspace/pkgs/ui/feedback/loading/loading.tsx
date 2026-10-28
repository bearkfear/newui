import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { LoadingIndicator } from "./loading.indicator";
import { loadingRecipe } from "./loading.recipe";

export type LoadingProps = Omit<JSX.HTMLAttributes<HTMLSpanElement>, "children"> &
  VariantProps<typeof loadingRecipe> & { label?: string };

export function Loading(props: LoadingProps) {
  const [local, rest] = splitProps(
    mergeProps({ role: "status" as const, "aria-atomic": true as const, label: "Loading…" }, props),
    ["size", "tone", "showLabel", "label", "class"],
  );
  const styles = () =>
    loadingRecipe({ size: local.size, tone: local.tone, showLabel: local.showLabel });
  return (
    <span {...rest} class={styles().root({ class: local.class })}>
      <LoadingIndicator size={local.size} tone={local.tone} />
      <span class={styles().label()}>{local.label}</span>
    </span>
  );
}
