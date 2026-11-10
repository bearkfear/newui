import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Switch } from "../switch/switch";
import { FileInputExample } from "./file-input.examples";

export function FileInputFormExample() {
  const [result, setResult] = createSignal("Choose files and inspect the native FormData.");
  const [cancelReset, setCancelReset] = createSignal(false);
  const file = new File(["Initial contents"], "initial-attachment.txt", { type: "text/plain" });
  return (
    <form
      class="text-fields-demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(
          JSON.stringify(
            Array.from(new FormData(event.currentTarget).entries()).map(([name, value]) => ({
              name,
              value: describeFormValue(value),
            })),
            null,
            2,
          ),
        );
      }}
      onReset={(event) => {
        if (cancelReset()) event.preventDefault();
      }}
    >
      <Field.Root required>
        <Field.Label>
          Required attachment <Field.RequiredIndicator />
        </Field.Label>
        <FileInputExample name="attachment" variant="compact" />
        <Field.Description>
          Choose a file, reopen and cancel the picker, or try a rejected type below; then inspect
          submission.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Text files (multiple, maximum 2)</Field.Label>
        <FileInputExample
          name="documents"
          variant="compact"
          multiple
          maxFiles={2}
          accept={{ "text/plain": [".txt"] }}
          defaultAcceptedFiles={[file]}
        />
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Readonly included</Field.Label>
        <FileInputExample name="readonly" variant="compact" defaultAcceptedFiles={[file]} />
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>Disabled excluded</Field.Label>
        <FileInputExample name="disabled" variant="compact" defaultAcceptedFiles={[file]} />
      </Field.Root>
      <fieldset disabled>
        <legend>Native disabled fieldset</legend>
        <FileInputExample name="fieldset" variant="compact" defaultAcceptedFiles={[file]} />
      </fieldset>
      <Switch.Root
        checked={cancelReset()}
        onCheckedChange={(details) => setCancelReset(details.checked)}
      >
        <Switch.Control />
        <Switch.Label>Cancel reset</Switch.Label>
      </Switch.Root>
      <p class="text-fields-demo-status">
        Reset restores initial uncontrolled files. Canceling reset preserves the current selection.
        Files are never sent to a server by this demo.
      </p>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect FormData</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
      <pre class="text-fields-demo-code" role="status">
        {result()}
      </pre>
    </form>
  );
}

function describeFormValue(value: unknown) {
  return value instanceof File ? { name: value.name, size: value.size, type: value.type } : value;
}
