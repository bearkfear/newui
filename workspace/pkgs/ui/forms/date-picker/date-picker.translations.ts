import type { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import type { dateMessages } from "../date/date.locale";

export function pickerTranslations(
  messages: ReturnType<typeof dateMessages>,
): NonNullable<ArkDatePicker.RootProps["translations"]> {
  return {
    dayCell: (state) => {
      if (state.unavailable) return `${messages.unavailable} ${state.valueText}`;
      if (state.firstInRange) return `${messages.rangeStart} ${state.valueText}`;
      if (state.lastInRange) return `${messages.rangeEnd} ${state.valueText}`;
      if (state.inRange) return `${messages.inRange} ${state.valueText}`;
      if (state.selected) return `${messages.selected} ${state.valueText}`;
      return `${messages.choose} ${state.valueText}`;
    },
    presetTrigger: (value) => `${messages.selectPeriod}: ${value.join(" – ")}`,
    trigger: (open: boolean) => (open ? messages.close : messages.open),
    clearTrigger: messages.clear,
    content: messages.calendar,
    nextTrigger: () => messages.next,
    prevTrigger: () => messages.previous,
    monthSelect: messages.chooseMonth,
    yearSelect: messages.chooseYear,
    viewTrigger: (_view: string, nextView: string | undefined) =>
      nextView === "month"
        ? messages.chooseMonth
        : nextView === "year"
          ? messages.chooseYear
          : messages.chooseDecade,
  };
}
