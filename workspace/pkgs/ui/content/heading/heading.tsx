import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { VariantProps } from "tailwind-variants/lite";
import { headingRecipe } from "./heading.recipe";

/** `as` sets the h1–h6 document level; `size` changes appearance independently. Defaults are h2/3. */
export type HeadingProps = JSX.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingRecipe> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

/** Renders a margin-free heading; the parent owns spacing and the page owns heading order. */
export function Heading(props: HeadingProps) {
  const [local, rest] = splitProps(mergeProps({ as: "h2" as const }, props), [
    "as",
    "size",
    "class",
    "children",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...rest}
      class={headingRecipe({ size: local.size, class: local.class })}
    >
      {local.children}
    </Dynamic>
  );
}
