import type { CollectionItem, SelectValueChangeDetails } from "@ark-ui/solid/select";
import { createSignal, onCleanup, onMount, untrack } from "solid-js";
import { bindTextControlReset } from "../text-control.reset";
import type { SelectRootProps } from "./select.types";

export function createSelectFormState<T extends CollectionItem>(props: SelectRootProps<T>) {
  const initial = untrack(() => [...(props.defaultValue ?? [])]);
  const [value, setValue] = createSignal(initial);
  let element: HTMLSelectElement | undefined;
  let resetting = false;
  let disposed = false;
  onMount(() => {
    const input = element;
    if (!input) return;
    // Ark resets synchronously; defer our reset until all handlers can cancel it.
    const markReset = (event: Event) => {
      if (event.target !== input.form) return;
      resetting = true;
      queueMicrotask(() => {
        resetting = false;
      });
    };
    input.ownerDocument.addEventListener("reset", markReset, true);
    bindTextControlReset(
      input,
      () => {
        if (props.value === undefined) setValue([...initial]);
        // A native reset can change option selection even when Ark's value is unchanged.
        for (const option of input.options) {
          option.selected = (props.value ?? initial).includes(option.value);
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
    value: () => props.value ?? value(),
    register: (input: HTMLSelectElement) => {
      element = input;
    },
    onValueChange: (details: SelectValueChangeDetails<T>) => {
      if (resetting) return;
      if (props.value === undefined) setValue(details.value);
      props.onValueChange?.(details);
    },
  };
}
