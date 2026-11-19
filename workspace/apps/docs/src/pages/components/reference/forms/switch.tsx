import { Field, Switch } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root>
      <Switch.Root name="notifications" defaultChecked>
        <Switch.Control />
        <Switch.Label>{pt() ? "Ativar notificações" : "Enable notifications"}</Switch.Label>
      </Switch.Root>
      <Field.Description>
        {pt()
          ? "Receba atualizações sobre seu workspace."
          : "Receive updates about your workspace."}
      </Field.Description>
    </Field.Root>
  );
}
