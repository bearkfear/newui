import { DateRangePicker, Field, parseDate } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 32rem)" }}>
      <Field.Label>{pt() ? "Período da viagem" : "Travel period"}</Field.Label>
      <DateRangePicker.Root
        name="trip"
        locale={pt() ? "pt-BR" : "en-US"}
        defaultValue={[parseDate("2028-02-29"), parseDate("2028-03-05")]}
      >
        <DateRangePicker.Control>
          <DateRangePicker.Input index={0} />
          <DateRangePicker.Input index={1} />
          <DateRangePicker.Trigger />
          <DateRangePicker.ClearTrigger />
        </DateRangePicker.Control>
        <DateRangePicker.Content />
      </DateRangePicker.Root>
    </Field.Root>
  );
}
