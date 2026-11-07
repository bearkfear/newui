import type { JSX } from "solid-js";

type InputEventTarget<T extends Event> = T & { currentTarget: HTMLInputElement; target: Element };

export function forwardNumberInputEvent<T extends Event>(
  handler: JSX.EventHandlerUnion<HTMLInputElement, T> | undefined,
  event: InputEventTarget<T>,
) {
  if (typeof handler === "function") handler(event);
  else if (handler) handler[0](handler[1], event);
}

export function numberKeyDown(
  handler: JSX.EventHandlerUnion<HTMLInputElement, KeyboardEvent> | undefined,
  toggle: () => void,
) {
  return (event: InputEventTarget<KeyboardEvent>) => {
    forwardNumberInputEvent(handler, event);
    if (
      event.defaultPrevented ||
      event.isComposing ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      event.key !== "-"
    )
      return;
    event.preventDefault();
    toggle();
  };
}

export function numberBeforeInput(
  handler: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> | undefined,
  toggle: () => void,
) {
  return (event: InputEvent & { currentTarget: HTMLInputElement; target: HTMLInputElement }) => {
    if (typeof handler === "function") handler(event);
    else if (handler) handler[0](handler[1], event);
    if (
      event.defaultPrevented ||
      event.isComposing ||
      event.inputType !== "insertText" ||
      event.data !== "-"
    )
      return;
    event.preventDefault();
    toggle();
  };
}
