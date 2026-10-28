import { Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { AlertDialog } from "../alert-dialog";

interface AsyncAlertDialogContentProps {
  pending: boolean;
  error: boolean;
  onConfirm: () => void;
}

export function AsyncAlertDialogContent(props: AsyncAlertDialogContentProps) {
  return (
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>Delete this project?</AlertDialog.Title>
        <AlertDialog.Description>
          The project and all shared updates will be permanently removed.
        </AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Body>
        <Text>This demo waits for the application to finish before closing.</Text>
        <Text role="status" size="7" tone="muted">
          {props.pending ? "Deleting project…" : "Ready to delete."}
        </Text>
        <Show when={props.error}>
          <Text role="alert">The project could not be deleted. Please try again.</Text>
        </Show>
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <AlertDialog.CancelTrigger disabled={props.pending} />
        <AlertDialog.ActionTrigger
          onClick={(event) => {
            event.preventDefault();
            props.onConfirm();
          }}
          asChild={(actionProps) => (
            <Button {...actionProps()} tone="danger" loading={props.pending}>
              {props.error ? "Try again" : "Delete project"}
            </Button>
          )}
        />
      </AlertDialog.Footer>
    </AlertDialog.Content>
  );
}
