import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Dialog } from "../../dialog/dialog";
import { HoverCard } from "../hover-card";
import { ProfilePreview } from "./profile-preview";

export function HoverCardInDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Open project details</Button>} />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>Project details</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <Text>This project uses reactive tools from the following organization.</Text>
          <div>
            <HoverCard.Root>
              <HoverCard.Trigger
                asChild={(props) => (
                  <a
                    {...props()}
                    href="https://github.com/solidjs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SolidJS
                  </a>
                )}
              />
              <HoverCard.Content>
                <ProfilePreview />
              </HoverCard.Content>
            </HoverCard.Root>
          </div>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
