import { createSignal, For } from "solid-js";
import { Field } from "../field/field";
import { createListCollection, Select } from "./index";
import type { SelectRootProps } from "./select.root";

export const countries = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Argentina", value: "ar" },
    { label: "Chile", value: "cl" },
    { label: "Uruguay", value: "uy" },
    { label: "Paraguay (unavailable)", value: "py", disabled: true },
  ],
});

export function CountryOptions() {
  return (
    <For each={countries.items}>
      {(item) => (
        <Select.Item item={item}>
          <Select.ItemText>{item.label}</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
      )}
    </For>
  );
}

export function CountryTrigger() {
  return (
    <Select.Trigger>
      <Select.ValueText placeholder="Select a country…" />
      <Select.Indicator />
    </Select.Trigger>
  );
}

export type SelectExampleProps = Omit<
  SelectRootProps<(typeof countries.items)[number]>,
  "collection"
>;

export function SelectExample(props: SelectExampleProps) {
  return (
    <Field.Root>
      <Field.Label>Country</Field.Label>
      <Select.Root {...props} collection={countries}>
        <CountryTrigger />
        <Select.Content>
          <CountryOptions />
        </Select.Content>
      </Select.Root>
      <Field.Description>Choose a destination for your next project.</Field.Description>
    </Field.Root>
  );
}

export function ControlledSelectExample() {
  const [value, setValue] = createSignal(["br"]);
  return (
    <div class="text-fields-demo-stack">
      <SelectExample value={value()} onValueChange={(details) => setValue(details.value)} />
      <output class="text-fields-demo-code">{JSON.stringify(value())}</output>
      <button type="button" onClick={() => setValue(["cl"])}>
        Choose Chile externally
      </button>
    </div>
  );
}

export function MultipleSelectExample() {
  const [value, setValue] = createSignal(["br", "ar"]);
  return (
    <Field.Root>
      <Field.Label>Destinations</Field.Label>
      <Select.Root
        collection={countries}
        multiple
        closeOnSelect={false}
        value={value()}
        onValueChange={(details) => setValue(details.value)}
      >
        <Select.Control>
          <CountryTrigger />
          <Select.ClearTrigger />
        </Select.Control>
        <Select.Content>
          <CountryOptions />
        </Select.Content>
      </Select.Root>
      <Field.Description>Choose several countries. Clear removes all selections.</Field.Description>
      <output class="text-fields-demo-code">{JSON.stringify(value())}</output>
    </Field.Root>
  );
}
