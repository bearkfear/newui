import { HTMLInputMaskElement } from "imask";

/** Preserve native readonly/disabled behavior for IMask's own undo/redo handlers. */
export class TextMaskElement extends HTMLInputMaskElement {
  override bindEvents(handlers: Parameters<HTMLInputMaskElement["bindEvents"]>[0]) {
    const editable = () => !this.input.readOnly && !this.input.matches(":disabled");
    super.bindEvents({
      ...handlers,
      undo: () => {
        if (editable()) handlers.undo?.();
      },
      redo: () => {
        if (editable()) handlers.redo?.();
      },
    });
  }
}
