import { getDayOfWeek } from "@internationalized/date";
import { createSignal } from "solid-js";
import type { DateSelection } from "../date.types";
import { parseDate } from "../date.value";
import { DateDemo, type DateDemoKind } from "./date-demo";

export function DateConstraints(props: { kind: DateDemoKind }) {
  return (
    <div class="date-demo-stack">
      <DateDemo
        kind={props.kind}
        locale="pt-BR"
        label="Weekdays in February 2028"
        min={parseDate("2028-02-01")}
        max={parseDate("2028-02-29")}
        placeholderValue={parseDate("2028-02-15")}
        isDateUnavailable={(date) => [0, 6].includes(getDayOfWeek(date, "en-US"))}
        description="Leap day is valid. Weekend endpoints are unavailable; a range may cross weekends. Dates outside the bounds cannot be selected."
      />
      <DateDemo
        kind={props.kind}
        locale="en-US"
        label="Monday-first override"
        startOfWeek={1}
        defaultValue={[parseDate("2028-02-29")]}
        description="The locale stays en-US; only the first weekday changes."
      />
    </div>
  );
}

export function PartialRangeExample() {
  const [value, setValue] = createSignal<DateSelection>([null, parseDate("2028-03-05")]);
  return (
    <div class="date-demo-stack">
      <DateDemo
        kind="range"
        locale="pt-BR"
        label="End entered first"
        value={value()}
        onValueChange={(details) => setValue(details.value)}
        description="Enter the start date. Reversed endpoints are invalid; typed dates are not silently reordered."
      />
      <output class="text-fields-demo-code">
        {JSON.stringify(value().map((date) => date?.toString() ?? null))}
      </output>
      <button
        type="button"
        onClick={() => setValue([parseDate("2028-03-10"), parseDate("2028-03-05")])}
      >
        Set a reversed range
      </button>
      <button type="button" onClick={() => setValue([parseDate("2028-03-01")])}>
        Set only the start
      </button>
    </div>
  );
}
