import { Button } from "../../../actions/button/button";
import { AlertDialog } from "../alert-dialog";

export function PublishConfirmation() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild={(props) => <Button {...props()}>Publish update</Button>} />
      <AlertDialog.Content>
        <AlertDialog.Header>
          <AlertDialog.Title>Notify everyone in the workspace?</AlertDialog.Title>
          <AlertDialog.Description>
            Publishing sends this update to all workspace members immediately.
          </AlertDialog.Description>
        </AlertDialog.Header>
        <AlertDialog.Footer>
          <AlertDialog.CancelTrigger>Keep editing</AlertDialog.CancelTrigger>
          <AlertDialog.ActionTrigger
            asChild={(props) => <Button {...props()}>Publish update</Button>}
          />
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
