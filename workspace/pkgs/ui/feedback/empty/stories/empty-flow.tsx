import { createSignal, onCleanup, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Card } from "../../../content/card/card";
import { Text } from "../../../content/text/text";
import { PageLoading } from "../../page-loading/page-loading";
import { Empty } from "../empty";

export function EmptyFlow() {
  const [state, setState] = createSignal<"loading" | "empty" | "ready">("empty");
  const [message, setMessage] = createSignal("No projects found.");
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const reload = () => {
    if (state() === "loading") return;
    setMessage("Loading projects…");
    setState("loading");
    timer = setTimeout(() => {
      setState("empty");
      setMessage("Loading complete. No projects found.");
    }, 1400);
  };
  const create = () => {
    setState("ready");
    setMessage("Your first project was created.");
  };
  return (
    <div style={{ display: "grid", gap: "1rem", "max-width": "40rem" }}>
      <div>
        <Button variant="outline" onClick={reload} disabled={state() === "loading"}>
          Reload projects
        </Button>
      </div>
      <Text role="status" aria-atomic="true" tone="muted" size="7">
        {message()}
      </Text>
      <Card.Root>
        <Card.Header>
          <Card.Title>Workspace projects</Card.Title>
        </Card.Header>
        <section aria-label="Project results" aria-busy={state() === "loading"}>
          <Show
            when={state() !== "loading"}
            fallback={
              <PageLoading
                layout="section"
                label="Loading projects…"
                role="presentation"
                aria-hidden="true"
              />
            }
          >
            <Show
              when={state() === "empty"}
              fallback={
                <Card.Content>
                  <Text>Your first project</Text>
                </Card.Content>
              }
            >
              <Empty.Root>
                <Empty.Icon />
                <Empty.Content>
                  <Empty.Title as="h3">No projects yet</Empty.Title>
                  <Empty.Description>
                    Your workspace is ready for its first project.
                  </Empty.Description>
                </Empty.Content>
                <Empty.Actions>
                  <Button onClick={create}>Create project</Button>
                </Empty.Actions>
              </Empty.Root>
            </Show>
          </Show>
        </section>
      </Card.Root>
    </div>
  );
}
