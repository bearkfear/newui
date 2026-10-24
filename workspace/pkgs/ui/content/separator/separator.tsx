import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { separatorRecipe } from "./separator.recipe";

export type SeparatorProps = JSX.HTMLAttributes<HTMLHRElement> &
  VariantProps<typeof separatorRecipe> & { decorative?: boolean };

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
