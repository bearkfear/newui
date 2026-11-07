import { onCleanup } from "solid-js";

export function bindTextControlReset(
  input: HTMLInputElement,
  reset: () => void,
  disposed: () => boolean,
) {
  const handleReset = (event: Event) => {
    if (event.target !== input.form) return;
    // Wait for reset propagation and the native default action, including cancellation.
    setTimeout(() => {
      if (!disposed() && !event.defaultPrevented) reset();
    }, 0);
  };
  input.ownerDocument.addEventListener("reset", handleReset, true);
  onCleanup(() => input.ownerDocument.removeEventListener("reset", handleReset, true));
}
