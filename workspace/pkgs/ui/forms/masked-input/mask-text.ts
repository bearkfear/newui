import { createMask } from "imask";
import { inputMaskOptions } from "./input-mask.options";
import type { TextMaskOptions } from "./input-mask.types";

/** Format a raw string without an input element or Solid owner. */
export function maskText(value: string, options: TextMaskOptions): string {
  const mask = createMask(inputMaskOptions(options));
  mask.unmaskedValue = value;
  return mask.value;
}

/** Parse formatted text using its pattern, retaining only accepted token characters. */
export function unmaskText(value: string, options: TextMaskOptions): string {
  const mask = createMask(inputMaskOptions(options));
  mask.value = value;
  return mask.unmaskedValue;
}
