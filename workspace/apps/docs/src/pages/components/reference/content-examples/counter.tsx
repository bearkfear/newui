import { Counter, Text } from "@egcs/newui/content";

export function CounterExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div style={{ display: "flex", "align-items": "center", gap: "0.75rem" }}>
      <Text>{pt() ? "Pedidos pendentes" : "Pending orders"}</Text>
      <Counter value={128} max={99} tone="warning" />
    </div>
  );
}
