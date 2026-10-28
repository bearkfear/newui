import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Callout } from "../callout";

export function LiveCallout() {
  const [failed, setFailed] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "8px" }}>
        <Button onClick={() => setFailed(true)} disabled={failed()}>
          Simulate save error
        </Button>
        <Button
          tone="neutral"
          variant="outline"
          onClick={() => setFailed(false)}
          disabled={!failed()}
        >
          Clear message
        </Button>
      </div>
      <div role="alert" aria-atomic="true">
        <Show when={failed()}>
          <Callout.Root tone="danger">
            <Callout.Icon />
            <Callout.Content>
              <Callout.Title>Changes were not saved</Callout.Title>
              <Callout.Description>
                The connection was interrupted. Keep this page open and try saving again.
              </Callout.Description>
            </Callout.Content>
          </Callout.Root>
        </Show>
      </div>
    </div>
  );
}
