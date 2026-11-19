import { Badge, BadgeGroup, Text } from "@egcs/newui/content";

export function BadgeGroupExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div style={{ display: "grid", gap: "0.75rem", "justify-items": "start" }}>
      <Text size="7" tone="muted">
        {pt() ? "Etiquetas do projeto" : "Project labels"}
      </Text>
      <BadgeGroup>
        <Badge tone="primary">Design</Badge>
        <Badge tone="info">{pt() ? "Pesquisa" : "Research"}</Badge>
        <Badge tone="success">{pt() ? "Aprovado" : "Approved"}</Badge>
      </BadgeGroup>
      <BadgeGroup attached>
        <Badge tone="neutral">{pt() ? "Versão" : "Version"}</Badge>
        <Badge tone="primary" variant="solid">
          2.0
        </Badge>
      </BadgeGroup>
    </div>
  );
}
