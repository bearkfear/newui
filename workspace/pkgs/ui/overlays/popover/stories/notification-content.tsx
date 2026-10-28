import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover } from "../popover";

export type NotificationMode = "All updates" | "Mentions only" | "Muted";
interface NotificationContentProps {
  mode: NotificationMode;
  onModeChange: (mode: NotificationMode) => void;
  showArrow?: boolean;
}

export function NotificationContent(props: NotificationContentProps) {
  return (
    <Popover.Content showArrow={props.showArrow ?? true}>
      <Popover.Header>
        <Popover.Title>Project notifications</Popover.Title>
        <Popover.Description>Choose which updates you receive.</Popover.Description>
        <Popover.CloseTrigger />
      </Popover.Header>
      <Popover.Body>
        <fieldset
          aria-label="Notification preferences"
          style={{ display: "grid", gap: "8px", border: 0, padding: 0, margin: 0, "min-width": 0 }}
        >
          <For each={["All updates", "Mentions only", "Muted"] as const}>
            {(mode) => (
              <Button
                tone={props.mode === mode ? "primary" : "neutral"}
                variant="soft"
                size="sm"
                aria-pressed={props.mode === mode}
                onClick={() => props.onModeChange(mode)}
              >
                {mode}
              </Button>
            )}
          </For>
        </fieldset>
        <Text size="7" tone="muted">
          Changes apply immediately to this demo.
        </Text>
      </Popover.Body>
      <Popover.Footer>
        <Popover.CloseTrigger
          asChild={(closeProps) => (
            <Button {...closeProps()} size="sm">
              Done
            </Button>
          )}
        />
      </Popover.Footer>
    </Popover.Content>
  );
}
