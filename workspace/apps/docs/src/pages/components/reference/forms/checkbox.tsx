import { Checkbox, Field } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root required>
      <Checkbox.Root name="terms" value="accepted">
        <Checkbox.Control />
        <Checkbox.Label>
          {pt() ? "Aceito os termos de uso" : "I accept the terms of use"}
        </Checkbox.Label>
      </Checkbox.Root>
      <Field.Description>
        {pt() ? "Obrigatório para criar uma conta." : "Required to create an account."}
      </Field.Description>
    </Field.Root>
  );
}
