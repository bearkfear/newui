import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";

export function ControlledDialog() {
  const [open, setOpen] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Button onClick={() => setOpen(true)}>Open controlled dialog</Button>
      <Text size="7" tone="muted" role="status">
        Dialog is {open() ? "open" : "closed"}.
      </Text>
      <Dialog.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Dialog.Content size="sm">
          <Dialog.Header>
            <Dialog.Title>Controlled dialog</Dialog.Title>
            <Dialog.CloseTrigger />
          </Dialog.Header>
          <Dialog.Body>
            <Text>
              The application owns the open state. Escape, outside interaction, and close controls
              request the same state update.
            </Text>
          </Dialog.Body>
          <Dialog.Footer>
            <Button onClick={() => setOpen(false)}>Close from application</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}
