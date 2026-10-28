import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../../dialog/dialog";
import { Sheet } from "../sheet";

function MilestoneDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            View milestone
          </Button>
        )}
      />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Navigation review</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>Review the proposed navigation before sharing the next update.</Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Back to project</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function SheetWithDialog() {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild={(props) => <Button {...props()}>Open project sheet</Button>} />
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Project overview</Sheet.Title>
          <Sheet.CloseTrigger />
        </Sheet.Header>
        <Sheet.Body>
          <Text>A dialog can show additional detail above this sheet.</Text>
          <div>
            <MilestoneDialog />
          </div>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}
