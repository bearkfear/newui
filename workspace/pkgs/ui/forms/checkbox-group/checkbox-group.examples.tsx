import { createSignal, For } from "solid-js";
import { Checkbox } from "../checkbox/checkbox";
import { Field } from "../field/field";
import { CheckboxGroup, type CheckboxGroupRootProps } from "./checkbox-group";

export const channels = ["Email", "SMS", "Push"];

export function ChannelOptions() {
  return (
    <For each={channels}>
      {(channel) => (
        <Checkbox.Root value={channel}>
          <Checkbox.Control />
          <Checkbox.Label>{channel}</Checkbox.Label>
        </Checkbox.Root>
      )}
    </For>
  );
}

export function CheckboxGroupExample(props: CheckboxGroupRootProps) {
  return (
    <CheckboxGroup.Root {...props}>
      <CheckboxGroup.Label>Notification channels</CheckboxGroup.Label>
      <ChannelOptions />
    </CheckboxGroup.Root>
  );
}

export function SelectAllExample() {
  const [value, setValue] = createSignal(["Email"]);
  const checked = () =>
    value().length === channels.length
      ? true
      : value().length > 0
        ? ("indeterminate" as const)
        : false;
  return (
    <div class="text-fields-demo-stack">
      <Checkbox.Root
        checked={checked()}
        onCheckedChange={(details) => setValue(details.checked === true ? [...channels] : [])}
      >
        <Checkbox.Control />
        <Checkbox.Label>Select all channels</Checkbox.Label>
      </Checkbox.Root>
      <CheckboxGroupExample value={value()} onValueChange={setValue} />
      <output class="text-fields-demo-code">{JSON.stringify(value())}</output>
    </div>
  );
}

export function CheckboxGroupValidationExample() {
  const [value, setValue] = createSignal<string[]>([]);
  return (
    <Field.Root invalid={value().length === 0}>
      <Field.Label asChild={(props) => <span {...props()} />}>Notification channels</Field.Label>
      <CheckboxGroup.Root value={value()} onValueChange={setValue}>
        <ChannelOptions />
      </CheckboxGroup.Root>
      <Field.Description>Select at least one channel.</Field.Description>
      <Field.ErrorText>Select at least one notification channel.</Field.ErrorText>
    </Field.Root>
  );
}

export function CheckboxGroupStatesExample() {
  return (
    <div class="text-fields-demo-stack">
      <CheckboxGroupExample disabled defaultValue={["Email"]} />
      <CheckboxGroupExample readOnly defaultValue={["SMS"]} />
      <CheckboxGroupExample maxSelectedValues={2} defaultValue={["Email", "SMS"]} />
      <CheckboxGroup.Root aria-label="Availability">
        <Checkbox.Root value="available">
          <Checkbox.Control />
          <Checkbox.Label>Available option</Checkbox.Label>
        </Checkbox.Root>
        <Checkbox.Root value="unavailable" disabled>
          <Checkbox.Control />
          <Checkbox.Label>Unavailable option</Checkbox.Label>
        </Checkbox.Root>
      </CheckboxGroup.Root>
    </div>
  );
}
