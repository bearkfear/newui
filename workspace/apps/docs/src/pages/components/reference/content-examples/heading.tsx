import { Heading, Text } from "@egcs/newui/content";

export function HeadingExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div style={{ display: "grid", gap: "0.375rem" }}>
      <Heading as="h3" size="3">
        {pt() ? "Atividade do projeto" : "Project activity"}
      </Heading>
      <Text tone="muted">
        {pt() ? "Mudanças registradas nesta semana." : "Changes recorded this week."}
      </Text>
    </div>
  );
}
