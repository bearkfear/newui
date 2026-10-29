import { Popover as Ark } from "@ark-ui/solid/popover";
import { createMediaQuery } from "@solid-primitives/media";
import { ChevronRight } from "lucide-solid";
import { createEffect, createSignal, mergeProps, on, Show, splitProps } from "solid-js";
import { OverlayPortal } from "../../overlays/overlay.portal";
import {
  NavigationMenuCloseContext,
  NavigationMenuVisibilityContext,
  useNavigationMenuClose,
  useNavigationMenuVisibility,
} from "./navigation-menu.context";
import { navigationMenuRecipe } from "./navigation-menu.recipe";

const styles = navigationMenuRecipe();
export type NavigationSubmenuProps = Ark.RootProps;
export type NavigationSubmenuTriggerProps = Ark.TriggerProps;
export type NavigationSubmenuContentProps = Ark.ContentProps;

export function NavigationSubmenu(props: NavigationSubmenuProps) {
  const parentClose = useNavigationMenuClose();
  const parentVisible = useNavigationMenuVisibility();
  const desktop = createMediaQuery("(min-width: 48rem)");
  const [open, setOpen] = createSignal(props.defaultOpen ?? false);
  const [local, rest] = splitProps(props, [
    "open",
    "defaultOpen",
    "onOpenChange",
    "positioning",
    "children",
  ]);
  const close = () => {
    setOpen(false);
    local.onOpenChange?.({ open: false });
    parentClose();
  };
  createEffect(
    on(
      parentVisible,
      (visible) => {
        if (!visible && (local.open ?? open())) {
          setOpen(false);
          local.onOpenChange?.({ open: false });
        }
      },
      { defer: true },
    ),
  );
  return (
    <Ark.Root
      {...mergeProps({ lazyMount: true, unmountOnExit: true }, rest)}
      portalled={desktop()}
      open={parentVisible() && (local.open ?? open())}
      onOpenChange={(details) => {
        setOpen(details.open);
        local.onOpenChange?.(details);
      }}
      positioning={mergeProps(
        {
          placement: desktop() ? ("right-start" as const) : ("bottom-start" as const),
          strategy: "fixed" as const,
          gutter: 4,
          overflowPadding: 16,
        },
        local.positioning ?? {},
      )}
    >
      <NavigationMenuCloseContext.Provider value={close}>
        <NavigationMenuVisibilityContext.Provider
          value={() => parentVisible() && (local.open ?? open())}
        >
          {local.children}
        </NavigationMenuVisibilityContext.Provider>
      </NavigationMenuCloseContext.Provider>
    </Ark.Root>
  );
}
export function NavigationSubmenuTrigger(props: NavigationSubmenuTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Ark.Trigger {...rest} class={styles.subTrigger({ class: local.class })}>
      {local.children}
      <ChevronRight size={14} aria-hidden="true" />
    </Ark.Trigger>
  );
}
export function NavigationSubmenuContent(props: NavigationSubmenuContentProps) {
  const desktop = createMediaQuery("(min-width: 48rem)");
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    <Show
      when={desktop()}
      fallback={
        <Ark.Content {...rest} data-nui-submenu="" class={styles.content({ class: local.class })}>
          {local.children}
        </Ark.Content>
      }
    >
      <OverlayPortal>
        <Ark.Positioner class="nui-navigation-submenu-positioner">
          <Ark.Content {...rest} class={styles.content({ class: local.class })}>
            {local.children}
          </Ark.Content>
        </Ark.Positioner>
      </OverlayPortal>
    </Show>
  );
}
