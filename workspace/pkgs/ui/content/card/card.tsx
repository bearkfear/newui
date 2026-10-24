import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { VariantProps } from "tailwind-variants/lite";
import {
  CardActions,
  CardContent,
  CardDescription,
  CardFooter,
  CardFooterItem,
  CardHeader,
  CardMedia,
  CardTitle,
} from "./card.parts";
import { cardRecipe } from "./card.recipe";

export type CardRootProps = JSX.HTMLAttributes<HTMLElement> &
  VariantProps<typeof cardRecipe> & { as?: "div" | "article" | "section" };

export function CardRoot(props: CardRootProps) {
  const [local, rest] = splitProps(mergeProps({ as: "div" as const }, props), [
    "as",
    "variant",
    "class",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...rest}
      class={cardRecipe({ variant: local.variant }).root({ class: local.class })}
    />
  );
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Actions: CardActions,
  Media: CardMedia,
  Content: CardContent,
  Footer: CardFooter,
  FooterItem: CardFooterItem,
};
