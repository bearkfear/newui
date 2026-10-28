import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Tooltip } from "../tooltip";

export function ControlledTooltip() {
  const [open, setOpen] = createSignal(false);
  return (
    <div
      style={{
        display: "flex",
        "align-items": "center",
        "flex-wrap": "wrap",
        gap: "24px",
        padding: "48px 0",
      }}
    >
      <Button variant="soft" aria-pressed={open()} onClick={() => setOpen(!open())}>
        {open() ? "Hide tooltip" : "Show tooltip"}
      </Button>
      <Tooltip.Root open={open()} onOpenChange={(details) => setOpen(details.open)}>
        <Tooltip.Trigger
          asChild={(props) => (
            <Button {...props()} tone="neutral" variant="outline">
              Project visibility
            </Button>
          )}
        />
        <Tooltip.Content>Only workspace members can view this project.</Tooltip.Content>
      </Tooltip.Root>
      <Text role="status" size="7" tone="muted">
        Tooltip is {open() ? "open" : "closed"}.
      </Text>
    </div>
  );
}
