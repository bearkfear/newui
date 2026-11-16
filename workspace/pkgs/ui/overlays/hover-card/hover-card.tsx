import { HoverCard as ArkHoverCard } from "@ark-ui/solid/hover-card";
import { mergeProps, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import { HoverCardContent } from "./hover-card.content";
import {
  HoverCardArrow,
  HoverCardBody,
  HoverCardPositioner,
  HoverCardSurface,
  HoverCardTrigger,
} from "./hover-card.parts";

export type HoverCardRootProps = ArkHoverCard.RootProps;

export function HoverCardRoot(props: HoverCardRootProps) {
  const [local, rest] = splitProps(props, ["positioning"]);
  return (
    <ArkHoverCard.Root
      {...mergeProps({ lazyMount: true, unmountOnExit: true }, rest)}
      positioning={mergeProps(
        {
          placement: "bottom-start" as const,
          gutter: 8,
          strategy: "fixed" as const,
          overflowPadding: 16,
        },
        local.positioning ?? {},
      )}
    />
  );
}

/**
 * Supplementary, nonmodal preview opened by hover or keyboard focus, with delayed dismissal.
 * Use a meaningful native link as Trigger for link previews; Root `disabled` disables the preview,
 * not navigation. Put standard padding/scrolling in Body rather than Surface.
 */
export const HoverCard = {
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
  Content: HoverCardContent,
  Portal: OverlayPortal,
  Positioner: HoverCardPositioner,
  Surface: HoverCardSurface,
  Body: HoverCardBody,
  Arrow: HoverCardArrow,
  ArrowTip: ArkHoverCard.ArrowTip,
  Context: ArkHoverCard.Context,
};
