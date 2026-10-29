import { ChartNoAxesCombined, Folder, House, Inbox, LifeBuoy, Settings } from "lucide-solid";
import { For, type JSX } from "solid-js";
import { Tooltip } from "../../../overlays/tooltip/tooltip";
import { VerticalMenu } from "../../vertical-menu/vertical-menu";
import { Sidebar } from "../sidebar";

export type SidebarNavigationProps = { current: string; onNavigate: (page: string) => void };
const workspaceLinks = [
  { label: "Overview", icon: House },
  { label: "Projects", icon: Folder },
  { label: "Inbox", icon: Inbox },
  { label: "Analytics", icon: ChartNoAxesCombined },
];

function SidebarLink(props: SidebarNavigationProps & { label: string; icon: () => JSX.Element }) {
  return (
    <Sidebar.Context>
      {(sidebar) => (
        <VerticalMenu.Item>
          <Tooltip.Root disabled={!sidebar.collapsed()} positioning={{ placement: "right" }}>
            <Tooltip.Trigger
              asChild={(triggerProps) => (
                <VerticalMenu.Link
                  {...triggerProps()}
                  href={`#${props.label.toLowerCase().replaceAll(" ", "-")}`}
                  current={props.current === props.label}
                  onClick={(event) => {
                    if (
                      event.defaultPrevented ||
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    )
                      return;
                    event.preventDefault();
                    props.onNavigate(props.label);
                    sidebar.setMobileOpen(false);
                  }}
                >
                  <VerticalMenu.Icon>{props.icon()}</VerticalMenu.Icon>
                  <Sidebar.Label>{props.label}</Sidebar.Label>
                </VerticalMenu.Link>
              )}
            />
            <Tooltip.Content>{props.label}</Tooltip.Content>
          </Tooltip.Root>
        </VerticalMenu.Item>
      )}
    </Sidebar.Context>
  );
}

export function SidebarNavigation(props: SidebarNavigationProps) {
  return (
    <VerticalMenu.Root aria-label="Workspace navigation">
      <VerticalMenu.Group>
        <Sidebar.Expanded>
          <VerticalMenu.Label>Workspace</VerticalMenu.Label>
        </Sidebar.Expanded>
        <VerticalMenu.List>
          <For each={workspaceLinks}>
            {(link) => <SidebarLink {...props} label={link.label} icon={() => <link.icon />} />}
          </For>
        </VerticalMenu.List>
      </VerticalMenu.Group>
      <Sidebar.Expanded>
        <VerticalMenu.Group>
          <VerticalMenu.Label>Collections</VerticalMenu.Label>
          <VerticalMenu.List>
            <VerticalMenu.Branch defaultOpen>
              <VerticalMenu.BranchTrigger>
                <span>Design team</span>
              </VerticalMenu.BranchTrigger>
              <VerticalMenu.BranchContent>
                <VerticalMenu.SubList>
                  <SidebarLink {...props} label="Brand refresh" icon={() => <Folder />} />
                  <SidebarLink {...props} label="Design system" icon={() => <Folder />} />
                </VerticalMenu.SubList>
              </VerticalMenu.BranchContent>
            </VerticalMenu.Branch>
          </VerticalMenu.List>
        </VerticalMenu.Group>
      </Sidebar.Expanded>
      <VerticalMenu.Group>
        <Sidebar.Expanded>
          <VerticalMenu.Label>Resources</VerticalMenu.Label>
        </Sidebar.Expanded>
        <VerticalMenu.List>
          <SidebarLink {...props} label="Settings" icon={() => <Settings />} />
          <SidebarLink {...props} label="Help center" icon={() => <LifeBuoy />} />
        </VerticalMenu.List>
      </VerticalMenu.Group>
    </VerticalMenu.Root>
  );
}
