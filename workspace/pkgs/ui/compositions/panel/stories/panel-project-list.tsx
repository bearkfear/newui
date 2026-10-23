import { For } from "solid-js";
import { Text } from "../../../content/text/text";
import { Panel } from "../panel";
import type { Project } from "./projects";

type PanelProjectListProps = {
  projects: readonly Project[];
  selectedId: string;
  detailId: string;
  onSelect: (project: Project) => void;
};

export function PanelProjectList(props: PanelProjectListProps) {
  return (
    <Panel.List>
      <For
        each={props.projects}
        fallback={
          <Panel.Item>
            <Text style={{ padding: "20px" }}>No projects match your filters.</Text>
          </Panel.Item>
        }
      >
        {(project) => (
          <Panel.Item>
            <Panel.Link
              href={`#${props.detailId}`}
              aria-current={props.selectedId === project.id ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                props.onSelect(project);
              }}
            >
              <span>{project.name}</span>
              <Text as="span" size="7" tone="muted">
                {project.active ? "Active" : "Archived"}
              </Text>
            </Panel.Link>
          </Panel.Item>
        )}
      </For>
    </Panel.List>
  );
}
