import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { containerRecipe } from "./container.recipe";

export type ContainerProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerRecipe>;

export function Container(props: ContainerProps) {
  const [local, rest] = splitProps(props, ["size", "class", "children"]);
  return (
    <div {...rest} class={containerRecipe({ size: local.size, class: local.class })}>
      {local.children}
    </div>
  );
}
