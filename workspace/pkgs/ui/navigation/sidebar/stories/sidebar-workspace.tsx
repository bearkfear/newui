import { ArrowUpRight, Plus } from "lucide-solid";
import { createSignal, For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Badge } from "../../../content/badge/badge";
import { Table } from "../../../data/table/table";
import { Sidebar } from "../sidebar";

const projects = [
  {
    name: "Brand refresh",
    category: "Brand identity",
    status: "In progress",
    updated: "2 hours ago",
  },
  {
    name: "Design system",
    category: "Product design",
    status: "In review",
    updated: "4 hours ago",
  },
  { name: "Customer portal", category: "Engineering", status: "In progress", updated: "Yesterday" },
  { name: "Autumn campaign", category: "Marketing", status: "Planning", updated: "Yesterday" },
];

export function SidebarWorkspace(props: { current: string }) {
  const [items, setItems] = createSignal(projects);
  return (
    <>
      <header class="sidebar-demo-topbar">
        <Sidebar.Toggle />
        <span>
          Workspace <span aria-hidden="true">/</span> <strong>{props.current}</strong>
        </span>
        <span class="sidebar-demo-status">All changes saved</span>
      </header>
      <div class="sidebar-demo-content">
        <div class="sidebar-demo-heading">
          <div>
            <p class="sidebar-demo-eyebrow">YOUR WORKSPACE</p>
            <h1>{props.current}</h1>
            <p class="sidebar-demo-muted">A little clarity for everything your team is building.</p>
          </div>
          <Button
            size="sm"
            startIcon={<Plus />}
            onClick={() =>
              setItems((value) => [
                ...value,
                {
                  name: `Untitled project ${value.length - 3}`,
                  category: "Product design",
                  status: "Planning",
                  updated: "Just now",
                },
              ])
            }
          >
            New project
          </Button>
        </div>
        <div class="sidebar-demo-metrics">
          <Metric
            label="Active projects"
            value={String(items().length)}
            detail="Across your workspace"
          />
          <Metric label="Tasks completed" value="128" detail="24 more than last week" />
          <Metric label="Team members" value="12" detail="Working better together" />
        </div>
        <section class="sidebar-demo-projects" aria-label="Recent projects">
          <div class="sidebar-demo-section-title">
            <h2>Recent projects</h2>
            <Badge variant="soft">{items().length} projects</Badge>
          </div>
          <Table.Container aria-label="Recent workspace projects">
            <Table.Root hoverable>
              <Table.Header>
                <Table.Row>
                  <Table.Head>Project</Table.Head>
                  <Table.Head>Status</Table.Head>
                  <Table.Head align="end">Updated</Table.Head>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <For each={items()}>
                  {(project) => (
                    <Table.Row>
                      <Table.Head scope="row">
                        <strong>{project.name}</strong>
                        <span class="sidebar-demo-project-category">{project.category}</span>
                      </Table.Head>
                      <Table.Cell>
                        <Badge
                          variant="soft"
                          tone={project.status === "In review" ? "success" : "neutral"}
                        >
                          {project.status}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell align="end">{project.updated}</Table.Cell>
                    </Table.Row>
                  )}
                </For>
              </Table.Body>
            </Table.Root>
          </Table.Container>
        </section>
      </div>
    </>
  );
}

function Metric(props: { label: string; value: string; detail: string }) {
  return (
    <section class="sidebar-demo-metric" aria-label={props.label}>
      <div>
        <span>{props.label}</span>
        <ArrowUpRight size={16} aria-hidden="true" />
      </div>
      <strong>{props.value}</strong>
      <p>{props.detail}</p>
    </section>
  );
}
