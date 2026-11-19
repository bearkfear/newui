import { Card, Heading, Text } from "@egcs/newui";
import { For } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";
import { CatalogNavigation } from "./catalog-navigation";
import {
  componentAnchor,
  componentGroups,
  componentHref,
  hasComponentPage,
} from "./component-catalog";

const labels = {
  "pt-BR": {
    title: "Componentes",
    description:
      "Explore os componentes da NewUI por área. Os nomes abaixo correspondem às exportações que você pode importar no seu projeto.",
    navigation: "Áreas do catálogo",
  },
  en: {
    title: "Components",
    description:
      "Explore NewUI components by area. The names below match the exports you can import into your project.",
    navigation: "Catalog areas",
  },
};

export function ComponentsPage(props: { locale: Locales }) {
  const text = () => labels[props.locale];

  return (
    <div class="grid min-w-0 items-start gap-8 text-left lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-12">
      <CatalogNavigation locale={props.locale} label={text().navigation} />
      <article class="grid min-w-0 gap-8">
        <header class="grid max-w-2xl gap-3">
          <Heading as="h1" size="2" class="m-0">
            {text().title}
          </Heading>
          <Text size="4" tone="muted" class="m-0">
            {text().description}
          </Text>
        </header>
        <For each={componentGroups}>
          {(group) => (
            <section
              id={group.id}
              class="grid scroll-mt-24 gap-3"
              aria-labelledby={`${group.id}-title`}
            >
              <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <Heading as="h2" size="4" class="m-0" id={`${group.id}-title`}>
                  {group.label[props.locale]}
                </Heading>
                <code class="break-all font-mono text-sm text-muted-foreground">
                  @egcs/newui/{group.id}
                </code>
              </div>
              <Card.Root class="overflow-hidden">
                <ul class="m-0 grid list-none grid-cols-1 p-2 sm:grid-cols-2 xl:grid-cols-3">
                  <For each={group.components}>
                    {(name) => (
                      <li
                        id={componentAnchor(name)}
                        class="scroll-mt-24 rounded-md px-3 py-2 text-sm target:bg-primary-soft target:text-primary-text"
                      >
                        {hasComponentPage(name) ? (
                          <a
                            class="font-mono font-medium text-primary underline underline-offset-4"
                            href={componentHref(name, props.locale, true)}
                          >
                            {name}
                          </a>
                        ) : (
                          <code class="break-words font-mono">{name}</code>
                        )}
                      </li>
                    )}
                  </For>
                </ul>
              </Card.Root>
            </section>
          )}
        </For>
      </article>
    </div>
  );
}
