import { Field, MaskedInput } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "Código do pedido" : "Order code"}</Field.Label>
      <MaskedInput
        name="orderCode"
        mask="###-###"
        inputmode="numeric"
        defaultValue="123456"
        submitValue="raw"
      />
      <Field.Description>
        {pt()
          ? "Digite seis dígitos. O hífen é inserido automaticamente."
          : "Enter six digits. The hyphen is inserted automatically."}
      </Field.Description>
    </Field.Root>
  );
}
