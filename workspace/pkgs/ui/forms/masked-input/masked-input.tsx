import { splitProps, untrack } from "solid-js";
import { Input, type InputProps } from "../input/input";
import { useTextControl } from "../text-control.context";
import { createInputMask } from "./create-input-mask";
import type { InputMaskOptions } from "./input-mask.types";

export type MaskedInputProps = Omit<InputProps, "value" | "defaultValue" | "type"> &
  InputMaskOptions & {
    type?: "text" | "tel";
    /** Native forms submit displayed text unless raw submission is explicitly selected. */
    submitValue?: "formatted" | "raw";
  };

export function MaskedInput(props: MaskedInputProps) {
  const [local, rest] = splitProps(props, [
    "mask",
    "tokens",
    "value",
    "defaultValue",
    "onValueChange",
    "submitValue",
    "name",
    "ref",
  ]);
  const mask = createInputMask(local);
  const control = useTextControl(props);
  const initialDisplay = untrack(() => mask.initialDisplay);
  return (
    <>
      <Input
        {...rest}
        name={local.submitValue === "raw" ? undefined : local.name}
        value={initialDisplay}
        ref={(element) => {
          element.defaultValue = initialDisplay;
          mask.attach(element);
          if (typeof local.ref === "function") local.ref(element);
        }}
      />
      {local.submitValue === "raw" && (
        <input
          type="hidden"
          name={local.name}
          form={props.form}
          disabled={control.disabled()}
          value={mask.details().rawValue}
        />
      )}
    </>
  );
}
