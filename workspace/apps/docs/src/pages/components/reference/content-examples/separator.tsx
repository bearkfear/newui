import { Separator, Text } from "@egcs/newui/content";

export function SeparatorExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div style={{ display: "grid", gap: "0.75rem", width: "100%", "max-width": "24rem" }}>
      <Text>{pt() ? "Projeto Atlas" : "Atlas project"}</Text>
      <Separator />
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Text as="span" size="7" tone="muted">
          Design
        </Text>
        <Separator orientation="vertical" decorative />
        <Text as="span" size="7" tone="muted">
          {pt() ? "Engenharia" : "Engineering"}
        </Text>
      </div>
    </div>
  );
}
