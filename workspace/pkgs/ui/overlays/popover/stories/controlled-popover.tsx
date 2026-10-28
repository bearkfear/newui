import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover } from "../popover";
import { NotificationContent, type NotificationMode } from "./notification-content";

export function ControlledPopover() {
  const [open, setOpen] = createSignal(false);
  const [mode, setMode] = createSignal<NotificationMode>("Mentions only");
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start", padding: "24px 0" }}>
      <Popover.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Popover.Trigger asChild={(props) => <Button {...props()}>Manage notifications</Button>} />
        <NotificationContent mode={mode()} onModeChange={setMode} />
      </Popover.Root>
      <Text role="status" size="7" tone="muted">
        Popover is {open() ? "open" : "closed"}. Receiving: {mode().toLowerCase()}.
      </Text>
    </div>
  );
}
