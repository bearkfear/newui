import { CalendarDate, type DateValue, toCalendarDate } from "@internationalized/date";
import type { DateOptions, DateSelection } from "./date.types";

export { CalendarDate, parseDate } from "@internationalized/date";

export function assertCalendarDate(date: CalendarDate): void {
  if (
    !(date instanceof CalendarDate) ||
    date.calendar.identifier !== "gregory" ||
    date.era !== "AD"
  ) {
    throw new TypeError("Date controls require Gregorian AD CalendarDate values without time.");
  }
}

export function checkedSelection(value: DateSelection, range: boolean): DateSelection {
  if (value.length > (range ? 2 : 1))
    throw new RangeError("Too many dates for this selection mode.");
  for (const date of value) if (date != null) assertCalendarDate(date);
  return Array.from(value, (date) => date ?? null);
}

export function calendarSelection(value: DateSelection): CalendarDate[] {
  return value[0] ? value.filter((date): date is CalendarDate => date !== null) : [];
}

export function fromArkDates(value: DateValue[]): CalendarDate[] {
  return value.map((date) => toCalendarDate(date));
}

export function dateIsInvalid(date: CalendarDate, props: DateOptions, locale: string): boolean {
  return Boolean(
    (props.min && date.compare(props.min) < 0) ||
      (props.max && date.compare(props.max) > 0) ||
      props.isDateUnavailable?.(date, locale),
  );
}

export function selectionIsInvalid(
  value: DateSelection,
  props: DateOptions,
  locale: string,
): boolean {
  const [start, end] = value;
  return Boolean(
    value.some((date) => date && dateIsInvalid(date, props, locale)) ||
      (start && end && start.compare(end) > 0),
  );
}
