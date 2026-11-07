import IMask from "imask";
import { createEffect, createMemo, createSignal, untrack } from "solid-js";
import { TextMaskElement } from "../masked-input/input-mask.element";
import { bindTextControlReset } from "../text-control.reset";
import { numberConfiguration } from "./number.configuration";
import type { NumberInputOptions, NumberValueDetails } from "./number.types";
import { numberController, sameNumberValue } from "./number-controller";
import type { NumberInputBehavior } from "./number-input.behavior";
import { canonicalInput, DecimalMask, readNumberValue } from "./number-mask";
import { pasteNumber } from "./number-paste";
import { toggleNumberSign } from "./number-sign";

export function createNumberInput(props: NumberInputOptions, behavior: NumberInputBehavior = {}) {
  const configuration = createMemo(
    () => behavior.configuration?.(props) ?? numberConfiguration(props),
  );
  const initialRaw = untrack(() => props.defaultValue ?? "");
  const initial =
    behavior.createMask?.(untrack(configuration)) ?? new DecimalMask(untrack(configuration));
  initial.value = canonicalInput(
    untrack(() => props.value ?? initialRaw),
    initial.configuration,
  );
  const [details, publish] = createSignal(readNumberValue(initial), { equals: sameNumberValue });
  const [element, attach] = createSignal<HTMLInputElement>();
  let toggleSign = () => {};
  let paste = (_event: ClipboardEvent) => {};
  createEffect(() => {
    const input = element();
    if (input) {
      const controller = untrack(() =>
        bindNumberInput(input, props, configuration, initialRaw, publish, behavior),
      );
      toggleSign = controller.toggleSign;
      paste = controller.paste;
    }
  });
  return {
    attach,
    details,
    initialDisplay: initial.value,
    toggleSign: () => toggleSign(),
    paste: (event: ClipboardEvent) => paste(event),
  };
}

function bindNumberInput(
  input: HTMLInputElement,
  props: NumberInputOptions,
  configuration: () => ReturnType<typeof numberConfiguration>,
  initialRaw: string,
  publish: (value: NumberValueDetails) => void,
  behavior: NumberInputBehavior,
) {
  const model = () => behavior.createMask?.(configuration()) ?? new DecimalMask(configuration());
  const mask = IMask(new TextMaskElement(input), model());
  const { sync, current, disposed } = numberController(input, mask, props, configuration, publish);
  sync(props.value ?? initialRaw, true);
  bindNumberConfiguration(mask, props, configuration, sync, current, model);
  bindTextControlReset(
    input,
    () => sync(props.value ?? initialRaw, true, props.value === undefined),
    disposed,
  );
  return {
    toggleSign: () => toggleNumberSign(input, mask),
    paste: (event: ClipboardEvent) => pasteNumber(input, mask, event, behavior),
  };
}

function bindNumberConfiguration(
  mask: ReturnType<typeof IMask<DecimalMask>>,
  props: NumberInputOptions,
  configuration: () => ReturnType<typeof numberConfiguration>,
  sync: (raw: string, force?: boolean, notify?: boolean) => void,
  current: () => string,
  model: () => DecimalMask,
) {
  let previous = configuration();
  createEffect(() => {
    const next = configuration();
    const controlled = props.value;
    untrack(() => {
      const changed = next !== previous;
      const raw = controlled ?? current();
      if (changed) {
        canonicalInput(raw, next);
        mask.mask = model();
      }
      sync(raw, changed, changed);
      previous = next;
    });
  });
}
