import { mergeProps, splitProps } from "solid-js";
import type { JSX } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { buttonRecipe } from "./button.recipe.js";

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonRecipe>;

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(mergeProps({ type: "button" as const }, props), [
    "variant", "size", "class", "children",
  ]);

  return (
    <button
      {...rest}
      class={buttonRecipe({ variant: local.variant, size: local.size, class: local.class })}
    >
      {local.children}
    </button>
  );
}
