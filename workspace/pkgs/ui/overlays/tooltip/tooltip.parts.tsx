import { Tooltip as ArkTooltip } from "@ark-ui/solid/tooltip";
import { splitProps } from "solid-js";
import { tooltipRecipe } from "./tooltip.recipe";

const styles = tooltipRecipe();
export type TooltipSurfaceProps = ArkTooltip.ContentProps;
export type TooltipArrowProps = ArkTooltip.ArrowProps;
export type TooltipPositionerProps = ArkTooltip.PositionerProps;

export function TooltipSurface(props: TooltipSurfaceProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkTooltip.Content {...rest} class={styles.content({ class: local.class })} />;
}

export function TooltipPositioner(props: TooltipPositionerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <ArkTooltip.Positioner {...rest} class={styles.positioner({ class: local.class })} />;
}

export function TooltipArrow(props: TooltipArrowProps) {
  const [local, rest] = splitProps(props, ["children"]);
  return <ArkTooltip.Arrow {...rest}>{local.children ?? <ArkTooltip.ArrowTip />}</ArkTooltip.Arrow>;
}
