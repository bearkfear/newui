import { createSignal, For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { MessageCallout } from "./message-callout";

export function MessageTones() {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 22rem), 1fr))",
        gap: "24px",
      }}
    >
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <MessageCallout tone={tone} title={`${tone[0]?.toUpperCase()}${tone.slice(1)} message`} />
        )}
      </For>
    </div>
  );
}

export function DismissibleMessage() {
  const [visible, setVisible] = createSignal(true);
  let restore: HTMLButtonElement | undefined;
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <div>
        <Button ref={restore} variant="outline" onClick={() => setVisible(true)}>
          Show message
        </Button>
      </div>
      <Show when={visible()}>
        <MessageCallout
          tone="warning"
          title="Review sharing settings"
          description="This project is visible to all workspace members. Review who can access it before publishing the next update."
          onDismiss={() => {
            setVisible(false);
            restore?.focus();
          }}
        />
      </Show>
    </div>
  );
}
