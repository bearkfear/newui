import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../../dialog/dialog";
import { Tooltip } from "../tooltip";
import { ArchiveIcon } from "./tooltip-example";

export function TooltipInDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Open project details</Button>} />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Project details</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>
            Hover or focus Archive to review the action. The tooltip appears above the modal.
          </Text>
          <Tooltip.Root>
            <Tooltip.Trigger
              asChild={(props) => (
                <Button
                  {...props()}
                  tone="neutral"
                  variant="outline"
                  iconOnly
                  aria-label="Archive project"
                  style={{ "justify-self": "start" }}
                >
                  <ArchiveIcon />
                </Button>
              )}
            />
            <Tooltip.Content>Move this project to your archive.</Tooltip.Content>
          </Tooltip.Root>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
