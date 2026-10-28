import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Text } from "../../text/text";
import { Accordion } from "../accordion";

export function ControlledAccordion() {
  const [value, setValue] = createSignal<string[]>(["details"]);
  return (
    <div style={{ display: "grid", gap: "16px" }}>
      <div>
        <Button variant="outline" onClick={() => setValue(value().length ? [] : ["details"])}>
          Toggle from application
        </Button>
      </div>
      <Accordion.Root value={value()} onValueChange={(details) => setValue(details.value)}>
        <Accordion.Item value="details">
          <Accordion.ItemHeading>
            <Accordion.ItemTrigger>
              Project details
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeading>
          <Accordion.ItemContent>
            <p>The application owns the expanded item values.</p>
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="activity">
          <Accordion.ItemHeading>
            <Accordion.ItemTrigger>
              Recent activity
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeading>
          <Accordion.ItemContent>
            <p>The team reviewed the latest milestone.</p>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
      <Text size="7" tone="muted">
        Expanded: {value().join(", ") || "none"}.
      </Text>
    </div>
  );
}
