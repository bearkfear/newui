import { createListCollection, Field, Select } from "@egcs/newui/forms";
import { createMemo, For } from "solid-js";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const countries = createMemo(() =>
    createListCollection({
      items: [
        { label: pt() ? "Brasil" : "Brazil", value: "br" },
        { label: "Chile", value: "cl" },
        { label: pt() ? "México" : "Mexico", value: "mx" },
      ],
    }),
  );
  return (
    <Field.Root style={{ width: "min(100%, 22rem)" }}>
      <Field.Label>{pt() ? "País de destino" : "Destination country"}</Field.Label>
      <Select.Root collection={countries()} name="country" defaultValue={["br"]}>
        <Select.Trigger>
          <Select.ValueText placeholder={pt() ? "Escolha um país" : "Choose a country"} />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Content>
          <For each={countries().items}>
            {(item) => (
              <Select.Item item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            )}
          </For>
        </Select.Content>
      </Select.Root>
    </Field.Root>
  );
}
