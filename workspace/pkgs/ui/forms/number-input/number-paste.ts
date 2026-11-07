import { DIRECTION, type InputMask } from "imask";
import { parseLocalizedNumber } from "./number-format";
import type { NumberInputBehavior } from "./number-input.behavior";
import type { DecimalMask } from "./number-mask";

export function pasteNumber(
  input: HTMLInputElement,
  mask: InputMask<DecimalMask>,
  event: ClipboardEvent,
  behavior: NumberInputBehavior,
) {
  const text = event.clipboardData?.getData("text/plain");
  if (text === undefined || input.readOnly || input.matches(":disabled")) return;
  const config = mask.masked.configuration;
  const parsed = behavior.parsePaste?.(text) ?? parseLocalizedNumber(text, config);
  if (parsed.status === "invalid" && parsed.reason !== "range") {
    event.preventDefault();
    return;
  }
  if (!behavior.pasteValue) return;
  event.preventDefault();
  if (parsed.status === "invalid") return;
  const insertion = parsed.status === "empty" ? "" : behavior.pasteValue(parsed.value, config);
  const start = input.selectionStart ?? 0;
  const end = input.selectionEnd ?? start;
  const changes = mask.masked.splice(start, end - start, insertion, DIRECTION.NONE, {
    input: true,
    raw: true,
  });
  mask.updateControl(mask.masked.nearestInputPos(start + changes.offset));
}
