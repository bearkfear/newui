import { mergeProps, Show, splitProps } from "solid-js";
import { OverlayPortal } from "../overlay.portal";
import {
  HoverCardArrow,
  HoverCardBody,
  HoverCardPositioner,
  HoverCardSurface,
  type HoverCardSurfaceProps,
} from "./hover-card.parts";

export type HoverCardContentProps = HoverCardSurfaceProps & {
  mount?: HTMLElement;
  showArrow?: boolean;
};

export function HoverCardContent(props: HoverCardContentProps) {
  const [local, rest] = splitProps(mergeProps({ showArrow: true }, props), [
    "mount",
    "showArrow",
    "children",
  ]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <HoverCardPositioner>
        <HoverCardSurface {...rest}>
          <Show when={local.showArrow}>
            <HoverCardArrow />
          </Show>
          <HoverCardBody>{local.children}</HoverCardBody>
        </HoverCardSurface>
      </HoverCardPositioner>
    </OverlayPortal>
  );
}
