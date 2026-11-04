import { createSignal, mergeProps, splitProps } from "solid-js";
import { Resizable } from "../../layout/resizable/resizable";
import { Sheet } from "../../overlays/sheet/sheet";
import { SidebarConsumer } from "./sidebar.context";
import { SidebarPanel } from "./sidebar.panel";
import {
  SidebarBody,
  SidebarExpanded,
  SidebarFooter,
  SidebarHeader,
  SidebarLabel,
  SidebarMain,
} from "./sidebar.parts";
import { SidebarProvider } from "./sidebar.provider";
import { sidebarRecipe } from "./sidebar.recipe";
import { sidebarOptionKeys, useSidebarState } from "./sidebar.state";
import { SidebarToggle } from "./sidebar.toggle";
import type { SidebarRootProps } from "./sidebar.types";

const styles = sidebarRecipe();

export function SidebarRoot(props: SidebarRootProps) {
  const [local, rest] = splitProps(
    mergeProps(
      { defaultWidth: 256, minWidth: 216, maxWidth: 360, compactWidth: 64, resizable: false },
      props,
    ),
    sidebarOptionKeys,
  );
  const state = useSidebarState(local);
  const [size, setSize] = createSignal<(string | number)[]>([
    `${(local.collapsed ?? local.defaultCollapsed) ? local.compactWidth : local.defaultWidth}px`,
  ]);
  return (
    <Sheet.Root
      open={!state.desktop() && state.mobileOpen()}
      onOpenChange={(details) => state.setMobileOpen(details.open)}
    >
      <Resizable.Root
        {...rest}
        class={styles.root({ class: local.class })}
        data-mobile={!state.desktop() ? "" : undefined}
        data-resizable={local.resizable ? "" : undefined}
        panels={[
          {
            id: "sidebar",
            minSize: `${local.resizable ? local.minWidth : local.defaultWidth}px`,
            maxSize: `${local.resizable ? local.maxWidth : local.defaultWidth}px`,
            collapsible: true,
            collapsedSize: `${local.compactWidth}px`,
          },
          { id: "main", minSize: 25 },
        ]}
        size={size()}
        onResize={(details) => setSize(details.size)}
        onCollapse={() => local.onCollapsedChange?.(true)}
        onExpand={() => local.onCollapsedChange?.(false)}
        onResizeEnd={local.onResizeEnd}
      >
        <SidebarProvider options={local} state={state}>
          {local.children}
        </SidebarProvider>
      </Resizable.Root>
    </Sheet.Root>
  );
}

export const Sidebar = {
  Root: SidebarRoot,
  Panel: SidebarPanel,
  Header: SidebarHeader,
  Body: SidebarBody,
  Footer: SidebarFooter,
  Main: SidebarMain,
  Label: SidebarLabel,
  Expanded: SidebarExpanded,
  Toggle: SidebarToggle,
  Context: SidebarConsumer,
};

export type { SidebarContextValue } from "./sidebar.context";
export type { SidebarPanelProps } from "./sidebar.panel";
export type { SidebarLabelProps, SidebarMainProps, SidebarPartProps } from "./sidebar.parts";
export type { SidebarToggleProps } from "./sidebar.toggle";
export type { SidebarRootProps } from "./sidebar.types";
