import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Sheet } from "../sheet";
import { ProjectSheetContent } from "./project-sheet-content";

export function ControlledSheet() {
  const [open, setOpen] = createSignal(false);
  const [watching, setWatching] = createSignal(false);
  return (
    <div style={{ display: "grid", gap: "16px", "justify-items": "start" }}>
      <Sheet.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Sheet.Trigger asChild={(props) => <Button {...props()}>Open controlled sheet</Button>} />
        <ProjectSheetContent
          watching={watching()}
          onToggleWatching={() => setWatching(!watching())}
        />
      </Sheet.Root>
      <Text role="status" size="7" tone="muted">
        Sheet is {open() ? "open" : "closed"}.
      </Text>
    </div>
  );
}
