import type { UseDateInputReturn } from "@ark-ui/solid/date-input";
import { createEffect, createSignal, onMount } from "solid-js";
import { useDateContext } from "./date.context";
import { dateDraft } from "./date.draft";

export function DateNativeInput(props: { api: UseDateInputReturn; index: number }) {
  const date = useDateContext();
  const draft = dateDraft(props.api);
  const [attempted, setAttempted] = createSignal(false);
  const value = () =>
    draft.incomplete() || draft.uncommitted()
      ? ""
      : (date.state.value()[props.index]?.toString() ?? "");
  const message = () =>
    date.invalid()
      ? date.validationMessage()
      : draft.partial() || draft.uncommitted() || (date.required() && !value())
        ? date.messages().incomplete
        : "";
  let input: HTMLInputElement | undefined;
  onMount(() => {
    if (input && props.index === 0) date.state.register(input);
  });
  createEffect(() => {
    if (!input) return;
    input.setCustomValidity(message());
    // Native reset can restore defaultValue without changing the reactive date value.
    input.value = value();
  });
  return (
    <>
      {/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: Untabbable native form proxy; invalid events focus the visible Ark segments. */}
      <input
        ref={input}
        type="text"
        id={date.inputId(props.index)}
        class="nui-date-form-input"
        tabindex={-1}
        aria-hidden="true"
        autocomplete="off"
        name={date.name(props.index)}
        form={date.props.form}
        value={value()}
        required={date.required()}
        disabled={date.control.disabled()}
        readOnly={date.control.readOnly()}
        onFocus={() => props.api().focus()}
        onInvalid={(event) => {
          event.preventDefault();
          setAttempted(true);
          if (
            !event.currentTarget.form ||
            Array.from(event.currentTarget.form.elements).find((element) =>
              element.matches("input:invalid, select:invalid, textarea:invalid"),
            ) === event.currentTarget
          )
            props.api().focus();
        }}
      />
      <span class="nui-date-sr-only" role="status">
        {attempted() ? message() : ""}
      </span>
    </>
  );
}
