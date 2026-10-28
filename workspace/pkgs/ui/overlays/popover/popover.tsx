import { Popover as ArkPopover } from "@ark-ui/solid/popover";
import { mergeProps, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import { PopoverCloseTrigger } from "./popover.close-trigger";
import { PopoverContent } from "./popover.content";
import {
  PopoverArrow,
  PopoverBody,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverSurface,
  PopoverTitle,
} from "./popover.parts";

export type PopoverRootProps = ArkPopover.RootProps;
export type PopoverTriggerProps = ArkPopover.TriggerProps;

export function PopoverRoot(props: PopoverRootProps) {
  const [local, rest] = splitProps(props, ["positioning"]);
  return (
    <ArkPopover.Root
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

export const Popover = {
  Root: PopoverRoot,
  Trigger: ArkPopover.Trigger,
  Anchor: ArkPopover.Anchor,
  Content: PopoverContent,
  Header: PopoverHeader,
  Title: PopoverTitle,
  Description: PopoverDescription,
  Body: PopoverBody,
  Footer: PopoverFooter,
  CloseTrigger: PopoverCloseTrigger,
  Portal: OverlayPortal,
  Positioner: PopoverPositioner,
  Surface: PopoverSurface,
  Arrow: PopoverArrow,
  ArrowTip: ArkPopover.ArrowTip,
  Context: ArkPopover.Context,
};
