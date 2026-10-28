import { Tooltip as ArkTooltip } from "@ark-ui/solid/tooltip";
import { mergeProps, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import { TooltipContent } from "./tooltip.content";
import { TooltipArrow, TooltipPositioner, TooltipSurface } from "./tooltip.parts";

export type TooltipRootProps = ArkTooltip.RootProps;
export type TooltipTriggerProps = ArkTooltip.TriggerProps;

export function TooltipRoot(props: TooltipRootProps) {
  const [local, rest] = splitProps(props, ["positioning"]);
  return (
    <ArkTooltip.Root
      {...mergeProps({ lazyMount: true, unmountOnExit: true, interactive: true }, rest)}
      positioning={mergeProps(
        { placement: "top" as const, gutter: 8, strategy: "fixed" as const },
        local.positioning ?? {},
      )}
    />
  );
}

export const Tooltip = {
  Root: TooltipRoot,
  Trigger: ArkTooltip.Trigger,
  Content: TooltipContent,
  Portal: OverlayPortal,
  Positioner: TooltipPositioner,
  Surface: TooltipSurface,
  Arrow: TooltipArrow,
  ArrowTip: ArkTooltip.ArrowTip,
  Context: ArkTooltip.Context,
};
