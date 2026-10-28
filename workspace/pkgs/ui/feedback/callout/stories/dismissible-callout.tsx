import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Callout } from "../callout";

export function DismissibleCallout() {
  const [visible, setVisible] = createSignal(true);
  let showButton: HTMLButtonElement | undefined;
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <div>
        <Button
          ref={showButton}
          variant="outline"
          disabled={visible()}
          onClick={() => setVisible(true)}
        >
          Show notice
        </Button>
      </div>
      <Show when={visible()}>
        <Callout.Root tone="info">
          <Callout.Icon />
          <Callout.Content>
            <Callout.Title>Workspace tips</Callout.Title>
            <Callout.Description>
              You can watch a project to receive updates about its milestones.
            </Callout.Description>
          </Callout.Content>
          <Callout.CloseButton
            onClick={() => {
              setVisible(false);
              showButton?.focus();
            }}
          />
        </Callout.Root>
      </Show>
      <Text role="status" aria-atomic="true" tone="muted" size="7">
        {visible() ? "The notice is visible." : "Notice dismissed. You can show it again."}
      </Text>
    </div>
  );
}
