import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { sectionRecipe } from "./section.recipe";

export type SectionProps = JSX.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionRecipe>;

export function Section(props: SectionProps) {
  const [local, rest] = splitProps(props, ["spacing", "class", "children"]);
  return (
    <section {...rest} class={sectionRecipe({ spacing: local.spacing, class: local.class })}>
      {local.children}
    </section>
  );
}
