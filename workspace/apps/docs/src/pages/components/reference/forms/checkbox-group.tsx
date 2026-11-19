import { Checkbox, CheckboxGroup } from "@egcs/newui/forms";
import { For } from "solid-js";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const channels = () => [
    { label: pt() ? "E-mail" : "Email", value: "email" },
    { label: "SMS", value: "sms" },
    { label: pt() ? "No aplicativo" : "In-app", value: "in-app" },
  ];
  return (
    <CheckboxGroup.Root name="channels" defaultValue={["email"]} maxSelectedValues={2}>
      <CheckboxGroup.Label>
        {pt() ? "Canais de notificação" : "Notification channels"}
      </CheckboxGroup.Label>
      <For each={channels()}>
        {(channel) => (
          <Checkbox.Root value={channel.value}>
            <Checkbox.Control />
            <Checkbox.Label>{channel.label}</Checkbox.Label>
          </Checkbox.Root>
        )}
      </For>
    </CheckboxGroup.Root>
  );
}
