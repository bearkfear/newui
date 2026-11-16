import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { containerRecipe } from "./container.recipe";

/** `size` selects max width including gutters: sm 48rem, md 64rem, lg 80rem (default), or full. */
export type ContainerProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerRecipe>;

/** Centers content and applies responsive horizontal gutters with a maximum width. */
export function Container(props: ContainerProps) {
  const [local, rest] = splitProps(props, ["size", "class", "children"]);
  return (
    <div {...rest} class={containerRecipe({ size: local.size, class: local.class })}>
      {local.children}
    </div>
  );
}
