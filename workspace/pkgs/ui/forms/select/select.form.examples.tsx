import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Select } from "./index";
import { CountryOptions, CountryTrigger, countries } from "./select.examples";

export function SelectFormExample() {
  const [result, setResult] = createSignal("Submit to inspect selected values.");
  const [cancelReset, setCancelReset] = createSignal(false);
  return (
    <form
      class="text-fields-demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(JSON.stringify(Array.from(new FormData(event.currentTarget).entries()), null, 2));
      }}
      onReset={(event) => {
        if (cancelReset()) event.preventDefault();
      }}
    >
      <Field.Root required>
        <Field.Label>
          Primary destination <Field.RequiredIndicator />
        </Field.Label>
        <Select.Root collection={countries} name="country" defaultValue={["br"]}>
          <Select.Control>
            <CountryTrigger />
            <Select.ClearTrigger />
          </Select.Control>
          <Select.Content>
            <CountryOptions />
          </Select.Content>
        </Select.Root>
        <Field.Description>
          Clear and submit to review native required validation.
        </Field.Description>
      </Field.Root>
      <Field.Root>
        <Field.Label>Other destinations</Field.Label>
        <Select.Root
          collection={countries}
          name="destinations"
          multiple
          closeOnSelect={false}
          defaultValue={["ar", "cl"]}
        >
          <CountryTrigger />
          <Select.Content>
            <CountryOptions />
          </Select.Content>
        </Select.Root>
      </Field.Root>
      <label>
        <input
          type="checkbox"
          checked={cancelReset()}
          onChange={(event) => setCancelReset(event.currentTarget.checked)}
        />{" "}
        Cancel reset
      </label>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect form data</Button>
        <Button type="reset" variant="outline">
          Reset defaults
        </Button>
      </div>
      <pre class="text-fields-demo-code" role="status">
        {result()}
      </pre>
    </form>
  );
}
