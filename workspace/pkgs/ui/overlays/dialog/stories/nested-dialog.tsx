import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";

function DetailsDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => (
          <Button {...triggerProps()} variant="outline">
            View milestone details
          </Button>
        )}
      />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Milestone details</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>Closing this dialog returns focus to the project dialog underneath.</Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger
            asChild={(closeProps) => <Button {...closeProps()}>Back to project</Button>}
          />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function NestedDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open project dialog</Button>}
      />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Project overview</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>A nested dialog can provide extra detail without losing this context.</Text>
          <div>
            <DetailsDialog />
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger
            asChild={(closeProps) => (
              <Button {...closeProps()} variant="outline" tone="neutral">
                Close project
              </Button>
            )}
          />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
