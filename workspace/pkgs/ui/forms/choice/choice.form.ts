import { createEffect, createSignal, onCleanup } from "solid-js";
import { bindTextControlReset } from "../text-control.reset";

type ChoiceFormOptions<T> = {
  value: () => T | undefined;
  initial: T;
  isChecked: (value: T, input: HTMLInputElement) => boolean;
};

export function createChoiceFormState<T>(options: ChoiceFormOptions<T>) {
  const [internal, setInternal] = createSignal(options.initial);
  const [inputs, setInputs] = createSignal<HTMLInputElement[]>([]);
  let resetting = false;
  const value = () => {
    const controlled = options.value();
    return controlled === undefined ? internal() : controlled;
  };
  createEffect(() => {
    const input = inputs()[0];
    if (!input) return;
    let disposed = false;
    const markReset = (event: Event) => {
      if (event.target !== input.form) return;
      resetting = true;
      // Ark Switch also emits a synthetic click in a microtask during reset.
      setTimeout(() => {
        resetting = false;
      }, 0);
    };
    input.ownerDocument.addEventListener("reset", markReset, true);
    bindTextControlReset(
      input,
      () => {
        if (options.value() === undefined) setInternal(() => options.initial);
        for (const element of inputs()) {
          element.checked = options.isChecked(value(), element);
          element.indeterminate = value() === "indeterminate";
        }
      },
      () => disposed,
    );
    onCleanup(() => {
      disposed = true;
      input.ownerDocument.removeEventListener("reset", markReset, true);
    });
  });
  return {
    value,
    register: (input: HTMLInputElement) => {
      setInputs((current) => [...current, input]);
      onCleanup(() => {
        setInputs((current) => current.filter((element) => element !== input));
      });
    },
    change: (next: T, notify: () => void) => {
      if (resetting) return;
      if (options.value() === undefined) setInternal(() => next);
      notify();
    },
  };
}
