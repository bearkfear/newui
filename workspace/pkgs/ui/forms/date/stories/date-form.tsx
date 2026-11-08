import { createSignal } from "solid-js";
import { Button } from "../../../actions/button/button";
import type { DateSelection } from "../date.types";
import { parseDate } from "../date.value";
import { DateDemo } from "./date-demo";

export function DateFormExample() {
  const [cancel, setCancel] = createSignal(false);
  const [result, setResult] = createSignal(
    "Submit to inspect ISO FormData. Reset keeps controlled state.",
  );
  const [controlled, setControlled] = createSignal<DateSelection>([parseDate("2028-07-04")]);
  return (
    <form
      class="date-demo-stack"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(JSON.stringify(Object.fromEntries(new FormData(event.currentTarget)), null, 2));
      }}
      onReset={(event) => {
        if (cancel()) event.preventDefault();
      }}
    >
      <DateDemo
        kind="input"
        locale="pt-BR"
        name="birthday"
        label="Uncontrolled birthday"
        required
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo
        locale="en-US"
        name="appointment"
        label="Controlled appointment"
        value={controlled()}
        onValueChange={(details) => setControlled(details.value)}
      />
      <DateDemo
        kind="range"
        locale="pt-BR"
        name="trip"
        label="Uncontrolled trip"
        required
        defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
      />
      <DateDemo
        name="readonly"
        label="Read only is submitted"
        readOnly
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo
        name="disabled"
        label="Disabled is omitted"
        disabled
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateFormActions cancel={cancel()} onCancelChange={setCancel} result={result()} />
    </form>
  );
}

function DateFormActions(props: {
  cancel: boolean;
  onCancelChange: (value: boolean) => void;
  result: string;
}) {
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={props.cancel}
          onChange={(event) => props.onCancelChange(event.currentTarget.checked)}
        />{" "}
        Cancel native reset
      </label>
      <div class="date-demo-actions">
        <Button type="submit">Inspect FormData</Button>
        <Button type="reset" variant="outline">
          Reset
        </Button>
      </div>
      <pre class="text-fields-demo-code" aria-live="polite">
        {props.result}
      </pre>
    </>
  );
}
