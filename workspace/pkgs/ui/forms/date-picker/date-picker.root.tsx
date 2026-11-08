import { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import { toCalendarDate } from "@internationalized/date";
import { createMediaQuery } from "@solid-primitives/media";
import { mergeProps, splitProps } from "solid-js";
import { createDateContext, DateContext } from "../date/date.context";
import { dateOptionKeys } from "../date/date.root";
import { calendarSelection, fromArkDates } from "../date/date.value";
import { pickerTranslations } from "./date-picker.translations";
import type { DatePickerRootProps } from "./date-picker.types";

export function DatePickerRoot(props: DatePickerRootProps) {
  return <DatePickerBaseRoot {...props} />;
}

export function DatePickerBaseRoot(props: DatePickerRootProps & { range?: boolean }) {
  const [, rest] = splitProps(props, dateOptionKeys);
  const [local, ark] = splitProps(rest, [
    "range",
    "positioning",
    "numOfMonths",
    "class",
    "children",
  ]);
  const date = createDateContext(props, Boolean(local.range));
  const wide = createMediaQuery("(min-width: 42rem)", false);
  return (
    <DateContext.Provider value={date}>
      <ArkDatePicker.Root
        {...ark}
        locale={date.locale()}
        selectionMode={local.range ? "range" : "single"}
        value={calendarSelection(date.state.value())}
        onValueChange={(details) => date.state.change(fromArkDates(details.value))}
        disabled={date.control.disabled()}
        readOnly={date.control.readOnly()}
        required={date.required()}
        invalid={date.invalid()}
        min={props.min}
        max={props.max}
        defaultFocusedValue={props.placeholderValue ?? calendarSelection(date.state.value())[0]}
        isDateUnavailable={(value, locale) =>
          Boolean(props.isDateUnavailable?.(toCalendarDate(value), locale))
        }
        numOfMonths={wide() ? (local.numOfMonths ?? 1) : 1}
        translations={pickerTranslations(date.messages())}
        positioning={mergeProps(
          {
            placement: "bottom-start" as const,
            strategy: "fixed" as const,
            gutter: 6,
            overflowPadding: 12,
          },
          local.positioning ?? {},
        )}
        lazyMount
        unmountOnExit
        class={["nui-date-root", local.class].filter(Boolean).join(" ")}
      >
        {local.children}
      </ArkDatePicker.Root>
    </DateContext.Provider>
  );
}
