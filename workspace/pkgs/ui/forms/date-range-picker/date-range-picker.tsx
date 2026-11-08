import { DatePicker } from "../date-picker/date-picker";
import { DatePickerBaseRoot } from "../date-picker/date-picker.root";
import type { DatePickerRootProps } from "../date-picker/date-picker.types";

export type DateRangePickerRootProps = DatePickerRootProps;

export function DateRangePickerRoot(props: DateRangePickerRootProps) {
  return <DatePickerBaseRoot {...props} range />;
}

export const DateRangePicker = { ...DatePicker, Root: DateRangePickerRoot };
