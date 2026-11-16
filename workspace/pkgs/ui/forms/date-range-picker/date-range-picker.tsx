import { DatePicker } from "../date-picker/date-picker";
import { DatePickerBaseRoot } from "../date-picker/date-picker.root";
import type { DatePickerRootProps } from "../date-picker/date-picker.types";

/** DateRangePicker.Root uses the shared date options with start/end endpoint values. */
export type DateRangePickerRootProps = DatePickerRootProps;

export function DateRangePickerRoot(props: DateRangePickerRootProps) {
  return <DatePickerBaseRoot {...props} range />;
}

/**
 * A calendar picker for selecting a start and end date.
 * Its form value preserves partial ranges; see the date family guide for serialization details.
 */
export const DateRangePicker = { ...DatePicker, Root: DateRangePickerRoot };
