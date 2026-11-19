import { Field, Input } from "@egcs/newui/forms";
import { createSignal } from "solid-js";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [email, setEmail] = createSignal("ana@example");
  const invalid = () => email().length > 0 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email());
  return (
    <Field.Root invalid={invalid()} required style={{ width: "min(100%, 26rem)" }}>
      <Field.Label>
        {pt() ? "E-mail da conta" : "Account email"} <Field.RequiredIndicator />
      </Field.Label>
      <Input
        autocomplete="email"
        defaultValue="ana@example"
        name="email"
        type="email"
        onInput={(event) => setEmail(event.currentTarget.value)}
      />
      <Field.Description>
        {pt() ? "Usado nas notificações da conta." : "Used for account notifications."}
      </Field.Description>
      <Field.ErrorText>
        {pt()
          ? "Inclua o domínio completo, como example.com."
          : "Include the full domain, such as example.com."}
      </Field.ErrorText>
    </Field.Root>
  );
}
