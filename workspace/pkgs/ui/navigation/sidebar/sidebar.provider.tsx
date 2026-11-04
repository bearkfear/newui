import { useSplitterContext } from "@ark-ui/solid/splitter";
import type { JSX } from "solid-js";
import { SidebarContext } from "./sidebar.context";
import { synchronizeCollapsed, type useSidebarState } from "./sidebar.state";
import type { SidebarRootProps } from "./sidebar.types";

export function SidebarProvider(props: {
  options: SidebarRootProps;
  state: ReturnType<typeof useSidebarState>;
  children?: JSX.Element;
}) {
  const api = useSplitterContext();
  synchronizeCollapsed(api, props.options);
  const collapsed = () => props.state.desktop() && api().isPanelCollapsed("sidebar");
  return (
    <SidebarContext.Provider
      value={{
        ...props.state,
        api,
        collapsed,
        resizable: () => props.options.resizable ?? false,
        toggle: () => (collapsed() ? api().expandPanel("sidebar") : api().collapsePanel("sidebar")),
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
}
