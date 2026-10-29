import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Card } from "../../../content/card/card";
import { Text } from "../../../content/text/text";
import { Empty, type EmptyRootProps } from "../empty";

export interface EmptyExampleProps {
  title?: string;
  description?: string;
  layout?: EmptyRootProps["layout"];
  showIcon?: boolean;
  showActions?: boolean;
}

export function EmptyExample(props: EmptyExampleProps) {
  const [created, setCreated] = createSignal(false);
  return (
    <div style={{ width: "100%", "min-width": "0" }}>
      <Show
        when={!created()}
        fallback={
          <Card.Root>
            <Card.Header>
              <Card.Title>Your first project</Card.Title>
              <Card.Description>Ready to start working.</Card.Description>
            </Card.Header>
            <Card.Content>
              <Button variant="outline" onClick={() => setCreated(false)}>
                Remove project
              </Button>
            </Card.Content>
          </Card.Root>
        }
      >
        <Empty.Root layout={props.layout}>
          <Show when={props.showIcon !== false}>
            <Empty.Icon />
          </Show>
          <Empty.Content>
            <Empty.Title>{props.title ?? "No projects yet"}</Empty.Title>
            <Show when={props.description !== ""}>
              <Empty.Description>
                {props.description ?? "Create your first project to get started."}
              </Empty.Description>
            </Show>
          </Empty.Content>
          <Show when={props.showActions}>
            <Empty.Actions>
              <Button onClick={() => setCreated(true)}>Create project</Button>
            </Empty.Actions>
          </Show>
        </Empty.Root>
      </Show>
      <Show when={props.showActions}>
        <Text role="status" aria-atomic="true" tone="muted" size="7">
          {created() ? "Project created." : ""}
        </Text>
      </Show>
    </div>
  );
}

export function EmptyInCard() {
  return (
    <Card.Root style={{ "max-width": "40rem" }}>
      <Card.Header>
        <Card.Title>Recent activity</Card.Title>
        <Card.Description>Updates from your workspace.</Card.Description>
      </Card.Header>
      <Empty.Root>
        <Empty.Icon />
        <Empty.Content>
          <Empty.Title as="h3">No activity yet</Empty.Title>
          <Empty.Description>Updates will appear when your team starts working.</Empty.Description>
        </Empty.Content>
      </Empty.Root>
    </Card.Root>
  );
}

export function NoResults() {
  const [filtered, setFiltered] = createSignal(true);
  return (
    <div>
      <Show when={filtered()} fallback={<Text>Showing all 12 workspace projects.</Text>}>
        <Empty.Root>
          <Empty.Icon>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m16 16 5 5" />
            </svg>
          </Empty.Icon>
          <Empty.Content>
            <Empty.Title>No matching projects</Empty.Title>
            <Empty.Description>Try another search or clear the current filters.</Empty.Description>
          </Empty.Content>
          <Empty.Actions>
            <Button variant="outline" onClick={() => setFiltered(false)}>
              Clear filters
            </Button>
            <Button variant="ghost" onClick={() => setFiltered(false)}>
              View all projects
            </Button>
          </Empty.Actions>
        </Empty.Root>
      </Show>
      <Text role="status" aria-atomic="true" tone="muted" size="7">
        {filtered() ? "" : "Filters cleared. Showing all 12 projects."}
      </Text>
    </div>
  );
}
