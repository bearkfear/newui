import { Menu as Ark } from "@ark-ui/solid/menu";
import { type JSX, onCleanup, onMount, splitProps } from "solid-js";
import type { MenuContentProps } from "../menu/menu.content";
import { menuRecipe } from "../menu/menu.recipe";
import { MenubarMenuContext, useMenubar, useMenubarMenu } from "./menubar.context";

export type MenubarMenuProps = { value: string; children?: JSX.Element };
export type MenubarTriggerProps = Omit<Ark.TriggerProps, "value" | "role" | "tabIndex">;
export type MenubarContentProps = MenuContentProps;
const styles = menuRecipe();

export function MenubarMenu(props: MenubarMenuProps) {
  return (
    <MenubarMenuContext.Provider value={props.value}>{props.children}</MenubarMenuContext.Provider>
  );
}
export function MenubarTrigger(props: MenubarTriggerProps) {
  const bar = useMenubar();
  const value = useMenubarMenu();
  const [local, rest] = splitProps(props, ["class", "onFocus", "onPointerEnter", "onKeyDown"]);
  onMount(() => {
    if (!bar.active() && !props.disabled) bar.activate(value);
  });
  return (
    <Ark.Trigger
      {...rest}
      value={value}
      role="menuitem"
      data-nui-menubar-trigger=""
      data-state={bar.api().open && bar.api().triggerValue === value ? "open" : "closed"}
      tabIndex={bar.active() === value && !props.disabled ? 0 : -1}
      class={styles.trigger({ class: local.class })}
      onFocus={(event) => {
        bar.activate(value);
        if (typeof local.onFocus === "function") local.onFocus(event);
        else local.onFocus?.[0](local.onFocus[1], event);
      }}
      onPointerEnter={(event) => {
        if (typeof local.onPointerEnter === "function") local.onPointerEnter(event);
        else local.onPointerEnter?.[0](local.onPointerEnter[1], event);
        if (
          !event.defaultPrevented &&
          event.pointerType === "mouse" &&
          !props.disabled &&
          bar.api().open &&
          bar.api().triggerValue !== value
        ) {
          bar.activate(value);
          bar.api().setHighlightedValue("");
          bar.api().setTriggerValue(value);
        }
      }}
      onKeyDown={(event) => {
        if (typeof local.onKeyDown === "function") local.onKeyDown(event);
        else local.onKeyDown?.[0](local.onKeyDown[1], event);
        if (
          event.defaultPrevented ||
          !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)
        )
          return;
        event.preventDefault();
        bar.move(event.key, value, bar.api().open);
      }}
    />
  );
}
export function MenubarContent(props: MenubarContentProps) {
  const bar = useMenubar();
  const value = useMenubarMenu();
  onCleanup(bar.register(value, props));
  return null;
}
