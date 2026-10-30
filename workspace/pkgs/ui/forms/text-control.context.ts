import { useFieldContext } from "@ark-ui/solid/field";
import { type Accessor, createContext, useContext } from "solid-js";

export type TextControlSize = "sm" | "md" | "lg";
export type TextControlTone = "neutral" | "primary" | "info" | "success" | "warning" | "danger";
export type TextControlOptions = {
  size?: TextControlSize;
  tone?: TextControlTone;
  rounded?: boolean;
  valid?: boolean;
  invalid?: boolean;
  loading?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
};
export type FieldVisualContextValue = {
  options: Accessor<TextControlOptions>;
  successId: Accessor<string | undefined>;
  registerSuccess: (id: string) => () => void;
};

export const FieldVisualContext = createContext<FieldVisualContextValue>();
export const InputGroupContext = createContext<Accessor<TextControlOptions>>();
export const useFieldVisual = () => useContext(FieldVisualContext);

export function useTextControl(props: TextControlOptions) {
  const field = useFieldVisual();
  const group = useContext(InputGroupContext);
  const ark = useFieldContext();
  const invalid = () => Boolean(props.invalid || group?.().invalid || ark?.().invalid);
  return {
    size: () => props.size ?? group?.().size ?? field?.options().size ?? "md",
    tone: () => props.tone ?? group?.().tone ?? field?.options().tone ?? "neutral",
    rounded: () => props.rounded ?? group?.().rounded ?? field?.options().rounded ?? false,
    invalid,
    valid: () => !invalid() && (props.valid ?? group?.().valid ?? field?.options().valid ?? false),
    loading: () => props.loading ?? group?.().loading ?? field?.options().loading ?? false,
    disabled: () => Boolean(props.disabled || group?.().disabled || ark?.().disabled),
    readOnly: () => Boolean(props.readOnly || group?.().readOnly || ark?.().readOnly),
    describedBy: (external: string | undefined) =>
      [ark?.().ariaDescribedby, field?.successId(), external].filter(Boolean).join(" ") ||
      undefined,
  };
}
