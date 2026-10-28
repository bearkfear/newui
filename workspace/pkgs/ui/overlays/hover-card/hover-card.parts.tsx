import { HoverCard as ArkHoverCard } from "@ark-ui/solid/hover-card";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { hoverCardRecipe } from "./hover-card.recipe";

const styles = hoverCardRecipe();
export type HoverCardTriggerProps = ArkHoverCard.TriggerProps;
export type HoverCardSurfaceProps = ArkHoverCard.ContentProps;
export type HoverCardPositionerProps = ArkHoverCard.PositionerProps;
export type HoverCardArrowProps = ArkHoverCard.ArrowProps;
export type HoverCardBodyProps = JSX.HTMLAttributes<HTMLDivElement>;

export function HoverCardTrigger(props: HoverCardTriggerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkHoverCard.Trigger {...rest} class={styles.trigger({ class: local.class })} />;
}
export function HoverCardSurface(props: HoverCardSurfaceProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkHoverCard.Content {...rest} class={styles.content({ class: local.class })} />;
}
export function HoverCardPositioner(props: HoverCardPositionerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkHoverCard.Positioner {...rest} class={styles.positioner({ class: local.class })} />;
}
export function HoverCardArrow(props: HoverCardArrowProps) {
  const [local, rest] = splitProps(props, ["children"]);
  return (
    <ArkHoverCard.Arrow {...rest}>{local.children ?? <ArkHoverCard.ArrowTip />}</ArkHoverCard.Arrow>
  );
}
export function HoverCardBody(props: HoverCardBodyProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-hover-card-body="" class={styles.body({ class: local.class })} />;
}
