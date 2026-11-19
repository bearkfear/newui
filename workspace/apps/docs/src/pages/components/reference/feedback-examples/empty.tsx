import { Button } from "@egcs/newui/actions";
import { Badge, Card } from "@egcs/newui/content";
import { Empty } from "@egcs/newui/feedback";
import { createSignal, Show } from "solid-js";

export function EmptyExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [created, setCreated] = createSignal(false);

  return (
    <Show
      when={!created()}
      fallback={
        <Card.Root variant="soft">
          <Card.Header>
            <Card.Title as="h3">{pt() ? "Meu primeiro projeto" : "My first project"}</Card.Title>
            <Card.Description>
              {pt() ? "Espaço de trabalho pessoal" : "Personal workspace"}
            </Card.Description>
          </Card.Header>
          <Card.Footer>
            <Badge tone="success">{pt() ? "Criado" : "Created"}</Badge>
          </Card.Footer>
        </Card.Root>
      }
    >
      <Empty.Root layout="compact">
        <Empty.Icon />
        <Empty.Content>
          <Empty.Title as="h3">{pt() ? "Nenhum projeto" : "No projects yet"}</Empty.Title>
          <Empty.Description>
            {pt()
              ? "Crie um projeto para organizar seu trabalho."
              : "Create a project to organize your work."}
          </Empty.Description>
        </Empty.Content>
        <Empty.Actions>
          <Button size="sm" onClick={() => setCreated(true)}>
            {pt() ? "Criar projeto" : "Create project"}
          </Button>
        </Empty.Actions>
      </Empty.Root>
    </Show>
  );
}
