import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Callout } from "../callout";

export function CalloutActionsExample() {
  const [connected, setConnected] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <Callout.Root tone={connected() ? "success" : "danger"}>
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>
            {connected() ? "Connection restored" : "Your changes could not be synced"}
          </Callout.Title>
          <Callout.Description>
            {connected()
              ? "Your workspace is up to date."
              : "Your changes are safe on this device. Reconnect to sync them with your team."}
          </Callout.Description>
          <Callout.Actions>
            <Show
              when={!connected()}
              fallback={
                <Button
                  size="sm"
                  variant="outline"
                  tone="neutral"
                  onClick={() => setConnected(false)}
                >
                  Reset demo
                </Button>
              }
            >
              <Button size="sm" tone="danger" onClick={() => setConnected(true)}>
                Try again
              </Button>
            </Show>
          </Callout.Actions>
        </Callout.Content>
      </Callout.Root>
      <Text role="status" aria-atomic="true" size="7" tone="muted">
        {connected() ? "Demo: sync completed successfully." : "Demo: connection unavailable."}
      </Text>
    </div>
  );
}
