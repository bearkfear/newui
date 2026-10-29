import { ChevronsUpDown, Layers, LogOut, UserRound } from "lucide-solid";
import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { DropdownMenu } from "../../../actions/dropdown-menu/dropdown-menu";
import { Sidebar } from "../sidebar";
import { SidebarNavigation } from "./sidebar-navigation";
import { SidebarWorkspace } from "./sidebar-workspace";
import "./sidebar-demo.css";

export type SidebarExampleProps = {
  resizable?: boolean;
  defaultCollapsed?: boolean;
  defaultMobileOpen?: boolean;
};

export function SidebarExample(props: SidebarExampleProps) {
  const [current, setCurrent] = createSignal("Overview");
  return (
    <Sidebar.Root
      resizable={props.resizable ?? true}
      defaultCollapsed={props.defaultCollapsed ?? false}
      defaultMobileOpen={props.defaultMobileOpen ?? false}
      class="sidebar-demo-frame"
      style={{ height: "42rem" }}
    >
      <Sidebar.Panel aria-label="Acme workspace sidebar">
        <WorkspaceBrand onHome={() => setCurrent("Overview")} />
        <Sidebar.Body>
          <SidebarNavigation current={current()} onNavigate={setCurrent} />
        </Sidebar.Body>
        <Sidebar.Footer class="sidebar-demo-footer">
          <AccountMenu onSettings={() => setCurrent("Settings")} />
        </Sidebar.Footer>
      </Sidebar.Panel>
      <Sidebar.Main>
        <SidebarWorkspace current={current()} />
      </Sidebar.Main>
    </Sidebar.Root>
  );
}

function WorkspaceBrand(props: { onHome: () => void }) {
  return (
    <Sidebar.Header class="sidebar-demo-header">
      <button type="button" class="sidebar-demo-brand" onClick={props.onHome}>
        <span class="sidebar-demo-mark">
          <Layers size={20} aria-hidden="true" />
        </span>
        <Sidebar.Label>
          Acme Studio<span class="sidebar-demo-brand-detail">Pro workspace</span>
        </Sidebar.Label>
      </button>
    </Sidebar.Header>
  );
}

function AccountMenu(props: { onSettings: () => void }) {
  const [status, setStatus] = createSignal("Available");
  return (
    <Sidebar.Context>
      {(sidebar) => (
        <DropdownMenu.Root
          positioning={{
            placement: sidebar.collapsed() ? "right-end" : "top-start",
            gutter: sidebar.collapsed() ? 12 : 8,
          }}
        >
          <DropdownMenu.Trigger class="sidebar-demo-account" aria-label="Morgan Lee account">
            <span class="sidebar-demo-avatar" aria-hidden="true">
              ML
            </span>
            <Sidebar.Label>
              Morgan Lee<span class="sidebar-demo-account-detail">{status()}</span>
            </Sidebar.Label>
            <Sidebar.Expanded>
              <ChevronsUpDown size={14} aria-hidden="true" />
            </Sidebar.Expanded>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              value="settings"
              icon={<UserRound size={16} />}
              onSelect={() => {
                props.onSettings();
                sidebar.setMobileOpen(false);
              }}
            >
              Account settings
            </DropdownMenu.Item>
            <DropdownMenu.Item
              value="status"
              onSelect={() => setStatus(status() === "Available" ? "Away" : "Available")}
            >
              Set {status() === "Available" ? "away" : "available"}
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item value="sign-out" disabled icon={<LogOut size={16} />}>
              Sign out
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      )}
    </Sidebar.Context>
  );
}

export function ControlledSidebar() {
  const [collapsed, setCollapsed] = createSignal(false);
  const [current, setCurrent] = createSignal("Overview");
  return (
    <div class="sidebar-demo-controlled">
      <Button variant="outline" size="sm" onClick={() => setCollapsed(!collapsed())}>
        Externally {collapsed() ? "expand" : "collapse"}
      </Button>
      <Sidebar.Root
        collapsed={collapsed()}
        onCollapsedChange={setCollapsed}
        resizable
        class="sidebar-demo-frame"
        style={{ height: "42rem" }}
      >
        <Sidebar.Panel>
          <WorkspaceBrand onHome={() => setCurrent("Overview")} />
          <Sidebar.Body>
            <SidebarNavigation current={current()} onNavigate={setCurrent} />
          </Sidebar.Body>
        </Sidebar.Panel>
        <Sidebar.Main>
          <SidebarWorkspace current={current()} />
        </Sidebar.Main>
      </Sidebar.Root>
    </div>
  );
}
