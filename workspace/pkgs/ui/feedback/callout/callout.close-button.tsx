import { X } from "lucide-solid";
import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { calloutRecipe } from "./callout.recipe";

export type CalloutCloseButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;
const styles = calloutRecipe();

function CloseIcon() {
  return <X size={16} aria-hidden="true" />;
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
