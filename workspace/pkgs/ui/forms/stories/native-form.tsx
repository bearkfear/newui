import { createSignal } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";
import { Textarea } from "../textarea/textarea";

export function NativeTextForm() {
  const [result, setResult] = createSignal("Submit to inspect native FormData.");
  return (
    <form
      class="text-fields-demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget)), null, 2));
      }}
      onReset={() => setResult("Native defaults restored.")}
    >
      <Field.Root required>
        <Field.Label>
          Project name
          <Field.RequiredIndicator />
        </Field.Label>
        <Input name="project" defaultValue="Website redesign" />
      </Field.Root>
      <Field.Root>
        <Field.Label>Brief</Field.Label>
        <Textarea name="brief" rows={3} defaultValue="A clearer first impression." />
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Workspace identifier</Field.Label>
        <Input name="workspace" defaultValue="FORMA-2026" />
        <Field.Description>Readonly values are included in FormData.</Field.Description>
      </Field.Root>
      <fieldset disabled>
        <legend>Managed by your organization</legend>
        <Field.Root>
          <Field.Label>Billing email</Field.Label>
          <Input name="billing" type="email" defaultValue="billing@forma.studio" />
          <Field.Description>
            A native disabled fieldset excludes its controls from submission.
          </Field.Description>
        </Field.Root>
      </fieldset>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect form data</Button>
        <Button variant="outline" type="reset">
          Reset defaults
        </Button>
      </div>
      <pre class="text-fields-demo-code" role="status">
        {result()}
      </pre>
    </form>
  );
}

export function HorizontalFields() {
  return (
    <div class="text-fields-demo-stack">
      <Field.Root orientation="horizontal" readOnly>
        <Field.Label>From</Field.Label>
        <Field.Content>
          <Input readOnly name="sender" defaultValue="hello@forma.studio" />
        </Field.Content>
      </Field.Root>
      <Field.Root orientation="horizontal" required>
        <Field.Label>
          Recipient
          <Field.RequiredIndicator />
        </Field.Label>
        <Field.Content>
          <Input name="recipient" type="email" placeholder="you@example.com" />
          <Field.Description>
            The label aligns with the control and moves above it on mobile.
          </Field.Description>
        </Field.Content>
      </Field.Root>
      <Field.Root orientation="horizontal">
        <Field.Label>Message</Field.Label>
        <Field.Content>
          <Textarea name="message" rows={3} placeholder="What would you like to share?" />
        </Field.Content>
      </Field.Root>
    </div>
  );
}
