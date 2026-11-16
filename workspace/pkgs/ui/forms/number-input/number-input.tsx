import { renderDecimalInput } from "./decimal-input";
import type { NumberInputProps } from "./number-input.types";

export type { NumberInputProps } from "./number-input.types";

/**
 * A locale-aware numeric text input backed by exact decimal strings rather than floating-point values.
 * Use `value` with `onValueChange` for controlled state; `defaultValue` initializes an uncontrolled
 * native input and is restored on form reset. Native submission is formatted text unless `raw` is set.
 */
export function NumberInput(props: NumberInputProps) {
  return renderDecimalInput(props);
}
