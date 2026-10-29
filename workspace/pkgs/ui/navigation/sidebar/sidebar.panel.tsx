import { type JSX, Show, splitProps } from "solid-js";
import { Resizable } from "../../layout/resizable/resizable";
import { Sheet } from "../../overlays/sheet/sheet";
import { useSidebar } from "./sidebar.context";
import { sidebarRecipe } from "./sidebar.recipe";

export type SidebarPanelProps = JSX.HTMLAttributes<HTMLElement>;
const styles = sidebarRecipe();

export function SidebarPanel(props: SidebarPanelProps) {
  const context = useSidebar();
  const [local, rest] = splitProps(props, ["class", "children", "id"]);
  const surface = () => (
    <aside
      aria-label="Sidebar"
      {...rest}
      id={local.id ?? context.panelId}
      data-collapsed={context.collapsed() ? "" : undefined}
      class={styles.surface({ class: local.class })}
    >
      {local.children}
    </aside>
  );
  return (
    <>
      <Resizable.Panel id="sidebar" class={styles.panel()}>
        <Show
          when={context.desktop()}
          fallback={
            <Sheet.Content
              side="left"
              size="sm"
              class="nui-sidebar-sheet"
              style={{ "--nui-sheet-size": "min(20rem, calc(100vw - 2rem))" }}
              aria-label={rest["aria-label"] ?? "Sidebar navigation"}
            >
              <Sheet.CloseTrigger class="nui-sidebar-mobile-close" />
              {surface()}
            </Sheet.Content>
          }
        >
          {surface()}
        </Show>
      </Resizable.Panel>
      <Show when={context.desktop() && context.resizable()}>
        <Resizable.Handle
          id="sidebar:main"
          class="nui-sidebar-resize-handle"
          aria-label="Resize sidebar; press Enter to collapse or expand"
          withHandle
        />
      </Show>
    </>
  );
}
