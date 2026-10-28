import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import { Counter } from "../counter";

export function NotificationCounter() {
  const [value, setValue] = createSignal(5);
  return (
    <div style={{ display: "grid", gap: "1rem", "justify-items": "start" }}>
      <Button
        variant="soft"
        onClick={() => setValue(0)}
        aria-label={`Notifications, ${value()} unread. Mark all as read.`}
      >
        Notifications <Counter value={value()} size="sm" aria-hidden="true" />
      </Button>
      <Text tone="muted" role="status">
        {value()} unread notifications
      </Text>
      <div style={{ display: "flex", gap: "0.5rem", "flex-wrap": "wrap" }}>
        <Button size="sm" onClick={() => setValue((count) => count + 1)}>
          Receive notification
        </Button>
        <Button size="sm" variant="soft" onClick={() => setValue(125)}>
          Simulate 125 unread
        </Button>
      </div>
    </div>
  );
}
