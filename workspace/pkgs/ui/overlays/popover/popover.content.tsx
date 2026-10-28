import { mergeProps, Show, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import {
  PopoverArrow,
  PopoverPositioner,
  PopoverSurface,
  type PopoverSurfaceProps,
} from "./popover.parts";

export type PopoverContentProps = PopoverSurfaceProps & {
  mount?: HTMLElement;
  showArrow?: boolean;
};

export function PopoverContent(props: PopoverContentProps) {
  const [local, rest] = splitProps(mergeProps({ showArrow: true }, props), [
    "mount",
    "showArrow",
    "children",
  ]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <PopoverPositioner>
        <PopoverSurface {...rest}>
          <Show when={local.showArrow}>
            <PopoverArrow />
          </Show>
          {local.children}
        </PopoverSurface>
      </PopoverPositioner>
    </OverlayPortal>
  );
}
