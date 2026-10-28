import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Sheet } from "../sheet";
import type { SheetContentProps } from "../sheet.content";

export function LongSheet(props: Pick<SheetContentProps, "side">) {
  return (
    <Sheet.Root>
      <Sheet.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>View project activity</Button>}
      />
      <Sheet.Content side={props.side}>
        <Sheet.Header>
          <Sheet.Title>Project activity</Sheet.Title>
          <Sheet.Description>Recent updates from your team.</Sheet.Description>
          <Sheet.CloseTrigger />
        </Sheet.Header>
        <Sheet.Body>
          <For each={Array.from({ length: 20 }, (_, index) => index + 1)}>
            {(milestone) => (
              <Text>
                Milestone {milestone}: the team reviewed the latest changes and shared the next
                steps.
              </Text>
            )}
          </For>
        </Sheet.Body>
        <Sheet.Footer>
          <Sheet.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  );
}
