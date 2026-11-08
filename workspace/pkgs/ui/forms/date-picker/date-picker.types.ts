import type { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import type { DateRootProps } from "../date/date.types";

export type DatePickerRootProps = DateRootProps &
  Pick<
    ArkDatePicker.RootProps,
    | "open"
    | "defaultOpen"
    | "onOpenChange"
    | "closeOnSelect"
    | "positioning"
    | "view"
    | "defaultView"
    | "onViewChange"
    | "onFocusChange"
    | "onVisibleRangeChange"
  > & {
    startOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /** Two months collapse to one below 42rem, including the SSR fallback. */
    numOfMonths?: 1 | 2;
  };
export type DatePickerContentProps = ArkDatePicker.ContentProps & { mount?: HTMLElement };
