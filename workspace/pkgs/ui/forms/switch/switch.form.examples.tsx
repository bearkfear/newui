import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Switch } from "./switch";

export function SwitchFormExample() {
  const [result, setResult] = createSignal("Submit to inspect native form values.");
  const [cancelReset, setCancelReset] = createSignal(false);
  const [controlled, setControlled] = createSignal(true);
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
        <Switch.Root name="audit" value="enabled">
          <Switch.Control />
          <Switch.Label>Audit logging (required)</Switch.Label>
        </Switch.Root>
        <Field.Description>
          Enable this switch to pass native required validation.
        </Field.Description>
      </Field.Root>
      <Switch.Root name="notifications" value="enabled" defaultChecked>
        <Switch.Control />
        <Switch.Label>Notifications</Switch.Label>
      </Switch.Root>
      <Switch.Root
        name="controlled"
        checked={controlled()}
        onCheckedChange={(details) => setControlled(details.checked)}
      >
        <Switch.Control />
        <Switch.Label>Controlled selection</Switch.Label>
      </Switch.Root>
      <Switch.Root name="readonly" readOnly defaultChecked>
        <Switch.Control />
        <Switch.Label>Readonly selection is submitted</Switch.Label>
      </Switch.Root>
      <fieldset disabled>
        <legend>Native disabled fieldset</legend>
        <Switch.Root name="excluded" defaultChecked>
          <Switch.Control />
          <Switch.Label>Excluded from submission</Switch.Label>
        </Switch.Root>
      </fieldset>
      <Switch.Root
        checked={cancelReset()}
        onCheckedChange={(details) => setCancelReset(details.checked)}
      >
        <Switch.Control />
        <Switch.Label>Cancel reset</Switch.Label>
      </Switch.Root>
      <p class="text-fields-demo-status">
        Reset restores uncontrolled defaults. Controlled selection stays application-owned.
      </p>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect form data</Button>
        <Button type="reset" variant="outline">
          Reset defaults
        </Button>
        <Button type="button" variant="outline" onClick={() => setControlled(true)}>
          Restore controlled value
        </Button>
      </div>
      <pre class="text-fields-demo-code" role="status">
        {result()}
      </pre>
    </form>
  );
}
