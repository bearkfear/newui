import type { JSX } from "solid-js";

export function focusInputFromGroup(
  event: Parameters<JSX.EventHandler<HTMLDivElement, MouseEvent>>[0],
) {
  if (event.defaultPrevented || event.button !== 0) return;
  const group = event.currentTarget;
  if (event.target !== group) return;
  const input = getGroupInput(group);
  if (input && input.ownerDocument.activeElement !== input) input.focus();
}

export function preserveInputFocusFromGroup(
  event: Parameters<JSX.EventHandler<HTMLDivElement, PointerEvent>>[0],
) {
  if (event.defaultPrevented || event.button !== 0 || event.target !== event.currentTarget) return;
  const input = getGroupInput(event.currentTarget);
  if (input && input.ownerDocument.activeElement === input) event.preventDefault();
}

function getGroupInput(group: HTMLDivElement) {
  return group.querySelector<HTMLInputElement | HTMLTextAreaElement>(
    ":scope > :is(input, textarea).nui-text-control:not(:disabled)",
  );
}
