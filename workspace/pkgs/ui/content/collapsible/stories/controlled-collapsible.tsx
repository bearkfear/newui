import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import { Collapsible } from "../collapsible";

export function ControlledCollapsible() {
  const [open, setOpen] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <div>
        <Button variant="outline" onClick={() => setOpen(!open())}>
          Toggle from application
        </Button>
      </div>
      <Collapsible.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Collapsible.Trigger>
          Milestone notes
          <Collapsible.Indicator />
        </Collapsible.Trigger>
        <Collapsible.Content>
          <p>The application owns this section’s open state.</p>
        </Collapsible.Content>
      </Collapsible.Root>
      <Text size="7" tone="muted">
        Section is {open() ? "open" : "closed"}.
      </Text>
    </div>
  );
}
