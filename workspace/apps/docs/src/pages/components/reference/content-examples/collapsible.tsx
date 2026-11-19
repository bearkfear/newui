import { Collapsible, Text } from "@egcs/newui/content";

export function CollapsibleExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <Collapsible.Root variant="soft" style={{ width: "100%", "max-width": "26rem" }}>
      <Collapsible.Trigger>
        {pt() ? "Detalhes do envio" : "Shipping details"}
        <Collapsible.Indicator />
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Text>
          {pt()
            ? "O pedido sai do centro de distribuição em dois dias úteis."
            : "The order leaves the warehouse within two business days."}
        </Text>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
