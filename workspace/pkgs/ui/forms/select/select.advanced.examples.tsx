import { For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Dialog } from "../../overlays/dialog/dialog";
import { createListCollection, Select } from "./index";
import { SelectExample } from "./select.examples";

const tools = createListCollection({
  items: [
    { label: "Solid", value: "solid", group: "Frameworks" },
    { label: "Vue", value: "vue", group: "Frameworks" },
    { label: "Bun", value: "bun", group: "Runtimes" },
    { label: "Node.js", value: "node", group: "Runtimes" },
  ],
});

export function GroupedSelectExample() {
  return (
    <Select.Root collection={tools}>
      <Select.Label>Development tool</Select.Label>
      <Select.Trigger>
        <Select.ValueText placeholder="Choose a tool…" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Content>
        <For each={["Frameworks", "Runtimes"]}>
          {(group) => (
            <Select.Group id={group}>
              <Select.GroupLabel>{group}</Select.GroupLabel>
              <For each={tools.items.filter((item) => item.group === group)}>
                {(item) => (
                  <Select.Item item={item}>
                    <Select.ItemText>{item.label}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                )}
              </For>
            </Select.Group>
          )}
        </For>
      </Select.Content>
    </Select.Root>
  );
}

const timezones = createListCollection({ items: Intl.supportedValuesOf("timeZone") });

export function ScrollableSelectExample() {
  return (
    <Select.Root collection={timezones} defaultValue={["America/Sao_Paulo"]}>
      <Select.Label>Time zone</Select.Label>
      <Select.Trigger>
        <Select.ValueText placeholder="Choose a time zone…" />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Content>
        <For each={timezones.items}>
          {(item) => (
            <Select.Item item={item}>
              <Select.ItemText>{item}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          )}
        </For>
      </Select.Content>
    </Select.Root>
  );
}

export function SelectDialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Choose destination</Button>} />
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Project destination</Dialog.Title>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <SelectExample />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>Done</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
