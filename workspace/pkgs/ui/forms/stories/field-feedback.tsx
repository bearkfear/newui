import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { Input } from "../input/input";

export function FieldFeedback() {
  const [state, setState] = createSignal("Neutral");
  return (
    <div class="text-fields-demo-stack">
      <div class="text-fields-demo-row">
        <For each={["Neutral", "Valid", "Invalid"]}>
          {(value) => (
            <Button
              size="sm"
              variant={state() === value ? "solid" : "outline"}
              aria-pressed={state() === value}
              onClick={() => setState(value)}
            >
              {value}
            </Button>
          )}
        </For>
      </div>
      <Field.Root valid={state() === "Valid"} invalid={state() === "Invalid"}>
        <Field.Label>Email</Field.Label>
        <Input type="email" defaultValue="hello@forma.studio" />
        <Field.Description>Used for account notifications.</Field.Description>
        <Field.SuccessText>Email confirmed.</Field.SuccessText>
        <Field.ErrorText>This email is already used by another account.</Field.ErrorText>
      </Field.Root>
    </div>
  );
}
