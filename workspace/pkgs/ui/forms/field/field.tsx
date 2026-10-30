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

export type FieldRootProps = ArkField.RootProps &
  TextControlOptions & {
    orientation?: "vertical" | "horizontal";
  };

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

export const Field = {
  Root: FieldRoot,
  Label: FieldLabel,
  Content: FieldContent,
  Description: FieldDescription,
  ErrorText: FieldErrorText,
  SuccessText: FieldSuccessText,
  RequiredIndicator: FieldRequiredIndicator,
};
