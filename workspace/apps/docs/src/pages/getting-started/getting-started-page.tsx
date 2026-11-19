import { Heading, Separator, Text, VerticalMenu } from "@egcs/newui";
import { For, Match, Show, Switch } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";
import { getLocalizedPath } from "../../lib/localized-path";
import { FirstComponent, Installation, Overview, TailwindSetup } from "./getting-started-articles";
import { type GuideCopy, type GuidePage, guideCopy, guidePages } from "./getting-started-content";
import { GuideContents } from "./guide-contents";
import { ThemeGuide } from "./theme-guide";

function guidePath(page: GuidePage, locale: Locales) {
  const path = page === "overview" ? "/getting-started/" : `/getting-started/${page}/`;
  return getLocalizedPath(path, locale);
}

export function GettingStartedPage(props: { locale: Locales; page?: GuidePage }) {
  const page = () => props.page ?? "overview";
  const text = () => guideCopy[props.locale];

  return (
    <div class="grid min-w-0 items-start gap-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-8 xl:grid-cols-[12rem_minmax(0,1fr)_12rem]">
      <aside class="border-b border-border pb-4 lg:sticky lg:top-24 lg:col-start-1 lg:row-start-1 lg:row-span-2 xl:row-span-1 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4">
        <VerticalMenu.Root aria-label={text().group} density="compact">
          <VerticalMenu.Group>
            <VerticalMenu.Label>{text().group}</VerticalMenu.Label>
            <VerticalMenu.List>
              <For each={guidePages}>
                {(item) => (
                  <VerticalMenu.Item>
                    <VerticalMenu.Link
                      href={guidePath(item, props.locale)}
                      current={page() === item}
                    >
                      {text().pages[item].title}
                    </VerticalMenu.Link>
                  </VerticalMenu.Item>
                )}
              </For>
            </VerticalMenu.List>
          </VerticalMenu.Group>
        </VerticalMenu.Root>
      </aside>

      <GuideContents page={page()} locale={props.locale} />

      <article class="grid min-w-0 max-w-3xl gap-8 lg:col-start-2 xl:row-start-1">
        <header class="grid gap-3">
          <Heading as="h1" size="2" class="m-0">
            {text().pages[page()].title}
          </Heading>
          <Text size="4" tone="muted" class="m-0">
            {text().pages[page()].description}
          </Text>
        </header>
        <Separator decorative />
        <Switch>
          <Match when={page() === "overview"}>
            <Overview
              text={text()}
              installHref={guidePath("installation", props.locale)}
              tailwindHref={guidePath("tailwind", props.locale)}
            />
          </Match>
          <Match when={page() === "installation"}>
            <Installation text={text()} />
          </Match>
          <Match when={page() === "first-component"}>
            <FirstComponent text={text()} />
          </Match>
          <Match when={page() === "themes-and-tokens"}>
            <ThemeGuide locale={props.locale} text={text()} />
          </Match>
          <Match when={page() === "tailwind"}>
            <TailwindSetup text={text()} />
          </Match>
        </Switch>
        <GuidePagination page={page()} locale={props.locale} text={text()} />
      </article>
    </div>
  );
}

function GuidePagination(props: { page: GuidePage; locale: Locales; text: GuideCopy }) {
  const index = () => guidePages.indexOf(props.page);
  const links = () => [
    { page: guidePages[index() - 1], label: props.text.previous, rel: "prev", class: "" },
    {
      page: guidePages[index() + 1],
      label: props.text.next,
      rel: "next",
      class: "sm:col-start-2 sm:text-right",
    },
  ];
  return (
    <nav
      aria-label={`${props.text.previous} / ${props.text.next}`}
      class="grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
    >
      <For each={links()}>
        {(link) => (
          <Show when={link.page}>
            {(target) => (
              <a
                class={`grid gap-1 rounded-lg border border-border p-4 text-foreground no-underline hover:bg-surface ${link.class}`}
                href={guidePath(target(), props.locale)}
                rel={link.rel}
              >
                <Text as="span" size="7" tone="muted">
                  {link.label}
                </Text>
                <Text as="span" class="font-medium">
                  {props.text.pages[target()].title}
                </Text>
              </a>
            )}
          </Show>
        )}
      </For>
    </nav>
  );
}
