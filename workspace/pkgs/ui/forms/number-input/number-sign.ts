import type { InputMask } from "imask";
import type { DecimalMask } from "./number-mask";

export function toggleNumberSign(input: HTMLInputElement, mask: InputMask<DecimalMask>) {
  if (input.readOnly || input.matches(":disabled") || !mask.masked.configuration.allowNegative)
    return;
  const negative = mask.masked.value.startsWith("-");
  const start = input.selectionStart ?? 0;
  const end = input.selectionEnd ?? start;
  const direction = input.selectionDirection ?? "none";
  mask.masked.splice(0, negative ? 1 : 0, negative ? "" : "-");
  const shift = negative ? -1 : 1;
  // Apply IMask's result and restore the selection before it records the history entry.
  input.value = mask.masked.value;
  input.setSelectionRange(Math.max(0, start + shift), Math.max(0, end + shift), direction);
  mask.updateControl();
  mask._saveSelection();
}
