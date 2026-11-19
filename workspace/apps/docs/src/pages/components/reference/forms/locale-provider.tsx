import { DateInput, Field, LocaleProvider, parseDate } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <LocaleProvider locale={pt() ? "pt-BR" : "en-US"}>
      <Field.Root style={{ width: "min(100%, 22rem)" }}>
        <Field.Label>{pt() ? "Data do evento" : "Event date"}</Field.Label>
        <DateInput.Root defaultValue={[parseDate("2028-02-29")]}>
          <DateInput.Control />
        </DateInput.Root>
      </Field.Root>
      <Field.Root style={{ width: "min(100%, 22rem)" }}>
        <Field.Label>{pt() ? "Mesma data em francês" : "Same date in French"}</Field.Label>
        <DateInput.Root locale="fr-FR" defaultValue={[parseDate("2028-02-29")]}>
          <DateInput.Control />
        </DateInput.Root>
      </Field.Root>
    </LocaleProvider>
  );
}
