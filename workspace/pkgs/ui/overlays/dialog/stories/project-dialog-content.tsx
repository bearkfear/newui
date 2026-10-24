import { Button } from "../../../actions/button/button";
import { Badge } from "../../../content/badge/badge";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";
import type { DialogContentProps } from "../dialog.content";

interface ProjectDialogContentProps {
  size: DialogContentProps["size"];
  onPublish: () => void;
}

export function ProjectDialogContent(props: ProjectDialogContentProps) {
  return (
    <Dialog.Content size={props.size}>
      <Dialog.Header>
        <Dialog.Title>Publish project update</Dialog.Title>
        <Dialog.Description>Share this milestone with your workspace.</Dialog.Description>
        <Dialog.CloseTrigger />
      </Dialog.Header>
      <Dialog.Body>
        <div>
          <Badge tone="success">Ready for review</Badge>
        </div>
        <Text>
          The first milestone is complete. Your team will be able to read the update and discuss the
          next steps.
        </Text>
        <Text tone="muted">
          You can publish the update now or return to the project to keep working.
        </Text>
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.CloseTrigger
          asChild={(closeProps) => (
            <Button {...closeProps()} tone="neutral" variant="outline">
              Cancel
            </Button>
          )}
        />
        <Dialog.CloseTrigger
          onClick={props.onPublish}
          asChild={(closeProps) => (
            <Button {...closeProps()} tone="success">
              Publish update
            </Button>
          )}
        />
      </Dialog.Footer>
    </Dialog.Content>
  );
}
