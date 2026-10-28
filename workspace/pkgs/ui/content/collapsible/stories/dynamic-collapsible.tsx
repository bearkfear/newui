import { createSignal, For } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Collapsible } from "../collapsible";

export function DynamicCollapsible() {
  const [updates, setUpdates] = createSignal(["The team reviewed the latest milestone."]);
  return (
    <Collapsible.Root defaultOpen>
      <Collapsible.Trigger>
        Project updates
        <Collapsible.Indicator />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <For each={updates()}>{(update) => <p>{update}</p>}</For>
        <div>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              setUpdates([
                ...updates(),
                `Update ${updates().length + 1}: feedback is ready for review.`,
              ])
            }
          >
            Add update
          </Button>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
