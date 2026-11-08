import { DateInput as ArkDateInput } from "@ark-ui/solid/date-input";
import { DateEntry } from "../date/date.entry";
import { DateLabel } from "../date/date.parts";
import { DateRoot } from "../date/date.root";

export type {
  DateEntryProps as DateInputControlProps,
  DateRootProps as DateInputRootProps,
} from "../date/date.types";

export const DateInput = {
  Root: DateRoot,
  Control: DateEntry,
  Label: DateLabel,
  Segment: ArkDateInput.Segment,
  SegmentContext: ArkDateInput.SegmentContext,
  Context: ArkDateInput.Context,
};
