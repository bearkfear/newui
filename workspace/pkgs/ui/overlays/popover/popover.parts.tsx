import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import { popoverRecipe } from "./popover.recipe";

const styles = popoverRecipe();
type PartProps = JSX.HTMLAttributes<HTMLDivElement>;
export type PopoverSurfaceProps = ArkPopover.ContentProps;
export type PopoverPositionerProps = ArkPopover.PositionerProps;
export type PopoverArrowProps = ArkPopover.ArrowProps;

export function PopoverSurface(props: PopoverSurfaceProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkPopover.Content {...rest} class={styles.content({ class: local.class })} />;
}
export function PopoverPositioner(props: PopoverPositionerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkPopover.Positioner {...rest} class={styles.positioner({ class: local.class })} />;
}
export function PopoverArrow(props: PopoverArrowProps) {
  const [local, rest] = splitProps(props, ["children"]);
  return <ArkPopover.Arrow {...rest}>{local.children ?? <ArkPopover.ArrowTip />}</ArkPopover.Arrow>;
}
export function PopoverHeader(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-popover-header="" class={styles.header({ class: local.class })} />;
}
export function PopoverTitle(props: ArkPopover.TitleProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkPopover.Title {...rest} class={styles.title({ class: local.class })} />;
}
export function PopoverDescription(props: ArkPopover.DescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkPopover.Description {...rest} class={styles.description({ class: local.class })} />;
}
export function PopoverBody(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-popover-body="" class={styles.body({ class: local.class })} />;
}
export function PopoverFooter(props: PartProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <div {...rest} data-nui-popover-footer="" class={styles.footer({ class: local.class })} />;
}
