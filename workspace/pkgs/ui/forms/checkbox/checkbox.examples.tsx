import { createSignal, For } from "solid-js";
import { Field } from "../field/field";
import { Checkbox, type CheckboxRootProps } from "./checkbox";

export function CheckboxExample(props: CheckboxRootProps) {
  return (
    <Field.Root>
      <Checkbox.Root {...props}>
        <Checkbox.Control />
        <Checkbox.Label>Receive product updates</Checkbox.Label>
      </Checkbox.Root>
      <Field.Description>Occasional email about new features.</Field.Description>
    </Field.Root>
  );
}

export function ControlledCheckboxExample() {
  const [checked, setChecked] = createSignal(false);
  return (
    <div class="text-fields-demo-stack">
      <CheckboxExample
        checked={checked()}
        onCheckedChange={(details) => setChecked(details.checked === true)}
      />
      <output class="text-fields-demo-code">Checked: {String(checked())}</output>
      <button type="button" onClick={() => setChecked((value) => !value)}>
        Toggle externally
      </button>
    </div>
  );
}

export function CheckboxStatesExample() {
  return (
    <div class="text-fields-demo-stack">
      <CheckboxExample defaultChecked />
      <CheckboxExample defaultChecked="indeterminate" />
      <CheckboxExample disabled />
      <CheckboxExample disabled defaultChecked />
      <CheckboxExample readOnly defaultChecked />
      <Field.Root invalid>
        <Checkbox.Root>
          <Checkbox.Control />
          <Checkbox.Label>Accept the terms</Checkbox.Label>
        </Checkbox.Root>
        <Field.ErrorText>You must accept the terms to continue.</Field.ErrorText>
      </Field.Root>
      <Field.Root valid>
        <Checkbox.Root defaultChecked>
          <Checkbox.Control />
          <Checkbox.Label>Confirm account ownership</Checkbox.Label>
        </Checkbox.Root>
        <Field.SuccessText>Ownership confirmed.</Field.SuccessText>
      </Field.Root>
    </div>
  );
}

export function CheckboxAppearanceExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={["sm", "md", "lg"] as const}>
        {(size) => (
          <Checkbox.Root size={size} defaultChecked>
            <Checkbox.Control />
            <Checkbox.Label>{size} checkbox</Checkbox.Label>
          </Checkbox.Root>
        )}
      </For>
      <For each={["neutral", "primary", "info", "success", "warning", "danger"] as const}>
        {(tone) => (
          <Checkbox.Root tone={tone} defaultChecked>
            <Checkbox.Control />
            <Checkbox.Label>{tone} tone</Checkbox.Label>
          </Checkbox.Root>
        )}
      </For>
    </div>
  );
}
