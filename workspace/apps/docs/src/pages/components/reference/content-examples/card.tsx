import { Badge, Card, Text } from "@egcs/newui/content";

export function CardExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <Card.Root as="article" variant="elevated" style={{ width: "100%", "max-width": "24rem" }}>
      <Card.Header>
        <Card.Title as="h3">{pt() ? "Portal de clientes" : "Customer portal"}</Card.Title>
        <Card.Description>
          {pt() ? "Entrega da versão inicial" : "Initial release"}
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Text>
          {pt()
            ? "A equipe está revisando o fluxo de acesso."
            : "The team is reviewing the sign-in flow."}
        </Text>
      </Card.Content>
      <Card.Footer>
        <Badge tone="info">{pt() ? "Em revisão" : "In review"}</Badge>
      </Card.Footer>
    </Card.Root>
  );
}
