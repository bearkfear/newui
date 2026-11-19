import { Badge, Text } from "@egcs/newui/content";

export function BadgeExample(props: { locale?: "pt-BR" | "en" }) {
  return (
    <div style={{ display: "flex", "align-items": "center", gap: "0.75rem" }}>
      <Text>{props.locale === "pt-BR" ? "Relatório mensal" : "Monthly report"}</Text>
      <Badge tone="success" rounded>
        {props.locale === "pt-BR" ? "Publicado" : "Published"}
      </Badge>
    </div>
  );
}
