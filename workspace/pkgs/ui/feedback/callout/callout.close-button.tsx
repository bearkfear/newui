import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { calloutRecipe } from "./callout.recipe";

export type CalloutCloseButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;
const styles = calloutRecipe();

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m4 4 8 8m0-8-8 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  );
}

export function CalloutCloseButton(props: CalloutCloseButtonProps) {
  const [local, rest] = splitProps(mergeProps({ type: "button" as const }, props), [
    "class",
    "children",
    "aria-label",
  ]);
  return (
    <button
      {...rest}
      aria-label={local["aria-label"] ?? (local.children == null ? "Dismiss message" : undefined)}
      class={styles.close({ class: local.class })}
    >
      {local.children ?? <CloseIcon />}
    </button>
  );
}
