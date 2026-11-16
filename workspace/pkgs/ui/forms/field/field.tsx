import { Field as ArkField } from "@ark-ui/solid/field";
import { createSignal, splitProps } from "solid-js";
import type { TextControlOptions } from "../text-control.context";
import { FieldVisualContext } from "../text-control.context";
import {
  FieldContent,
  FieldDescription,
  FieldErrorText,
  FieldLabel,
  FieldRequiredIndicator,
  FieldSuccessText,
} from "./field.parts";

/**
 * Field.Root combines Ark's native field state with shared appearance options. `valid` is explicit
 * application feedback, not inferred validation;
 * `invalid` wins when both flags are true. Ark propagates required, disabled, readonly, and invalid.
 */
export type FieldRootProps = ArkField.RootProps &
  TextControlOptions & {
    orientation?: "vertical" | "horizontal";
  };

/**
 * Groups one primary Input or Textarea with its label and associated descriptions/messages.
 * Put the control ID on Root; Ark manages label and error associations. ErrorText renders only for
 * invalid state, SuccessText only for valid state, and a single message is shown at a time.
 * Validation rules, values, submission, and reset behavior remain application-owned.
 *
 * @example
 * ```tsx
 * import { Field, Input } from "@egcs/newui/forms";
 *
 * <Field.Root>
 *   <Field.Label>Email</Field.Label>
 *   <Input name="email" type="email" />
 *   <Field.ErrorText />
 * </Field.Root>
 * ```
 */
export function FieldRoot(props: FieldRootProps) {
  const [local, rest] = splitProps(props, [
    "size",
    "tone",
    "rounded",
    "valid",
    "loading",
    "orientation",
    "class",
    "children",
  ]);
  const [successId, setSuccessId] = createSignal<string>();
  const options = () => ({
    size: local.size ?? "md",
    tone: local.tone ?? "neutral",
    rounded: local.rounded ?? false,
    valid: Boolean(local.valid && !props.invalid),
    loading: local.loading ?? false,
  });
  const registerSuccess = (id: string) => {
    setSuccessId(id);
    return () => setSuccessId((current) => (current === id ? undefined : current));
  };
  return (
    <FieldVisualContext.Provider value={{ options, successId, registerSuccess }}>
      <ArkField.Root
        {...rest}
        data-size={local.size ?? "md"}
        data-orientation={local.orientation ?? "vertical"}
        data-valid={options().valid ? "" : undefined}
        data-loading={local.loading ? "" : undefined}
        class={["nui-field", local.class].filter(Boolean).join(" ")}
      >
        {local.children}
      </ArkField.Root>
    </FieldVisualContext.Provider>
  );
}

/**
 * Form-field composition that associates a control with labels and messages.
 * Use `Field.Root` around a compatible control; its parts expose the label, description,
 * error, success, and required-indicator states.
 */
export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Content: FieldContent,
  Description: FieldDescription,
  ErrorText: FieldErrorText,
  SuccessText: FieldSuccessText,
  RequiredIndicator: FieldRequiredIndicator,
};
