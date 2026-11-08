import { For } from "solid-js";
import { Field } from "../field/field";
import type { TextControlOptions } from "../text-control.context";
import { Select } from "./index";
import { CountryOptions, CountryTrigger, countries, SelectExample } from "./select.examples";

const states: { label: string; props: TextControlOptions }[] = [
  { label: "Readonly", props: { readOnly: true } },
  { label: "Disabled", props: { disabled: true } },
  { label: "Loading", props: { loading: true } },
  { label: "Valid", props: { valid: true } },
  { label: "Invalid", props: { invalid: true } },
  { label: "Invalid wins", props: { invalid: true, valid: true } },
];

export function SelectStatesExample() {
  return (
    <div class="text-fields-demo-grid">
      <For each={states}>
        {(state) => (
          <Field.Root {...state.props}>
            <Field.Label>{state.label}</Field.Label>
            <Select.Root
              collection={countries}
              defaultValue={["br"]}
              disabled={false}
              readOnly={false}
            >
              <CountryTrigger />
              <Select.Content>
                <CountryOptions />
              </Select.Content>
            </Select.Root>
            <Field.Description>Inherited from Field.</Field.Description>
            <Field.ErrorText>Choose an available destination.</Field.ErrorText>
            <Field.SuccessText>Destination confirmed.</Field.SuccessText>
          </Field.Root>
        )}
      </For>
    </div>
  );
}

export function SelectSizesExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["sm", "md", "lg"] as const}>{(size) => <SelectExample size={size} />}</For>
      <SelectExample rounded defaultValue={["br"]} />
    </div>
  );
}

export function SelectTonesExample() {
  return (
    <div class="text-fields-demo-grid">
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => <SelectExample tone={tone} defaultValue={["br"]} />}
      </For>
    </div>
  );
}
