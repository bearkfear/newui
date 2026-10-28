import { Button } from "../../../actions/button/button";
import { Collapsible } from "../collapsible";

export function CustomCollapsible() {
  return (
    <Collapsible.Root variant="soft">
      <div style={{ padding: "16px" }}>
        <Collapsible.Trigger
          asChild={(props) => (
            <Button {...props()} variant="outline" tone="neutral">
              Release notes
              <Collapsible.Indicator />
            </Button>
          )}
        />
      </div>
      <Collapsible.Content>
        <p>
          Compose a trigger from an existing Button while Ark preserves its disclosure behavior.
        </p>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
