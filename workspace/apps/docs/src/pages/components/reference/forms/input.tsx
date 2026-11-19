import { Field, Input } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root required style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "E-mail profissional" : "Work email"}</Field.Label>
      <Input autocomplete="email" name="email" type="email" placeholder="ana@example.com" />
      <Field.Description>
        {pt()
          ? "Usaremos este endereço para enviar o convite."
          : "We will use this address to send the invitation."}
      </Field.Description>
    </Field.Root>
  );
}
