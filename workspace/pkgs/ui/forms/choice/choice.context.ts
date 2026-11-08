import { createContext, useContext } from "solid-js";
import { type TextControlOptions, useTextControl } from "../text-control.context";

export type ChoiceOptions = Pick<
  TextControlOptions,
  "size" | "tone" | "valid" | "invalid" | "disabled" | "readOnly"
>;
export const ChoiceGroupContext = createContext<ReturnType<typeof useTextControl>>();

export function useChoiceControl(props: ChoiceOptions) {
  const group = useContext(ChoiceGroupContext);
  const control = useTextControl(props);
  const invalid = () => control.invalid() || Boolean(group?.invalid());
  return {
    ...control,
    size: () => props.size ?? group?.size() ?? control.size(),
    tone: () => props.tone ?? group?.tone() ?? control.tone(),
    valid: () => !invalid() && (props.valid ?? group?.valid() ?? control.valid()),
    invalid,
    disabled: () => control.disabled() || Boolean(group?.disabled()),
    readOnly: () => control.readOnly() || Boolean(group?.readOnly()),
  };
}
