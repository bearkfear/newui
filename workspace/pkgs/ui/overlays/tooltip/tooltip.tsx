import { Tooltip as ArkTooltip } from "@ark-ui/solid/tooltip";
import { mergeProps, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import { TooltipContent } from "./tooltip.content";
import { TooltipArrow, TooltipPositioner, TooltipSurface } from "./tooltip.parts";

/** Tooltip.Root defaults to 400ms open/150ms close delays and top placement; supplied positioning overrides these defaults. */
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

/**
 * Short descriptive text for a trigger on hover or keyboard focus; it supplements an accessible name
 * and is not a replacement for labeling an icon button. Keep content noninteractive even though the
 * pointer can move onto the tooltip surface.
 */
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
