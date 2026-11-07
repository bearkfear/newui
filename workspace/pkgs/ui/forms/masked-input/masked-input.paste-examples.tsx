import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import type { InputMaskValueDetails } from "./input-mask.types";
import { MaskedInput } from "./masked-input";

const pasteSamples = [
  { label: "Copy 10,000 digits", value: "1234567890".repeat(1000) },
  {
    label: "Copy long text with document",
    value: `${"text without digits ".repeat(500)}987.654.321-00`,
  },
  { label: "Copy mixed Unicode", value: "😃\n １２３٤٥٦ abc \t123.456.789-00" },
  { label: "Copy excess digits", value: "222333444555" },
];

function ClipboardSamples() {
  const [status, setStatus] = createSignal("Copy a sample, focus the document field, and paste.");
  return (
    <div class="text-fields-demo-stack">
      <div class="text-fields-demo-row">
        <For each={pasteSamples}>
          {(sample) => (
            <Button
              variant="outline"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(sample.value);
                  setStatus(
                    `Copied ${sample.value.length} characters. Focus the document field and paste.`,
                  );
                } catch {
                  setStatus(
                    "Clipboard access was unavailable. Copy your own text and paste into the field.",
                  );
                }
              }}
            >
              {sample.label}
            </Button>
          )}
        </For>
      </div>
      <p class="text-fields-demo-status" role="status">
        {status()}
      </p>
    </div>
  );
}

export function PasteAndHistoryExample() {
  const [details, setDetails] = createSignal<InputMaskValueDetails>();
  const [readOnly, setReadOnly] = createSignal(false);
  return (
    <form class="text-fields-demo-stack" onSubmit={(event) => event.preventDefault()}>
      <ClipboardSamples />
      <Field.Root>
        <Field.Label>Document paste playground</Field.Label>
        <MaskedInput
          mask="###.###.###-##"
          onValueChange={setDetails}
          inputmode="numeric"
          readOnly={readOnly()}
        />
        <Field.Description>
          Select all to replace the value, or select only a middle group before pasting excess
          digits. Full fields preserve their suffix instead of inserting beyond capacity. Try
          undo/redo. After Reset, undo must not restore an earlier value.
        </Field.Description>
      </Field.Root>
      <Button type="reset">Reset and clear history</Button>
      <Button variant="outline" aria-pressed={readOnly()} onClick={() => setReadOnly(!readOnly())}>
        {readOnly() ? "Allow editing" : "Make readonly"}
      </Button>
      <pre class="text-fields-demo-code" aria-live="polite">
        {details() ? JSON.stringify(details(), null, 2) : "Paste to inspect the accepted values."}
      </pre>
      <Field.Root>
        <Field.Label>Oversized initial value</Field.Label>
        <MaskedInput mask="###.###.###-##" defaultValue="12345678900123456789" />
        <Field.Description>
          The initial raw string has 20 digits. Only the first 11 fit: 123.456.789-00. The
          application remains responsible for validating source data before formatting.
        </Field.Description>
      </Field.Root>
    </form>
  );
}
