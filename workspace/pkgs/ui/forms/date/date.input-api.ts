import { useDateInput } from "@ark-ui/solid/date-input";
import { useDateContext } from "./date.context";
import { fromArkDates } from "./date.value";

export function createDateInputApi(index: () => number) {
  const date = useDateContext();
  return useDateInput(() => {
    const selected = date.state.value()[index()];
    return {
      locale: date.locale(),
      disabled: date.control.disabled(),
      readOnly: date.control.readOnly(),
      required: date.required(),
      invalid: date.invalid(),
      min: date.props.min,
      max: date.props.max,
      placeholderValue: date.props.placeholderValue,
      shouldForceLeadingZeros: date.props.shouldForceLeadingZeros,
      translations: { placeholder: () => segmentPlaceholders(date.locale()) },
      value: selected ? [selected] : [],
      onValueChange: (details) => {
        const next = [...date.state.value()];
        next[index()] = fromArkDates(details.value)[0] ?? null;
        date.state.change(next);
      },
    };
  });
}

function segmentPlaceholders(locale: string) {
  return {
    day: "dd",
    month: "mm",
    year: locale.startsWith("pt") ? "aaaa" : "yyyy",
    hour: "hh",
    minute: "mm",
    second: "ss",
    dayPeriod: "AM/PM",
    era: "AD",
  };
}
