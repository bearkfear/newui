import { createMemo, createSignal, createUniqueId } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import type { PanelRootProps } from "../panel";
import { Panel } from "../panel";
import { PanelFilters } from "./panel-filters";
import { PanelProjectList } from "./panel-project-list";
import type { Project } from "./projects";
import { projects } from "./projects";

export function PanelExample(props: PanelRootProps) {
  const titleId = createUniqueId();
  const [query, setQuery] = createSignal("");
  const [activeOnly, setActiveOnly] = createSignal(false);
  const [selected, setSelected] = createSignal<Project>(projects[0]);
  const matches = createMemo(() =>
    projects.filter(
      (project) =>
        project.name.toLowerCase().includes(query().trim().toLowerCase()) &&
        (!activeOnly() || project.active),
    ),
  );
  return (
    <Panel.Root {...props} aria-labelledby={titleId}>
      <Panel.Header>
        <Panel.Title id={titleId}>Your projects</Panel.Title>
        <Panel.Description>A little structure for the work ahead.</Panel.Description>
      </Panel.Header>
      <Panel.Toolbar>
        <PanelFilters
          query={query()}
          onQueryChange={setQuery}
          activeOnly={activeOnly()}
          onActiveOnlyChange={setActiveOnly}
          inputId={`${titleId}-search`}
        />
      </Panel.Toolbar>
      <PanelProjectList
        projects={matches()}
        selectedId={selected().id}
        detailId={`${titleId}-detail`}
        onSelect={setSelected}
      />
      <Panel.Body id={`${titleId}-detail`}>
        <Text>{selected().description}</Text>
      </Panel.Body>
      <Panel.Footer>
        <Text size="7" tone="muted" role="status">
          {matches().length} projects shown
        </Text>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => {
            setQuery("");
            setActiveOnly(false);
          }}
        >
          Reset filters
        </Button>
      </Panel.Footer>
    </Panel.Root>
  );
}
