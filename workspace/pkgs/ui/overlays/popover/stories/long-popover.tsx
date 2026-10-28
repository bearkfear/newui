import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover } from "../popover";

export function LongPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Recent updates
          </Button>
        )}
      />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Recent project updates</Popover.Title>
          <Popover.Description>The latest milestones from your team.</Popover.Description>
          <Popover.CloseTrigger />
        </Popover.Header>
        <Popover.Body>
          <For each={Array.from({ length: 12 }, (_, index) => index + 1)}>
            {(milestone) => (
              <Text size="6">
                Milestone {milestone}: the team reviewed the latest changes and shared the next
                steps.
              </Text>
            )}
          </For>
        </Popover.Body>
        <Popover.Footer>
          <Popover.CloseTrigger
            asChild={(props) => (
              <Button {...props()} size="sm">
                Done
              </Button>
            )}
          />
        </Popover.Footer>
      </Popover.Content>
    </Popover.Root>
  );
}
