import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { InputGroup } from "../input-group/input-group";
import { NumberInput } from "./number-input";

export function NumberSubmissionExample() {
  const [submitted, setSubmitted] = createSignal<Record<string, FormDataEntryValue>>();
  return (
    <form
      class="text-fields-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(Object.fromEntries(new FormData(event.currentTarget)));
      }}
    >
      <Field.Root>
        <Field.Label>Raw submission</Field.Label>
        <NumberInput
          name="canonical"
          locale="pt-BR"
          submitValue="raw"
          defaultValue="1234.5"
          minimumFractionDigits={2}
          min="-2000"
          max="2000"
          required
        />
        <Field.Description>
          Submits 1234.5. Allowed range: −2000 to 2000. Outside values remain editable and fail
          native validation.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Formatted submission</Field.Label>
        <NumberInput
          name="formatted"
          locale="pt-BR"
          defaultValue="1234.5"
          minimumFractionDigits={2}
        />
        <Field.Description>Submits 1.234,50. Reset restores both initial values.</Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect FormData</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
      <pre class="text-fields-demo-code">{JSON.stringify(submitted() ?? {}, null, 2)}</pre>
    </form>
  );
}

export function NumberStateExamples() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root disabled>
        <Field.Label>Inherited disabled state</Field.Label>
        <InputGroup.Root>
          <InputGroup.Addon>Qty</InputGroup.Addon>
          <NumberInput defaultValue="1234.5" />
        </InputGroup.Root>
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Inherited readonly state</Field.Label>
        <NumberInput defaultValue="1234.5" />
      </Field.Root>
      <Field.Root invalid>
        <Field.Label>Invalid</Field.Label>
        <NumberInput defaultValue="1234.5" />
        <Field.ErrorText>Review this quantity.</Field.ErrorText>
      </Field.Root>
      <Field.Root>
        <Field.Label>Left alignment, small and rounded</Field.Label>
        <NumberInput textAlign="left" size="sm" rounded defaultValue="1234.5" />
      </Field.Root>
    </div>
  );
}
