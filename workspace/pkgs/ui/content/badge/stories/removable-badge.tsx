import { X } from "lucide-solid";
import { createSignal, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import { Badge, BadgeGroup } from "../badge";

export function RemovableBadge() {
  const [visible, setVisible] = createSignal(true);
  let restoreButton: HTMLButtonElement | undefined;
  let removeButton: HTMLButtonElement | undefined;
  const remove = () => {
    setVisible(false);
    queueMicrotask(() => restoreButton?.focus());
  };
  const restore = () => {
    setVisible(true);
    queueMicrotask(() => removeButton?.focus());
  };
  return (
    <div style={{ display: "grid", "justify-items": "start", gap: "16px" }}>
      <Show when={visible()}>
        <BadgeGroup attached>
          <Badge tone="primary">Design</Badge>
          <Badge
            as="button"
            tone="primary"
            aria-label="Remove Design label"
            onClick={remove}
            ref={removeButton}
          >
            <X size={12} aria-hidden="true" />
          </Badge>
        </BadgeGroup>
      </Show>
      <Text role="status" size="7" tone="muted">
        {visible() ? "Design label is applied." : "Design label removed."}
      </Text>
      <Button
        ref={restoreButton}
        size="sm"
        variant="outline"
        disabled={visible()}
        onClick={restore}
      >
        Restore label
      </Button>
    </div>
  );
}
