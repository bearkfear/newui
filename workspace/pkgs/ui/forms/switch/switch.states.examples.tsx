import { For } from "solid-js";
import { Field } from "../field/field";
import { Switch } from "./switch";
import { SwitchExample } from "./switch.examples";

export function SwitchStatesExample() {
  return (
    <div class="text-fields-demo-stack">
      <For each={[false, true]}>
        {(checked) => (
          <div class="text-fields-demo-row">
            <SwitchExample disabled defaultChecked={checked} />
            <SwitchExample readOnly defaultChecked={checked} />
          </div>
        )}
      </For>
      <Field.Root invalid required>
        <Switch.Root>
          <Switch.Control />
          <Switch.Label>Enable audit logging</Switch.Label>
        </Switch.Root>
        <Field.Description>Keep an audit trail of changes.</Field.Description>
        <Field.ErrorText>Audit logging is required for this workspace.</Field.ErrorText>
      </Field.Root>
      <Field.Root valid size="lg">
        <Switch.Root defaultChecked>
          <Switch.Control />
          <Switch.Label>Automatic backups</Switch.Label>
        </Switch.Root>
        <Field.SuccessText>Backup preferences are valid.</Field.SuccessText>
      </Field.Root>
      <Field.Root invalid disabled>
        <Switch.Root defaultChecked disabled={false} invalid={false}>
          <Switch.Control />
          <Switch.Label>Inherited disabled and invalid states</Switch.Label>
        </Switch.Root>
        <Field.ErrorText>This setting cannot be edited.</Field.ErrorText>
      </Field.Root>
      <Switch.Root aria-label="Compact notifications toggle">
        <Switch.Control />
      </Switch.Root>
    </div>
  );
}

export function SwitchSettingsExample() {
  return (
    <section class="switch-demo-settings" aria-label="Workspace preferences">
      <header>
        <h2>Workspace preferences</h2>
        <p>Manage how your workspace keeps you informed.</p>
      </header>
      <Field.Root>
        <Switch.Root defaultChecked labelPosition="start" class="switch-demo-setting">
          <Switch.Control />
          <Switch.Label>Product updates</Switch.Label>
        </Switch.Root>
        <Field.Description>Get a summary of new features and improvements.</Field.Description>
      </Field.Root>
      <Field.Root>
        <Switch.Root labelPosition="start" variant="outline" class="switch-demo-setting">
          <Switch.Control />
          <Switch.Label>Weekly activity report</Switch.Label>
        </Switch.Root>
        <Field.Description>
          A weekly email with activity across all your projects.
        </Field.Description>
      </Field.Root>
      <Field.Root readOnly>
        <Switch.Root defaultChecked labelPosition="start" class="switch-demo-setting">
          <Switch.Control />
          <Switch.Label>Security alerts</Switch.Label>
        </Switch.Root>
        <Field.Description>Managed by your workspace administrator.</Field.Description>
      </Field.Root>
    </section>
  );
}
