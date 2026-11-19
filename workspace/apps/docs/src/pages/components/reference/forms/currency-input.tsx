import { CurrencyInput, Field } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Orçamento do projeto" : "Project budget"}</Field.Label>
      <CurrencyInput
        currency={pt() ? "BRL" : "USD"}
        defaultValue="1250.50"
        locale={pt() ? "pt-BR" : "en-US"}
        min="0"
        name="budget"
        submitValue="raw"
      />
      <Field.Description>
        {pt()
          ? "Informe um valor maior ou igual a zero."
          : "Enter an amount greater than or equal to zero."}
      </Field.Description>
    </Field.Root>
  );
}
