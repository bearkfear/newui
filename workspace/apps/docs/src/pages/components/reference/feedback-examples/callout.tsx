import { Button } from "@egcs/newui/actions";
import { Callout } from "@egcs/newui/feedback";
import { createSignal, Show } from "solid-js";

export function CalloutExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [visible, setVisible] = createSignal(true);

  return (
    <Show
      when={visible()}
      fallback={
        <Button variant="outline" onClick={() => setVisible(true)}>
          {pt() ? "Mostrar aviso" : "Show notice"}
        </Button>
      }
    >
      <Callout.Root tone="warning" style={{ width: "100%", "max-width": "28rem" }}>
        <Callout.Icon />
        <Callout.Content>
          <Callout.Title>
            {pt() ? "Revise o compartilhamento" : "Review sharing settings"}
          </Callout.Title>
          <Callout.Description>
            {pt()
              ? "Todos os membros podem acessar este projeto."
              : "All workspace members can access this project."}
          </Callout.Description>
        </Callout.Content>
        <Callout.CloseButton
          aria-label={pt() ? "Fechar aviso" : "Dismiss notice"}
          onClick={() => setVisible(false)}
        />
      </Callout.Root>
    </Show>
  );
}
