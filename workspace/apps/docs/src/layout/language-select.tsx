import { createListCollection, Select } from "@egcs/newui/forms";
import { For } from "solid-js";
import type { Locales } from "../i18n/i18n-types";
import { isLocale } from "../i18n/i18n-util";

const languageOptions = createListCollection<{ label: string; value: Locales }>({
  items: [
    { label: "🇧🇷 pt-BR", value: "pt-BR" },
    { label: "🇺🇸 EN", value: "en" },
  ],
});

type LanguageSelectProps = {
  value: () => Locales;
  label: string;
  onChange: (locale: Locales) => void;
};

export function LanguageSelect(props: LanguageSelectProps) {
  return (
    <Select.Root
      aria-label={props.label}
      class="w-[7.5rem] shrink-0"
      collection={languageOptions}
      size="sm"
      value={[props.value()]}
      onValueChange={(details) => {
        const [nextLocale] = details.value;
        if (nextLocale && isLocale(nextLocale)) props.onChange(nextLocale);
      }}
    >
      <Select.Control>
        <Select.Trigger aria-label={props.label}>
          <Select.ValueText />
          <Select.Indicator />
        </Select.Trigger>
      </Select.Control>
      <Select.Content>
        <For each={languageOptions.items}>
          {(item) => (
            <Select.Item item={item}>
              <Select.ItemText>{item.label}</Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          )}
        </For>
      </Select.Content>
    </Select.Root>
  );
}
