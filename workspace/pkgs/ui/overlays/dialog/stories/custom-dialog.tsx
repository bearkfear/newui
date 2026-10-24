import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";

export function CustomDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open custom composition</Button>}
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Surface size="sm">
            <Dialog.Header>
              <Dialog.Title>Custom composition</Dialog.Title>
              <Dialog.CloseTrigger />
            </Dialog.Header>
            <Dialog.Body>
              <Text>
                Portal, backdrop, positioner, and surface are available individually when a layout
                needs more control.
              </Text>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.CloseTrigger
                asChild={(closeProps) => <Button {...closeProps()}>Understood</Button>}
              />
            </Dialog.Footer>
          </Dialog.Surface>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
