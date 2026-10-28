import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../../dialog/dialog";
import { Popover } from "../popover";
import { NotificationContent, type NotificationMode } from "./notification-content";

export function PopoverInDialog() {
  const [mode, setMode] = createSignal<NotificationMode>("All updates");
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Open workspace settings</Button>} />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Workspace settings</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>Configure notifications without leaving the dialog.</Text>
          <div style={{ display: "flex" }}>
            <Popover.Root>
              <Popover.Trigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Notifications
                  </Button>
                )}
              />
              <NotificationContent mode={mode()} onModeChange={setMode} />
            </Popover.Root>
          </div>
          <Text role="status" size="7" tone="muted">
            Receiving: {mode().toLowerCase()}.
          </Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
