import { Button } from "../../../actions/button/button";
import { Dialog } from "../../../overlays/dialog/dialog";
import { DateRangePicker } from "../../date-range-picker/date-range-picker";
import { parseDate } from "../date.value";
import { DateDemo } from "./date-demo";

export function DateDialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(props) => <Button {...props()}>Schedule in Dialog</Button>} />
      <Dialog.Content size="md">
        <Dialog.Header>
          <Dialog.Title>Schedule a trip</Dialog.Title>
          <Dialog.Description>
            Calendar focus and Escape stay within the active overlay.
          </Dialog.Description>
          <Dialog.CloseTrigger />
        </Dialog.Header>
        <Dialog.Body>
          <div data-nui-theme="dark" class="date-demo-panel">
            <DateDemo
              kind="range"
              locale="pt-BR"
              label="Travel period in a nested dark scope"
              numOfMonths={2}
              defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
            />
          </div>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function TwoMonthsExample() {
  return (
    <DateDemo
      kind="range"
      locale="en-US"
      numOfMonths={2}
      defaultOpen
      defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
      description="Two months on wide screens; one month below 42rem. Resize the viewport while open."
    />
  );
}

export function PresetRangeExample() {
  return (
    <DateRangePicker.Root
      locale="pt-BR"
      defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
    >
      <DateRangePicker.Label>Travel period with presets</DateRangePicker.Label>
      <DateRangePicker.Control>
        <DateRangePicker.Input index={0} />
        <DateRangePicker.Input index={1} />
        <DateRangePicker.Trigger />
        <DateRangePicker.ClearTrigger />
      </DateRangePicker.Control>
      <DateRangePicker.Content>
        <DateRangePicker.Calendar />
        <DateRangePicker.PresetTrigger
          value={[parseDate("2028-02-21"), parseDate("2028-02-25")]}
          class="date-demo-preset"
        >
          February workweek
        </DateRangePicker.PresetTrigger>
      </DateRangePicker.Content>
    </DateRangePicker.Root>
  );
}
