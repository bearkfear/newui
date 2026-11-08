import type { DateInput } from "@ark-ui/solid/date-input";
import type { CalendarDate } from "@internationalized/date";
import type { JSX } from "solid-js";
import type { TextControlOptions } from "../text-control.context";

/** Calendar dates only. Null preserves an empty endpoint in a partial range. */
export type DateSelection = (CalendarDate | null)[];
export type DateValueChangeDetails = {
  value: DateSelection;
  /** ISO calendar dates, with an empty string for an empty endpoint. */
  valueAsString: string[];
};
export type DateOptions = TextControlOptions & {
  locale?: string;
  value?: DateSelection;
  defaultValue?: DateSelection;
  onValueChange?: (details: DateValueChangeDetails) => void;
  name?: string;
  /** Stable endpoint names; defaults to `${name}[start]` and `${name}[end]`. */
  names?: { start: string; end: string };
  form?: string;
  required?: boolean;
  min?: CalendarDate;
  max?: CalendarDate;
  isDateUnavailable?: (date: CalendarDate, locale: string) => boolean;
  /** Supply the same date on server and client for deterministic empty-field rendering. */
  placeholderValue?: CalendarDate;
  shouldForceLeadingZeros?: boolean;
};
export type DateRootProps = DateOptions &
  Omit<JSX.HTMLAttributes<HTMLDivElement>, keyof DateOptions>;
export type DateEntryProps = Omit<DateInput.SegmentGroupProps, "index"> & { index?: 0 | 1 };
