import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { MaskedInput } from "./masked-input";

export function MaskSubmissionExample() {
  const [result, setResult] = createSignal("Submit to inspect native FormData.");
  const [disabled, setDisabled] = createSignal(false);
  const [cancelReset, setCancelReset] = createSignal(false);
  return (
    <form
      class="text-fields-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(JSON.stringify([...new FormData(event.currentTarget).entries()], null, 2));
      }}
      onReset={(event) => {
        if (cancelReset()) event.preventDefault();
        setResult(cancelReset() ? "Reset canceled; values are preserved." : "Values reset.");
      }}
    >
      <Field.Root>
        <Field.Label>Postal code: formatted submission</Field.Label>
        <MaskedInput
          name="formatted"
          mask="#####-###"
          defaultValue="12345678"
          inputmode="numeric"
        />
      </Field.Root>
      <Field.Root disabled={disabled()}>
        <Field.Label>Postal code: raw submission</Field.Label>
        <MaskedInput
          name="raw"
          mask="#####-###"
          defaultValue="12345678"
          submitValue="raw"
          inputmode="numeric"
        />
        <Field.Description>
          Both fields show punctuation. This one submits digits using one named hidden input.
          Disabling the field excludes its raw value from submission.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect submission</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button aria-pressed={disabled()} onClick={() => setDisabled(!disabled())}>
          Toggle disabled
        </Button>
        <Button aria-pressed={cancelReset()} onClick={() => setCancelReset(!cancelReset())}>
          Toggle reset cancellation
        </Button>
      </div>
      <pre class="text-fields-demo-code" aria-live="polite">
        {result()}
      </pre>
    </form>
  );
}

export function MaskStateExamples() {
  return (
    <div class="text-fields-demo-stack">
      <MaskedInput aria-label="Standalone code" mask="AA-####" placeholder="AB-1234" />
      <Field.Root invalid>
        <Field.Label>Incomplete document</Field.Label>
        <MaskedInput mask="###.###.###-##" defaultValue="12345" />
        <Field.ErrorText>
          The application decides whether an incomplete value is invalid.
        </Field.ErrorText>
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Readonly document</Field.Label>
        <MaskedInput mask="###.###.###-##" defaultValue="12345678900" submitValue="raw" />
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>Disabled document</Field.Label>
        <MaskedInput mask="###.###.###-##" defaultValue="12345678900" />
      </Field.Root>
    </div>
  );
}
