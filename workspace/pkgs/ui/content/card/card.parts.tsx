import type { JSX } from "solid-js";
import { mergeProps, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { HeadingProps } from "../heading/heading";
import { Heading } from "../heading/heading";
import type { TextProps } from "../text/text";
import { Text } from "../text/text";
import { cardFooterItemRecipe, cardFooterRecipe, cardRecipe } from "./card.recipe";

type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
export type CardFooterProps = PartProps & VariantProps<typeof cardFooterRecipe>;
const styles = cardRecipe();

export function CardHeader(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-card-header="" class={styles.header({ class: local.class })} />;
}

export function CardTitle(props: HeadingProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <Heading
      {...mergeProps({ as: "h2" as const, size: "5" as const }, rest)}
      class={styles.title({ class: local.class })}
    />
  );
}

export function CardDescription(props: TextProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <Text
      {...mergeProps({ size: "6" as const, tone: "muted" as const }, rest)}
      class={styles.description({ class: local.class })}
    />
  );
}

export function CardActions(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-card-actions="" class={styles.actions({ class: local.class })} />;
}

export function CardContent(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-card-content="" class={styles.content({ class: local.class })} />;
}

export function CardMedia(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={styles.media({ class: local.class })} />;
}

export function CardFooter(props: CardFooterProps) {
  const [local, rest] = splitProps(props, ["variant", "class"]);
  return (
    <div
      {...rest}
      data-nui-card-footer={local.variant ?? "simple"}
      class={cardFooterRecipe({ variant: local.variant, class: local.class })}
    />
  );
}

export function CardFooterItem(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} class={cardFooterItemRecipe({ class: local.class })} />;
}
