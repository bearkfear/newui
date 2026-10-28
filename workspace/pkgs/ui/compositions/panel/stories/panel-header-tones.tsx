import { For } from "solid-js";
import { Text } from "../../../content/text/text";
import { Panel } from "../panel";

export function PanelHeaderTones() {
  return (
    <div
      style={{
        display: "grid",
        "grid-template-columns": "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
        gap: "1.5rem",
      }}
    >
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <Panel.Root aria-label={`${tone} panel`}>
            <Panel.Header variant="solid" tone={tone}>
              <Panel.Title>{tone} workspace</Panel.Title>
              <Panel.Description>Keep your team up to date.</Panel.Description>
            </Panel.Header>
            <Panel.Body>
              <Text tone="muted">Share progress and plan the next milestone together.</Text>
            </Panel.Body>
          </Panel.Root>
        )}
      </For>
    </div>
  );
}
