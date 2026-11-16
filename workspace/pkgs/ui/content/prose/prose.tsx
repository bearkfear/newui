import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { proseRecipe } from "./prose.recipe";

/** Use Prose around editorial HTML such as paragraphs, lists, tables, and code; it does not render Markdown. */
export type ProseProps = JSX.HTMLAttributes<HTMLDivElement> & VariantProps<typeof proseRecipe>;

/** Styles native long-form content to a 65ch reading width; keep interactive UI outside its descendants. */
export function Prose(props: ProseProps) {
  const [local, rest] = splitProps(props, ["size", "class", "children"]);
  return (
    <div {...rest} class={proseRecipe({ size: local.size, class: local.class })}>
      {local.children}
    </div>
  );
}
