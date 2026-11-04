import type { CounterProps } from "../counter";

export function overlaySource(_source: string, context: { args: CounterProps }) {
  const args = context.args;
  return `import { Button, Counter, CounterAnchor } from "@egcs/newui";
import "@egcs/newui/styles.css";

export function NotificationButton() {
  return (
    <CounterAnchor>
      <Button aria-label="Notifications, ${args.value} unread">
        Notifications
      </Button>
      <Counter
        value={${args.value}}
        max={${args.max ?? 99}}
        showZero={${args.showZero ?? false}}
        variant=${JSON.stringify(args.variant ?? "solid")}
        tone=${JSON.stringify(args.tone ?? "danger")}
        size=${JSON.stringify(args.size ?? "md")}
        placement="top-end"
        aria-hidden="true"
      />
    </CounterAnchor>
  );
}`;
}

export const interactiveOverlaySource = `import { createSignal } from "solid-js";
import { Button, Counter, CounterAnchor } from "@egcs/newui";
import "@egcs/newui/styles.css";

export function Notifications() {
  const [unread, setUnread] = createSignal(5);
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      <CounterAnchor>
        <Button onClick={() => setUnread(0)}
          aria-label={\`Notifications, \${unread()} unread. Mark all as read.\`}>
          Notifications
        </Button>
        <Counter value={unread()} placement="top-end" aria-hidden="true" />
      </CounterAnchor>
      <Button onClick={() => setUnread((count) => count + 1)}>
        Receive notification
      </Button>
    </div>
  );
}`;
