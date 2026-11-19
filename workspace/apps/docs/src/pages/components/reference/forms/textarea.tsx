import { Field, Textarea } from "@egcs/newui/forms";
import { createSignal } from "solid-js";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [length, setLength] = createSignal(0);
  return (
    <Field.Root style={{ width: "min(100%, 26rem)" }}>
      <Field.Label>{pt() ? "Mensagem" : "Message"}</Field.Label>
      <Textarea
        maxlength={140}
        name="message"
        placeholder={pt() ? "Escreva sua mensagem" : "Write your message"}
        resize="vertical"
        rows={3}
        onInput={(event) => setLength(event.currentTarget.value.length)}
      />
      <Field.Description>{length()} / 140</Field.Description>
    </Field.Root>
  );
}
