import { Field, NumberInput } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Quantidade em estoque" : "Stock quantity"}</Field.Label>
      <NumberInput
        defaultValue="1250"
        locale={pt() ? "pt-BR" : "en-US"}
        name="quantity"
        min="0"
        maximumFractionDigits={0}
        submitValue="raw"
      />
      <Field.Description>
        {pt()
          ? "Informe um número inteiro maior ou igual a zero."
          : "Enter a whole number greater than or equal to zero."}
      </Field.Description>
    </Field.Root>
  );
}
