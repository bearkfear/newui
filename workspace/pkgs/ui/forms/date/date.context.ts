import { useFieldContext } from "@ark-ui/solid/field";
import { createContext, createMemo, createUniqueId, useContext } from "solid-js";
import { useTextControl } from "../text-control.context";
import { dateMessages, useDateLocale } from "./date.locale";
import { createDateState } from "./date.state";
import type { DateOptions } from "./date.types";
import { assertCalendarDate, selectionIsInvalid } from "./date.value";

export function createDateContext(props: DateOptions, range: boolean) {
  const id = createUniqueId();
  const field = useFieldContext();
  const control = useTextControl(props);
  const locale = useDateLocale(() => props.locale);
  const state = createDateState(props, range);
  const messages = createMemo(() => dateMessages(locale()));
  const invalid = () => {
    if (props.placeholderValue) assertCalendarDate(props.placeholderValue);
    if (props.min) assertCalendarDate(props.min);
    if (props.max) assertCalendarDate(props.max);
    if (props.min && props.max && props.min.compare(props.max) > 0) {
      throw new RangeError("The minimum date must not follow the maximum date.");
    }
    return control.invalid() || selectionIsInvalid(state.value(), props, locale());
  };
  return {
    props,
    range,
    control,
    locale,
    state,
    invalid,
    messages,
    validationMessage: () => {
      const [start, end] = state.value();
      return start && end && start.compare(end) > 0 ? messages().range : messages().invalid;
    },
    required: () => Boolean(props.required || field?.().required),
    labelId: (index: number) => field?.().ids.label ?? `${id}-date-label-${index}`,
    inputId: (index: number) =>
      index === 0 && field ? field().ids.control : `${id}-date-group-${index}`,
    groupId: (index: number) => `${id}-date-segments-${index}`,
    endpointId: (index: number) => `${id}-date-endpoint-${index}`,
    name: (index: number) =>
      range
        ? ((index === 0 ? props.names?.start : props.names?.end) ??
          (props.name ? `${props.name}[${index === 0 ? "start" : "end"}]` : undefined))
        : props.name,
  };
}

export const DateContext = createContext<ReturnType<typeof createDateContext>>();
export function useDateContext() {
  const context = useContext(DateContext);
  if (!context) throw new Error("Date parts must be used within a date Root.");
  return context;
}
