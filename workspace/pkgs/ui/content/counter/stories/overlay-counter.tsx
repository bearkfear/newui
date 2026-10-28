import { createSignal, For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Avatar } from "../../avatar/avatar";
import { Text } from "../../text/text";
import { Counter, CounterAnchor, type CounterProps } from "../counter";

type OverlayCounterProps = Pick<
  CounterProps,
  "value" | "variant" | "tone" | "size" | "max" | "showZero"
>;

function NotificationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" />
    </svg>
  );
}

export function OverlayCounterExamples(props: OverlayCounterProps) {
  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "align-items": "center",
        gap: "3rem",
        padding: "1rem",
      }}
    >
      <CounterAnchor>
        <Button aria-label={`Notifications, ${props.value} unread`}>
          <NotificationIcon /> Notifications
        </Button>
        <Counter {...props} placement="top-end" aria-hidden="true" />
      </CounterAnchor>
      <CounterAnchor>
        <Button variant="soft" iconOnly aria-label={`Notifications, ${props.value} unread`}>
          <NotificationIcon />
        </Button>
        <Counter {...props} placement="top-end" aria-hidden="true" />
      </CounterAnchor>
      <CounterAnchor>
        <Avatar.Root size="lg">
          <Avatar.Fallback>EK</Avatar.Fallback>
        </Avatar.Root>
        <Counter {...props} placement="top-end" label={`${props.value} messages from Enrico`} />
      </CounterAnchor>
      <CounterAnchor>
        <span
          style={{
            display: "inline-grid",
            "place-items": "center",
            width: "4rem",
            height: "4rem",
            "border-radius": "1rem",
            background: "var(--nui-primary-soft)",
            color: "var(--nui-primary-text)",
          }}
        >
          <NotificationIcon />
        </span>
        <Counter {...props} placement="top-end" label={`${props.value} notifications`} />
      </CounterAnchor>
    </div>
  );
}

export function OverlayCounterPlacements(props: OverlayCounterProps) {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap", gap: "3rem", padding: "1rem" }}>
      <For each={["top-start", "top-end", "bottom-start", "bottom-end"] as const}>
        {(placement) => (
          <CounterAnchor>
            <Button variant="soft" aria-label={`${placement}, ${props.value} unread`}>
              {placement}
            </Button>
            <Counter {...props} placement={placement} aria-hidden="true" />
          </CounterAnchor>
        )}
      </For>
    </div>
  );
}

export function InteractiveOverlayCounter() {
  const [value, setValue] = createSignal(5);
  return (
    <div style={{ display: "grid", gap: "1.5rem", "justify-items": "start", padding: "1rem" }}>
      <CounterAnchor>
        <Button
          variant="soft"
          iconOnly
          onClick={() => setValue(0)}
          aria-label={`Notifications, ${value()} unread. Mark all as read.`}
        >
          <NotificationIcon />
        </Button>
        <Counter value={value()} placement="top-end" aria-hidden="true" />
      </CounterAnchor>
      <Text tone="muted" role="status">
        {value()} unread notifications
      </Text>
      <div style={{ display: "flex", "flex-wrap": "wrap", gap: "0.5rem" }}>
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
