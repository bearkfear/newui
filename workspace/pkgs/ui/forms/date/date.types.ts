import type { DateInput } from "@ark-ui/solid/date-input";
import type { CalendarDate } from "@internationalized/date";
import type { JSX } from "solid-js";
import type { TextControlOptions } from "../text-control.context";

/** Gregorian CalendarDate endpoints; null preserves an empty endpoint in a partial range. */
export type DateSelection = (CalendarDate | null)[];
/**
 * Selected CalendarDate endpoints plus ISO strings for native forms; empty range endpoints remain
 * empty strings so partial ranges retain their start/end positions.
 */
export type DateValueChangeDetails = {
  value: DateSelection;
  /** ISO calendar dates, with an empty string for an empty endpoint. */
  valueAsString: string[];
};
/**
 * Shared Gregorian AD date values, locale, bounds, and form options. Single dates use one endpoint;
 * ranges use two and may preserve a null endpoint. Native values serialize as ISO calendar dates.
 */
export type DateOptions = TextControlOptions & {
  locale?: string;
  /** Gregorian CalendarDate endpoints; not JavaScript Date timestamps. */
  value?: DateSelection;
  defaultValue?: DateSelection;
  /** Accepted date changes with both CalendarDate endpoints and ISO strings. */
  onValueChange?: (details: DateValueChangeDetails) => void;
  name?: string;
  /** Stable endpoint names; defaults to `${name}[start]` and `${name}[end]`. */
  names?: { start: string; end: string };
  form?: string;
  required?: boolean;
  /** Inclusive Gregorian CalendarDate bounds. */
  min?: CalendarDate;
  max?: CalendarDate;
  isDateUnavailable?: (date: CalendarDate, locale: string) => boolean;
  /** Supply the same date on server and client for deterministic empty-field rendering. */
  placeholderValue?: CalendarDate;
  shouldForceLeadingZeros?: boolean;
};
/** Root options shared by the segmented date input, single-date calendar, and range calendar. */
export type DateRootProps = DateOptions &
  Omit<JSX.HTMLAttributes<HTMLDivElement>, keyof DateOptions>;
/** Segment-group options; range controls use `index` to select the start or end endpoint. */
export type DateEntryProps = Omit<DateInput.SegmentGroupProps, "index"> & { index?: 0 | 1 };
