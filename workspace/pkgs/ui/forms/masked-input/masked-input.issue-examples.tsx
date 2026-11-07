import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import type { InputMaskTokens, InputMaskValueDetails } from "./input-mask.types";
import { MaskedInput } from "./masked-input";

const prefixTokens = {
  R: { pattern: /R/i, transform: (character) => character.toUpperCase() },
  S: { pattern: /S/i, transform: (character) => character.toUpperCase() },
  O: { pattern: /O/i, transform: (character) => character.toUpperCase() },
} satisfies InputMaskTokens;

export function PrefixMaskExample() {
  const [details, setDetails] = createSignal<InputMaskValueDetails>();
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Reference with alternative prefixes</Field.Label>
        <MaskedInput
          mask={["R ### ### ###", "SO ### ## ##"]}
          tokens={prefixTokens}
          placeholder="R 123 456 789 or SO 123 45 67"
          onValueChange={setDetails}
        />
        <Field.Description>
          Type R or SO, including lowercase. Prefixes here are editable tokens, so they belong to
          the raw value. Clear the field before choosing another prefix.
        </Field.Description>
      </Field.Root>
      <pre class="text-fields-demo-code" aria-live="polite">
        {details()
          ? JSON.stringify(details(), null, 2)
          : "Try both prefixes and paste both formats."}
      </pre>
    </div>
  );
}

export function NativeValidityExample() {
  const [events, setEvents] = createSignal(0);
  const [result, setResult] = createSignal(
    "Submit an empty field, then enter a code and submit again.",
  );
  return (
    <form
      class="text-fields-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setResult("Native validation accepted this value.");
      }}
    >
      <Field.Root required>
        <Field.Label>Required code</Field.Label>
        <MaskedInput
          mask="###-###"
          inputmode="numeric"
          onInvalid={(event) => event.currentTarget.setCustomValidity("Enter a code.")}
          onInput={(event) => {
            event.currentTarget.setCustomValidity("");
            setEvents((count) => count + 1);
          }}
        />
        <Field.Description>
          Native onInput clears custom validity. Formatting must not replace the handler or dispatch
          a duplicate native input event. Completeness is separate from required.
        </Field.Description>
      </Field.Root>
      <Button type="submit">Submit</Button>
      <p class="text-fields-demo-status">Native input events: {events()}</p>
      <p class="text-fields-demo-status" role="status">
        {result()}
      </p>
    </form>
  );
}
