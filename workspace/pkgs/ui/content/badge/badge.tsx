import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { VariantProps } from "tailwind-variants/lite";
import { badgeGroupRecipe, badgeRecipe } from "./badge.recipe";

type BadgeElementProps =
  | (JSX.HTMLAttributes<HTMLSpanElement> & { as?: "span" })
  | (JSX.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string })
  | (JSX.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" });

export type BadgeProps = BadgeElementProps & VariantProps<typeof badgeRecipe>;
export type BadgeGroupProps = JSX.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeGroupRecipe>;

export function Badge(props: BadgeProps) {
  const [local, rest] = splitProps(mergeProps({ as: "span" as const }, props), [
    "as",
    "variant",
    "tone",
    "size",
    "rounded",
    "class",
  ]);
  return (
    <Dynamic
      component={local.as}
      type={local.as === "button" ? "button" : undefined}
      {...rest}
      class={badgeRecipe({
        variant: local.variant,
        tone: local.tone,
        size: local.size,
        rounded: local.rounded,
        class: local.class,
      })}
    />
  );
}

export function BadgeGroup(props: BadgeGroupProps) {
  const [local, rest] = splitProps(props, ["attached", "class"]);
  return (
    <div {...rest} class={badgeGroupRecipe({ attached: local.attached, class: local.class })} />
  );
}
