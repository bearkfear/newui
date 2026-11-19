import { Text } from "@egcs/newui/content";

export function TextExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div style={{ display: "grid", gap: "0.375rem" }}>
      <Text size="5">{pt() ? "Relatório de desempenho" : "Performance report"}</Text>
      <Text as="span" size="7" tone="muted">
        {pt() ? "Atualizado hoje às 10h30" : "Updated today at 10:30 AM"}
      </Text>
    </div>
  );
}
