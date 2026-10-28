import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { AlertDialog, type AlertDialogContentProps } from "../alert-dialog";

export interface AlertDialogExampleProps {
  size?: AlertDialogContentProps["size"];
  closeOnEscape?: boolean;
  defaultOpen?: boolean;
}

export function AlertDialogExample(props: AlertDialogExampleProps) {
  const [deleted, setDeleted] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <AlertDialog.Root defaultOpen={props.defaultOpen} closeOnEscape={props.closeOnEscape}>
        <AlertDialog.Trigger
          asChild={(triggerProps) => (
            <Button {...triggerProps()} tone="danger" variant="outline">
              Delete project
            </Button>
          )}
        />
        <AlertDialog.Content size={props.size}>
          <AlertDialog.Header>
            <AlertDialog.Title>Delete this project?</AlertDialog.Title>
            <AlertDialog.Description>
              This permanently deletes the project and its shared updates. You cannot undo this
              action.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Body>
            <Text>All workspace members will lose access to “Website redesign”.</Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <AlertDialog.CancelTrigger />
            <AlertDialog.ActionTrigger onClick={() => setDeleted(true)}>
              Delete project
            </AlertDialog.ActionTrigger>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Text role="status" size="7" tone="muted">
        {deleted() ? "Project deleted (demo)." : "Your project is still available."}
      </Text>
    </div>
  );
}
