import type { UseMenuContext } from "@ark-ui/solid/menu";
import type { Accessor } from "solid-js";
import { createContext, useContext } from "solid-js";
import type { MenuContentProps } from "../menu/menu.content";

export interface MenubarController {
  api: UseMenuContext;
  active: Accessor<string>;
  activate: (value: string) => void;
  move: (key: string, current: string, open: boolean) => void;
  panels: Accessor<ReadonlyMap<string, MenuContentProps>>;
  register: (value: string, props: MenuContentProps) => () => void;
}
export const MenubarContext = createContext<MenubarController>();
export const MenubarMenuContext = createContext<string>();
export function useMenubar() {
  const context = useContext(MenubarContext);
  if (!context) throw new Error("Menubar parts require Menubar.Root.");
  return context;
}
export function useMenubarMenu() {
  const value = useContext(MenubarMenuContext);
  if (!value) throw new Error("Menubar.Trigger and Content require Menubar.Menu.");
  return value;
}
