import { DatePicker, Field, parseDate } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Data de partida" : "Departure date"}</Field.Label>
      <DatePicker.Root
        name="departure"
        locale={pt() ? "pt-BR" : "en-US"}
        defaultValue={[parseDate("2028-02-29")]}
      >
        <DatePicker.Control>
          <DatePicker.Input />
          <DatePicker.Trigger />
          <DatePicker.ClearTrigger />
        </DatePicker.Control>
        <DatePicker.Content />
      </DatePicker.Root>
    </Field.Root>
  );
}
