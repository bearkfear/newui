import { Show, splitProps } from "solid-js";
import { DateInput } from "../../date-input/date-input";
import { DatePicker } from "../../date-picker/date-picker";
import type { DatePickerRootProps } from "../../date-picker/date-picker.types";
import { DateRangePicker } from "../../date-range-picker/date-range-picker";
import { Field } from "../../field/field";

export type DateDemoKind = "input" | "picker" | "range";
export type DateDemoProps = DatePickerRootProps & {
  kind?: DateDemoKind;
  label?: string;
  description?: string;
};

export function DateDemo(props: DateDemoProps) {
  return (
    <Field.Root
      class="date-demo-field"
      data-kind={props.kind ?? "picker"}
      size={props.size ?? "md"}
      tone={props.tone ?? "neutral"}
      valid={props.valid ?? false}
      invalid={props.invalid ?? false}
      disabled={props.disabled ?? false}
      readOnly={props.readOnly ?? false}
      required={props.required ?? false}
    >
      <Field.Label>
        {props.label ?? "Travel date"}
        <Field.RequiredIndicator />
      </Field.Label>
      <DateDemoControl {...props} />
      <Field.Description>
        {props.description ??
          "Edit each segment with digits or arrow keys. Tab moves between segments."}
      </Field.Description>
      <Field.ErrorText>Choose a valid, available date.</Field.ErrorText>
      <Field.SuccessText>Date confirmed.</Field.SuccessText>
    </Field.Root>
  );
}

function DateDemoControl(props: DateDemoProps) {
  const [, rootProps] = splitProps(props, ["kind", "label", "description"]);
  const Root =
    props.kind === "range"
      ? DateRangePicker.Root
      : props.kind === "input"
        ? DateInput.Root
        : DatePicker.Root;
  return (
    <Root {...rootProps}>
      <Show when={props.kind !== "input"} fallback={<DateInput.Control />}>
        <DatePicker.Control>
          <DatePicker.Input index={0} />
          <Show when={props.kind === "range"}>
            <DatePicker.Input index={1} />
          </Show>
          <DatePicker.Trigger />
          <DatePicker.ClearTrigger />
        </DatePicker.Control>
        <DatePicker.Content />
      </Show>
    </Root>
  );
}
