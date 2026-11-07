import { renderDecimalInput } from "./decimal-input";
import type { NumberInputProps } from "./number-input.types";

export type { NumberInputProps } from "./number-input.types";

export function NumberInput(props: NumberInputProps) {
  return renderDecimalInput(props);
}
