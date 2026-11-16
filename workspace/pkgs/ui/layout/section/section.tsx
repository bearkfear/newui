import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { sectionRecipe } from "./section.recipe";

/** `size` sets vertical padding; md defaults to 2.5rem/4rem and larger spacing begins at md width. */
export type SectionProps = JSX.HTMLAttributes<HTMLElement> & VariantProps<typeof sectionRecipe>;

/** Native section with vertical spacing; compose Container for horizontal gutters and use aria-labelledby for its region name. */
export function Section(props: SectionProps) {
  const [local, rest] = splitProps(props, ["spacing", "class", "children"]);
  return (
    <section {...rest} class={sectionRecipe({ spacing: local.spacing, class: local.class })}>
      {local.children}
    </section>
  );
}
