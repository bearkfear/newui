import IMask, { createMask } from "imask";
import { createEffect, createMemo, createSignal, onCleanup, untrack } from "solid-js";
import { TextMaskElement } from "./input-mask.element";
import { inputMaskOptions } from "./input-mask.options";
import type { InputMaskOptions, InputMaskValueDetails } from "./input-mask.types";

type MaskController = ReturnType<typeof createMask<ReturnType<typeof inputMaskOptions>>>;

function readValue(mask: MaskController): InputMaskValueDetails {
  return {
    rawValue: mask.unmaskedValue,
    formattedValue: mask.value,
    complete: mask.isComplete,
  };
}

function sameValue(left: InputMaskValueDetails, right: InputMaskValueDetails) {
  return (
    left.rawValue === right.rawValue &&
    left.formattedValue === right.formattedValue &&
    left.complete === right.complete
  );
}

/** Internal Solid adapter; the public component owns the input and submission contract. */
export function createInputMask(props: InputMaskOptions) {
  const options = createMemo(() => inputMaskOptions(props));
  const initialRaw = untrack(() => props.defaultValue ?? "");
  const initial = createMask(untrack(options));
  initial.unmaskedValue = untrack(() => props.value ?? initialRaw);
  const [details, setDetails] = createSignal(readValue(initial), { equals: sameValue });
  const [element, attach] = createSignal<HTMLInputElement>();

  createEffect(() => {
    const input = element();
    if (!input) return;
    untrack(() => bindInputMask(input, props, options, initialRaw, details, setDetails));
  });
  return { attach, details, initialDisplay: initial.value };
}

function bindInputMask(
  input: HTMLInputElement,
  props: InputMaskOptions,
  options: () => ReturnType<typeof inputMaskOptions>,
  initialRaw: string,
  details: () => InputMaskValueDetails,
  publish: (details: InputMaskValueDetails) => void,
) {
  const mask = IMask(new TextMaskElement(input), options());
  let syncing = false;
  let disposed = false;
  let previousOptions = options();
  const publishValue = (notify: boolean) => {
    const next = readValue(mask.masked);
    if (sameValue(details(), next)) return;
    publish(next);
    if (notify) untrack(() => props.onValueChange?.(next));
  };
  const sync = (raw: string, notify = false) => {
    syncing = true;
    if (raw !== mask.unmaskedValue) mask.history.clear();
    mask.unmaskedValue = raw;
    mask.updateControl();
    publishValue(notify);
    syncing = false;
  };
  const accept = () => {
    if (syncing) return;
    publishValue(true);
    queueMicrotask(() => {
      if (!disposed && props.value !== undefined) sync(props.value);
    });
  };
  mask.on("accept", accept);
  sync(props.value ?? initialRaw);
  createEffect(() => {
    const configuration = options();
    const controlled = props.value;
    untrack(() => {
      syncing = true;
      const raw = controlled ?? mask.unmaskedValue;
      // Replace the model on configuration changes so removed token options cannot persist.
      if (configuration !== previousOptions) {
        mask.mask = createMask(configuration);
        mask.history.clear();
      }
      sync(raw, configuration !== previousOptions);
      previousOptions = configuration;
    });
  });
  bindMaskReset(
    input,
    () => {
      mask.history.clear();
      sync(props.value ?? initialRaw, props.value === undefined);
    },
    () => disposed,
  );
  onCleanup(() => {
    disposed = true;
    mask.destroy();
  });
}

function bindMaskReset(input: HTMLInputElement, reset: () => void, disposed: () => boolean) {
  const handleReset = (event: Event) => {
    if (event.target !== input.form) return;
    // Native dispatch can flush microtasks between listeners, before cancellation is known.
    setTimeout(() => {
      if (!disposed() && !event.defaultPrevented) reset();
    }, 0);
  };
  input.ownerDocument.addEventListener("reset", handleReset, true);
  onCleanup(() => input.ownerDocument.removeEventListener("reset", handleReset, true));
}
