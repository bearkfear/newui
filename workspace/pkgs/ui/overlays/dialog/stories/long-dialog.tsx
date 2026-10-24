import { For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Dialog } from "../dialog";

export function LongDialog() {
  let title: HTMLHeadingElement | undefined;
  return (
    <Dialog.Root initialFocusEl={() => title ?? null}>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Read project brief</Button>}
      />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title ref={title} tabIndex={-1}>
            Project brief
          </Dialog.Title>
          <Dialog.Description>
            Review the full brief while the actions remain accessible.
          </Dialog.Description>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <For each={Array.from({ length: 10 }, (_, index) => index + 1)}>
            {(section) => (
              <section style={{ display: "grid", gap: "8px" }}>
                <Heading as="h3" size="6">
                  Milestone {section}
                </Heading>
                <Text>
                  Document the decisions, share a clear outcome, and give the team enough context to
                  review the next milestone. Each section belongs to the same project brief.
                </Text>
              </section>
            )}
          </For>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger
            asChild={(closeProps) => <Button {...closeProps()}>Done reading</Button>}
          />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
