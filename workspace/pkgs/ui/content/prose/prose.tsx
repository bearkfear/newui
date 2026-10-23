import { splitProps } from "solid-js";
import type { JSX } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { proseRecipe } from "./prose.recipe";

export type ProseProps = JSX.HTMLAttributes<HTMLDivElement> & VariantProps<typeof proseRecipe>;

export function Prose(props: ProseProps) {
  const [local, rest] = splitProps(props, ["size", "class", "children"]);
  return <div {...rest} class={proseRecipe({ size: local.size, class: local.class })}>{local.children}</div>;
}
