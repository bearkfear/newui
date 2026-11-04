import type { UseSplitterContext } from "@ark-ui/solid/splitter";
import { createMediaQuery } from "@solid-primitives/media";
import { createEffect, createSignal, createUniqueId, on, untrack } from "solid-js";
import type { SidebarRootProps } from "./sidebar.types";

export function useSidebarState(props: SidebarRootProps) {
  const desktop = createMediaQuery("(min-width: 48rem)");
  const [open, setOpen] = createSignal(props.defaultMobileOpen ?? false);
  const mobileOpen = () => props.mobileOpen ?? open();
  const panelId = `${createUniqueId()}-sidebar`;
  const setMobileOpen = (value: boolean) => {
    if (props.mobileOpen === undefined) setOpen(value);
    props.onMobileOpenChange?.(value);
  };
  createEffect(() => {
    if (desktop() && untrack(mobileOpen)) setMobileOpen(false);
  });
  return { desktop, mobileOpen, setMobileOpen, panelId };
}

export function synchronizeCollapsed(api: UseSplitterContext, props: SidebarRootProps) {
  // Initial state comes from the stored layout. Only external changes should drive Ark;
  // observing its emitted state would race the parent's onCollapsedChange update.
  createEffect(
    on(
      () => props.collapsed,
      (desired) => {
        if (desired === undefined || desired === api().isPanelCollapsed("sidebar")) return;
        if (desired) api().collapsePanel("sidebar");
        else api().expandPanel("sidebar");
      },
      { defer: true },
    ),
  );
}

export const sidebarOptionKeys = [
  "children",
  "class",
  "resizable",
  "defaultWidth",
  "minWidth",
  "maxWidth",
  "compactWidth",
  "collapsed",
  "defaultCollapsed",
  "onCollapsedChange",
  "mobileOpen",
  "defaultMobileOpen",
  "onMobileOpenChange",
  "onResizeEnd",
] as const;
