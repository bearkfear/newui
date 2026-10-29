import {
  type NavigationMenuRootProps,
  type UseNavigationMenuReturn,
  useNavigationMenu,
} from "@ark-ui/solid/navigation-menu";
import { createMemo, createUniqueId, mergeProps, splitProps } from "solid-js";

export function useNavigationMenuBehavior(props: NavigationMenuRootProps) {
  const [behavior, rest] = splitProps(props, [
    "closeDelay",
    "defaultValue",
    "disableClickTrigger",
    "disableHoverTrigger",
    "disablePointerLeaveClose",
    "id",
    "ids",
    "onValueChange",
    "openDelay",
    "orientation",
    "translations",
    "value",
  ]);
  const id = createUniqueId();
  const original = useNavigationMenu(
    mergeProps(behavior, {
      get id() {
        return behavior.id ?? id;
      },
    }),
  );
  const api: UseNavigationMenuReturn = createMemo<ReturnType<UseNavigationMenuReturn>>(() => ({
    ...original(),
    getContentProps(content) {
      const attributes = original().getContentProps(content);
      if (!behavior.disablePointerLeaveClose) return attributes;
      // Zag 1.45 only honors this option on Viewport, not on individual Content panels.
      const [, contentAttributes] = splitProps(attributes, ["onPointerLeave"]);
      return contentAttributes;
    },
  }));
  return { api, rest };
}
