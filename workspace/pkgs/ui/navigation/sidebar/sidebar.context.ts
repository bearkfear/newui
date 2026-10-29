import type { UseSplitterContext } from "@ark-ui/solid/splitter";
import { type Accessor, createContext, type JSX, useContext } from "solid-js";

export type SidebarContextValue = {
  desktop: Accessor<boolean>;
  collapsed: Accessor<boolean>;
  mobileOpen: Accessor<boolean>;
  setMobileOpen: (open: boolean) => void;
  toggle: () => void;
  panelId: string;
  resizable: Accessor<boolean>;
  api: UseSplitterContext;
};
export const SidebarContext = createContext<SidebarContextValue>();
export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("Sidebar parts must be used within Sidebar.Root.");
  return context;
}

export function SidebarConsumer(props: {
  children: (context: SidebarContextValue) => JSX.Element;
}) {
  return props.children(useSidebar());
}
