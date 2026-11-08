import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Checkbox } from "../checkbox/checkbox";
import { CheckboxGroup } from "../checkbox-group/checkbox-group";
import { ChannelOptions } from "../checkbox-group/checkbox-group.examples";
import { Field } from "../field/field";
import { RadioGroup } from "../radio-group/radio-group";
import { PlanOptions } from "../radio-group/radio-group.examples";

export function ChoiceFormExample() {
  const [result, setResult] = createSignal("Submit to inspect form values.");
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
        <Checkbox.Root name="terms" value="accepted">
          <Checkbox.Control />
          <Checkbox.Label>Accept the terms (required)</Checkbox.Label>
        </Checkbox.Root>
        <Field.Description>Native validation requires this checkbox.</Field.Description>
      </Field.Root>
      <CheckboxGroup.Root name="channels" defaultValue={["Email"]}>
        <CheckboxGroup.Label>Notification channels</CheckboxGroup.Label>
        <ChannelOptions />
      </CheckboxGroup.Root>
      <Field.Root required>
        <Field.Label asChild={(props) => <span {...props()} />}>
          Workspace plan (required)
        </Field.Label>
        <RadioGroup.Root name="plan" defaultValue="Personal">
          <PlanOptions />
        </RadioGroup.Root>
      </Field.Root>
      <Checkbox.Root name="readonly" readOnly defaultChecked>
        <Checkbox.Control />
        <Checkbox.Label>Readonly values are submitted</Checkbox.Label>
      </Checkbox.Root>
      <fieldset disabled>
        <legend>Disabled by native fieldset</legend>
        <Checkbox.Root name="excluded" defaultChecked>
          <Checkbox.Control />
          <Checkbox.Label>Excluded from submission</Checkbox.Label>
        </Checkbox.Root>
      </fieldset>
      <Checkbox.Root
        checked={cancelReset()}
        onCheckedChange={(details) => setCancelReset(details.checked === true)}
      >
        <Checkbox.Control />
        <Checkbox.Label>Cancel reset</Checkbox.Label>
      </Checkbox.Root>
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
