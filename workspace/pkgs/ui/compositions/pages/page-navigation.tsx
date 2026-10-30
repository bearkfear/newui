import {
  Activity,
  BookOpen,
  ChartNoAxesCombined,
  FolderKanban,
  Layers,
  ShoppingBag,
} from "lucide-solid";
import { For } from "solid-js";
import { Avatar, Progress, Sidebar, Tooltip, VerticalMenu } from "../../index";
import type { PageId } from "./page-parts";

export const pageLinks = [
  { id: "analytics", label: "Analytics", icon: ChartNoAxesCombined },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "project", label: "Project", icon: FolderKanban },
  { id: "status", label: "Service status", icon: Activity },
  { id: "help", label: "Help center", icon: BookOpen },
] as const;

export function PageNavigation(props: { current: PageId; onNavigate: (page: PageId) => void }) {
  return (
    <Sidebar.Panel aria-label="Forma workspace">
      <Sidebar.Header class="example-brand">
        <span class="example-brand-mark">
          <Layers size={20} aria-hidden="true" />
        </span>
        <Sidebar.Label>
          <strong>forma</strong>
          <small>Studio workspace</small>
        </Sidebar.Label>
      </Sidebar.Header>
      <Sidebar.Body>
        <VerticalMenu.Root aria-label="Page examples">
          <VerticalMenu.Group>
            <Sidebar.Expanded>
              <VerticalMenu.Label>Workspace</VerticalMenu.Label>
            </Sidebar.Expanded>
            <VerticalMenu.List>
              <For each={pageLinks}>{(link) => <PageLink {...props} link={link} />}</For>
            </VerticalMenu.List>
          </VerticalMenu.Group>
        </VerticalMenu.Root>
        <Sidebar.Expanded class="example-sidebar-note">
          <Progress label="Workspace storage" value={32} size="sm" />
          <small>3.2 GB of 10 GB used</small>
        </Sidebar.Expanded>
      </Sidebar.Body>
      <Sidebar.Footer>
        <div class="example-account">
          <Avatar.Root size="sm">
            <Avatar.Fallback>JL</Avatar.Fallback>
          </Avatar.Root>
          <Sidebar.Label>
            <strong>Jamie Lee</strong>
            <small>Studio owner</small>
          </Sidebar.Label>
        </div>
      </Sidebar.Footer>
    </Sidebar.Panel>
  );
}

function PageLink(props: {
  current: PageId;
  onNavigate: (page: PageId) => void;
  link: (typeof pageLinks)[number];
}) {
  return (
    <Sidebar.Context>
      {(sidebar) => (
        <VerticalMenu.Item>
          <Tooltip.Root disabled={!sidebar.collapsed()} positioning={{ placement: "right" }}>
            <Tooltip.Trigger
              asChild={(triggerProps) => (
                <VerticalMenu.Link
                  {...triggerProps()}
                  href={`#${props.link.id}`}
                  current={props.current === props.link.id}
                  onClick={(event) => {
                    if (
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey ||
                      event.defaultPrevented
                    )
                      return;
                    event.preventDefault();
                    props.onNavigate(props.link.id);
                    sidebar.setMobileOpen(false);
                  }}
                >
                  <VerticalMenu.Icon>
                    <props.link.icon size={18} />
                  </VerticalMenu.Icon>
                  <Sidebar.Label>{props.link.label}</Sidebar.Label>
                </VerticalMenu.Link>
              )}
            />
            <Tooltip.Content>{props.link.label}</Tooltip.Content>
          </Tooltip.Root>
        </VerticalMenu.Item>
      )}
    </Sidebar.Context>
  );
}
