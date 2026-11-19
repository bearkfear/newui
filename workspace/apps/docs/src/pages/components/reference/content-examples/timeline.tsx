import { Timeline } from "@egcs/newui/content";

export function TimelineExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <Timeline.Root density="compact" aria-label={pt() ? "Histórico do pedido" : "Order history"}>
      <Timeline.Item status="complete">
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Title>{pt() ? "Pedido confirmado" : "Order confirmed"}</Timeline.Title>
          <Timeline.Time dateTime="2026-10-28T09:00:00-03:00">09:00</Timeline.Time>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item status="current">
        <Timeline.Indicator />
        <Timeline.Content>
          <Timeline.Title>{pt() ? "Em preparação" : "Preparing for shipment"}</Timeline.Title>
          <Timeline.Description>
            {pt() ? "Os itens estão sendo embalados." : "Your items are being packed."}
          </Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  );
}
