import { Button } from "../../../actions/button/button";
import { Text } from "../../../content/text/text";
import { Popover } from "../popover";

export function AnchoredPopover() {
  return (
    <Popover.Root positioning={{ sameWidth: true }}>
      <div style={{ width: "min(100%, 24rem)", display: "grid", gap: "24px" }}>
        <Popover.Anchor
          style={{
            border: "1px solid var(--nui-border)",
            "border-radius": "12px",
            padding: "24px",
          }}
        >
          <Text>Website redesign</Text>
          <Text tone="muted" size="7">
            The popover matches this anchor’s width.
          </Text>
        </Popover.Anchor>
        <Popover.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline">
              View project details
            </Button>
          )}
        />
      </div>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Website redesign</Popover.Title>
          <Popover.CloseTrigger />
        </Popover.Header>
        <Popover.Body>
          <Text size="6">The next milestone is ready for team review.</Text>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
}
