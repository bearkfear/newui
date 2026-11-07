import { splitProps, untrack } from "solid-js";
import { Input } from "../input/input";
import { useTextControl } from "../text-control.context";
import { createNumberInput } from "./create-number-input";
import type { NumberInputBehavior } from "./number-input.behavior";
import { forwardNumberInputEvent, numberBeforeInput, numberKeyDown } from "./number-input.events";
import type { NumberInputProps } from "./number-input.types";

const decimalInputProps = [
  "locale",
  "useGrouping",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "maximumIntegerDigits",
  "allowNegative",
  "min",
  "max",
  "value",
  "defaultValue",
  "onValueChange",
  "submitValue",
  "textAlign",
  "inputmode",
  "name",
  "ref",
  "invalid",
  "onKeyDown",
  "onBeforeInput",
  "onPaste",
] as const;

export function renderDecimalInput(props: NumberInputProps, behavior: NumberInputBehavior = {}) {
  const [local, rest] = splitProps(props, decimalInputProps);
  const number = createNumberInput(local, behavior);
  const control = useTextControl(props);
  const initialDisplay = untrack(() => number.initialDisplay);
  return (
    <>
      <Input
        {...rest}
        type="text"
        onKeyDown={(event) => numberKeyDown(local.onKeyDown, number.toggleSign)(event)}
        onBeforeInput={(event) => numberBeforeInput(local.onBeforeInput, number.toggleSign)(event)}
        onPaste={(event) => {
          forwardNumberInputEvent(local.onPaste, event);
          if (!event.defaultPrevented) number.paste(event);
        }}
        inputmode={local.inputmode ?? (local.maximumFractionDigits === 0 ? "numeric" : "decimal")}
        name={local.submitValue === "raw" ? undefined : local.name}
        data-number-input=""
        data-number-align={local.textAlign ?? "right"}
        invalid={control.invalid() || number.details().status === "invalid"}
        value={initialDisplay}
        ref={(element) => {
          element.defaultValue = initialDisplay;
          number.attach(element);
          if (typeof local.ref === "function") local.ref(element);
        }}
      />
      {local.submitValue === "raw" && (
        <input
          type="hidden"
          name={local.name}
          form={props.form}
          disabled={control.disabled()}
          value={number.details().rawValue}
        />
      )}
    </>
  );
}
