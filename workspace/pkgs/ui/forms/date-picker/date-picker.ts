import { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import { DateEntry } from "../date/date.entry";
import { DateLabel } from "../date/date.parts";
import { DatePickerCalendar } from "./date-picker.calendar";
import { DatePickerContent } from "./date-picker.content";
import { DatePickerClearTrigger, DatePickerControl, DatePickerTrigger } from "./date-picker.parts";
import { DatePickerRoot } from "./date-picker.root";

export type { DatePickerContentProps, DatePickerRootProps } from "./date-picker.types";

/**
 * A date input composed with a popup calendar. Values are Gregorian AD CalendarDate objects without
 * time; native forms submit ISO `YYYY-MM-DD`. Use LocaleProvider for localized labels/display.
 * Dates are not converted through JavaScript timestamps, so timezone does not shift the selected day.
 *
 * @example
 * ```tsx
 * import { DatePicker, parseDate } from "@egcs/newui/forms";
 *
 * <DatePicker.Root name="departure" defaultValue={[parseDate("2028-02-29")]}>
 *   <DatePicker.Label>Departure</DatePicker.Label>
 *   <DatePicker.Control>
 *     <DatePicker.Input />
 *     <DatePicker.Trigger />
 *   </DatePicker.Control>
 *   <DatePicker.Content />
 * </DatePicker.Root>
 * ```
 */
export const DatePicker = {
  Root: DatePickerRoot,
  Control: DatePickerControl,
  Label: DateLabel,
  Input: DateEntry,
  Trigger: DatePickerTrigger,
  ClearTrigger: DatePickerClearTrigger,
  Content: DatePickerContent,
  Calendar: DatePickerCalendar,
  PresetTrigger: ArkDatePicker.PresetTrigger,
  Context: ArkDatePicker.Context,
};
