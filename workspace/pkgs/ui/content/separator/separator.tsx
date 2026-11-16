import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { separatorRecipe } from "./separator.recipe";

/** `orientation` controls direction; set `decorative` when the divider carries no content meaning. */
export type SeparatorProps = JSX.HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof separatorRecipe> & { decorative?: boolean };

/** Renders an `hr` separator without margins; surrounding layout owns gaps and spacing. */
export function Separator(props: SeparatorProps) {
  const [local, rest] = splitProps(
    mergeProps({ orientation: "horizontal" as const, decorative: false }, props),
    ["orientation", "decorative", "class"],
  );
  return (
    <hr
      {...rest}
      role={local.decorative ? "none" : "separator"}
      aria-hidden={local.decorative ? true : undefined}
      aria-orientation={local.decorative ? undefined : local.orientation}
      class={separatorRecipe({ orientation: local.orientation, class: local.class })}
    />
  );
}
