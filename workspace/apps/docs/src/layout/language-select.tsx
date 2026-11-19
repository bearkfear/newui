import { createListCollection, Select } from "@egcs/newui/forms";
import { For } from "solid-js";
import {
  type DocsLocale,
  docsLocaleOptions,
  getLocaleOption,
  isDocsLocale,
} from "../i18n/docs-locales";

const languageOptions = createListCollection<{
  label: string;
  value: DocsLocale;
  htmlLang: string;
}>({
  items: [...docsLocaleOptions],
});

type LanguageSelectProps = {
  value: () => DocsLocale;
  label: string;
  onChange: (locale: DocsLocale) => void;
};

export function LanguageSelect(props: LanguageSelectProps) {
  return (
    <Select.Root
      aria-label={props.label}
      class="w-36 shrink-0 sm:w-40"
      collection={languageOptions}
      size="sm"
      value={[props.value()]}
      onValueChange={(details) => {
        const [nextLocale] = details.value;
        if (nextLocale && isDocsLocale(nextLocale)) props.onChange(nextLocale);
      }}
    >
      <Select.Control>
        <Select.Trigger aria-label={props.label}>
          <Select.ValueText lang={getLocaleOption(props.value()).htmlLang} />
          <Select.Indicator />
        </Select.Trigger>
      </Select.Control>
      <Select.Content>
        <For each={languageOptions.items}>
          {(item) => (
            <Select.Item item={item}>
              <Select.ItemText class="whitespace-nowrap" lang={item.htmlLang}>
                {item.label}
              </Select.ItemText>
              <Select.ItemIndicator />
            </Select.Item>
          )}
        </For>
      </Select.Content>
    </Select.Root>
  );
}
