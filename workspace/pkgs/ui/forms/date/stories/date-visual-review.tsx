import { Field } from "../../field/field";
import { Input } from "../../input/input";
import { parseDate } from "../date.value";
import { DateDemo } from "./date-demo";

export function DateVisualReview(props: { locale: string }) {
  return (
    <div class="date-demo-stack">
      <p>
        Compare the date family with the standard Input. Open the calendars and resize the canvas.
      </p>
      <Field.Root class="date-demo-field">
        <Field.Label>Input reference</Field.Label>
        <Input defaultValue="Conference registration" />
      </Field.Root>
      <DateDemo
        kind="input"
        label="DateInput"
        locale={props.locale}
        defaultValue={[parseDate("2028-02-29")]}
      />
      <DateDemo label="DatePicker" locale={props.locale} defaultValue={[parseDate("2028-02-29")]} />
      <DateDemo
        kind="range"
        label="DateRangePicker"
        locale={props.locale}
        defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
        numOfMonths={2}
      />
    </div>
  );
}
