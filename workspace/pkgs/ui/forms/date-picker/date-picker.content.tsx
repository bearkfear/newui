import { DatePicker as ArkDatePicker } from "@ark-ui/solid/date-picker";
import { splitProps } from "solid-js";
import { OverlayPortal } from "../../overlays/overlay.portal";
import { DatePickerCalendar } from "./date-picker.calendar";
import type { DatePickerContentProps } from "./date-picker.types";

export function DatePickerContent(props: DatePickerContentProps) {
  const [local, rest] = splitProps(props, ["mount", "class", "children"]);
  return (
    <OverlayPortal {...(local.mount ? { mount: local.mount } : {})}>
      <ArkDatePicker.Positioner class="nui-date-positioner">
        <ArkDatePicker.Content
          {...rest}
          class={["nui-date-content", local.class].filter(Boolean).join(" ")}
        >
          {local.children ?? <DatePickerCalendar />}
        </ArkDatePicker.Content>
      </ArkDatePicker.Positioner>
    </OverlayPortal>
  );
}
