import { mergeProps, Show, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import {
  TooltipArrow,
  TooltipPositioner,
  TooltipSurface,
  type TooltipSurfaceProps,
} from "./tooltip.parts";

export type TooltipContentProps = TooltipSurfaceProps & {
  mount?: HTMLElement;
  showArrow?: boolean;
};

export function TooltipContent(props: TooltipContentProps) {
  const [local, rest] = splitProps(mergeProps({ showArrow: true }, props), [
    "mount",
    "showArrow",
    "children",
  ]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <TooltipPositioner>
        <TooltipSurface {...rest}>
          <Show when={local.showArrow}>
            <TooltipArrow />
          </Show>
          {local.children}
        </TooltipSurface>
      </TooltipPositioner>
    </OverlayPortal>
  );
}
