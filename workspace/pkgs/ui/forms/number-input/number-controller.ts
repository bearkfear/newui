import type { InputMask } from "imask";
import { onCleanup, untrack } from "solid-js";
import { normalizeDecimal } from "./decimal";
import type { NumberConfiguration } from "./number.configuration";
import type { NumberInputOptions, NumberValueDetails } from "./number.types";
import { canonicalInput, type DecimalMask, readNumberValue } from "./number-mask";

export function sameNumberValue(a: NumberValueDetails, b: NumberValueDetails) {
  return (
    a.rawValue === b.rawValue &&
    a.formattedValue === b.formattedValue &&
    a.status === b.status &&
    a.reason === b.reason
  );
}

export function numberController(
  input: HTMLInputElement,
  mask: InputMask<DecimalMask>,
  props: NumberInputOptions,
  configuration: () => NumberConfiguration,
  publish: (value: NumberValueDetails) => void,
) {
  let syncing = false;
  let disposed = false;
  let last = readNumberValue(mask.masked);
  const update = (notify: boolean) => {
    const next = readNumberValue(mask.masked);
    input.setCustomValidity(
      next.status === "invalid" || next.status === "incomplete"
        ? "Enter a complete number within the configured limits."
        : "",
    );
    if (sameNumberValue(last, next)) return;
    last = next;
    publish(next);
    if (notify) untrack(() => props.onValueChange?.(next));
  };
  const sync = (raw: string, force = false, notify = false) => {
    const display = canonicalInput(raw, configuration());
    if (!force && (normalizeDecimal(raw) ?? "") === last.rawValue) return;
    syncing = true;
    mask.history.clear();
    mask.masked.value = display;
    mask.updateControl();
    update(notify);
    syncing = false;
  };
  mask.on("accept", () => {
    if (syncing) return;
    update(true);
    queueMicrotask(() => {
      if (!disposed && props.value !== undefined) sync(props.value);
    });
  });
  onCleanup(() => {
    disposed = true;
    mask.destroy();
  });
  return { sync, current: () => last.rawValue, disposed: () => disposed };
}
