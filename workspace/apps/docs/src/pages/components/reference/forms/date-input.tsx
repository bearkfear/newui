import { DateInput, Field, parseDate } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Data de vencimento" : "Due date"}</Field.Label>
      <DateInput.Root
        name="dueDate"
        locale={pt() ? "pt-BR" : "en-US"}
        defaultValue={[parseDate("2028-02-29")]}
      >
        <DateInput.Control />
      </DateInput.Root>
    </Field.Root>
  );
}
