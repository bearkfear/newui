import { DateInput as ArkDateInput } from "@ark-ui/solid/date-input";
import { DateEntry } from "../date/date.entry";
import { DateLabel } from "../date/date.parts";
import { DateRoot } from "../date/date.root";

export type {
  DateEntryProps as DateInputControlProps,
  DateRootProps as DateInputRootProps,
} from "../date/date.types";

/**
 * A segmented date entry control without a popup calendar.
 * Use DatePicker for a calendar popup or DateRangePicker for a pair of date endpoints.
 */
export const DateInput = {
  Root: DateRoot,
  Control: DateEntry,
  Label: DateLabel,
  Segment: ArkDateInput.Segment,
  SegmentContext: ArkDateInput.SegmentContext,
  Context: ArkDateInput.Context,
};
