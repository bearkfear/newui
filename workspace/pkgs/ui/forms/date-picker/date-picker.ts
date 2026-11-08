import { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import { DateEntry } from "../date/date.entry";
import { DateLabel } from "../date/date.parts";
import { DatePickerCalendar } from "./date-picker.calendar";
import { DatePickerContent } from "./date-picker.content";
import { DatePickerClearTrigger, DatePickerControl, DatePickerTrigger } from "./date-picker.parts";
import { DatePickerRoot } from "./date-picker.root";

export type { DatePickerContentProps, DatePickerRootProps } from "./date-picker.types";

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
