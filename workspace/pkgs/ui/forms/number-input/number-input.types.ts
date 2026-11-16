import type { InputProps } from "../input/input";
import type { NumberInputOptions } from "./number.types";

/**
 * NumberInput's `value`, `defaultValue`, `min`, and `max` are canonical decimal strings;
 * no number conversion or rounding is used. Locale controls display/parsing, not the stored value.
 * `onValueChange` distinguishes empty, incomplete, valid, and invalid editing states.
 */
export type NumberInputProps = Omit<InputProps, "value" | "defaultValue" | "type" | "min" | "max"> &
  NumberInputOptions & {
    textAlign?: "left" | "center" | "right";
    /** Native submission format: displayed localized text by default, canonical decimal when raw. */
    submitValue?: "formatted" | "raw";
  };
