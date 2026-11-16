import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { VariantProps } from "tailwind-variants/lite";
import { textRecipe } from "./text.recipe";

/** `as` chooses p (default), span, or div semantics independently from visual `size`. */
export type TextProps = JSX.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textRecipe> & {
    as?: "p" | "span" | "div";
  };

/** Renders margin-free text; use span for inline content and Heading for page titles. */
export function Text(props: TextProps) {
  const [local, rest] = splitProps(mergeProps({ as: "p" as const }, props), [
    "as",
    "size",
    "tone",
    "class",
    "children",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...rest}
      class={textRecipe({ size: local.size, tone: local.tone, class: local.class })}
    >
      {local.children}
    </Dynamic>
  );
}
