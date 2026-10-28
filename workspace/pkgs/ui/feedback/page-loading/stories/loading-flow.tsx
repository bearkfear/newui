import { createSignal, onCleanup, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Card } from "../../../content/card/card";
import { Text } from "../../../content/text/text";
import { PageLoading } from "../page-loading";

export function LoadingFlow() {
  const [pending, setPending] = createSignal(false);
  const [message, setMessage] = createSignal("Ready to load the workspace.");
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));
  const reload = () => {
    if (pending()) return;
    setMessage("Loading the workspace…");
    setPending(true);
    timer = setTimeout(() => {
      setPending(false);
      setMessage("Workspace loaded. Three projects are available.");
    }, 1800);
  };
  return (
    <div style={{ display: "grid", gap: "16px", "max-width": "40rem" }}>
      <div>
        <Button onClick={reload} disabled={pending()}>
          Reload workspace
        </Button>
      </div>
      <Text role="status" aria-atomic="true" size="7" tone="muted">
        {message()}
      </Text>
      <Card.Root>
        <Card.Header>
          <Card.Title>Workspace projects</Card.Title>
        </Card.Header>
        <section aria-busy={pending()} aria-label="Project results">
          <Show
            when={pending()}
            fallback={
              <Card.Content>
                <Text>Website redesign · Design system · Documentation</Text>
              </Card.Content>
            }
          >
            <PageLoading
              layout="section"
              label="Loading workspace…"
              description="Preparing your projects and recent updates."
              role="presentation"
              aria-hidden="true"
            />
          </Show>
        </section>
      </Card.Root>
    </div>
  );
}
