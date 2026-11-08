import { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import { ark } from "@ark-ui/solid/factory";
import { CalendarDays, X } from "lucide-solid";
import { splitProps } from "solid-js";
import { useDateContext } from "../date/date.context";
import { textControlRecipe } from "../text-control.recipe";

export function DatePickerControl(props: ArkDatePicker.ControlProps) {
  const [local, rest] = splitProps(props, ["class"]);
  const date = useDateContext();
  return (
    <ArkDatePicker.Control
      {...rest}
      data-range={date.range ? "" : undefined}
      data-disabled={date.control.disabled() ? "" : undefined}
      data-readonly={date.control.readOnly() ? "" : undefined}
      data-invalid={date.invalid() ? "" : undefined}
      data-valid={date.control.valid() && !date.invalid() ? "" : undefined}
      class={textControlRecipe({
        size: date.control.size(),
        tone: date.control.tone(),
        rounded: date.control.rounded(),
        class: ["nui-date-control", local.class].filter(Boolean).join(" "),
      })}
    />
  );
}

export function DatePickerTrigger(props: ArkDatePicker.TriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  const date = useDateContext();
  return (
    <ArkDatePicker.Trigger
      {...rest}
      disabled={date.control.disabled() || date.control.readOnly() || props.disabled}
      class={["nui-date-action nui-date-input-action nui-date-trigger nui-focus-ring", local.class]
        .filter(Boolean)
        .join(" ")}
    >
      {local.children ?? <CalendarDays size={18} aria-hidden="true" />}
    </ArkDatePicker.Trigger>
  );
}

export function DatePickerClearTrigger(props: ArkDatePicker.ClearTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children", "onClick", "aria-label"]);
  const date = useDateContext();
  return (
    <ark.button
      {...rest}
      type="button"
      aria-label={local["aria-label"] ?? date.messages().clear}
      disabled={date.control.disabled() || date.control.readOnly() || props.disabled}
      class={["nui-date-action nui-date-input-action nui-date-clear nui-focus-ring", local.class]
        .filter(Boolean)
        .join(" ")}
      onClick={(event) => {
        const handler = local.onClick;
        if (typeof handler === "function") handler(event);
        else handler?.[0](handler[1], event);
        if (!event.defaultPrevented) {
          const document = event.currentTarget.ownerDocument;
          date.state.clear();
          // Clearing remounts drafts and hides this action; Ark focuses the new segments.
          queueMicrotask(() => document.getElementById(date.inputId(0))?.focus());
        }
      }}
    >
      {local.children ?? <X size={16} aria-hidden="true" />}
    </ark.button>
  );
}
