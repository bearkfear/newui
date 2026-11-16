import { Navbar } from "@egcs/newui";
import { createListCollection, Select } from "@egcs/newui/forms";
import { createColorMode } from "@egcs/newui/theme";
import { useLocale } from "@kobalte/solidbase/client";
import { A } from "@solidjs/router";
import { For, type ParentProps } from "solid-js";
import { messages } from "../i18n/messages";
import { AppearanceControl } from "./AppearanceControl";

const languageOptions = createListCollection({
  items: [
    { label: "pt-BR", value: "pt", flag: "🇧🇷" },
    { label: "EN", value: "en", flag: "🇺🇸" },
  ],
});

function LanguageSelect(props: { label: string }) {
  const locale = useLocale();

  return (
    <div class="w-[7rem] shrink-0">
      <Select.Root
        collection={languageOptions}
        size="sm"
        value={[locale.currentLocale().option?.name ?? "pt"]}
        onValueChange={(details) => {
          const nextLocale = locale.locales.find(
            (option) => option.option?.name === details.value[0],
          );
          if (nextLocale) locale.setLocale(nextLocale);
        }}
      >
        <Select.Control>
          <Select.Trigger aria-label={props.label} class="w-full px-2">
            <span class="flex min-w-0 items-center gap-2">
              <span aria-hidden="true" class="shrink-0">
                {locale.currentLocale().option?.name === "en" ? "🇺🇸" : "🇧🇷"}
              </span>
              <Select.ValueText />
            </span>
            <Select.Indicator />
          </Select.Trigger>
        </Select.Control>
        <Select.Content>
          <For each={languageOptions.items}>
            {(item) => (
              <Select.Item item={item} class="whitespace-nowrap">
                <span aria-hidden="true" class="shrink-0">
                  {item.flag}
                </span>
                <Select.ItemText class="whitespace-nowrap">{item.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            )}
          </For>
        </Select.Content>
      </Select.Root>
    </div>
  );
}

export default function Layout(props: ParentProps) {
  const colorMode = createColorMode({ storageKey: "newui-docs-theme" });
  const locale = useLocale();
  const copy = () => messages[locale.currentLocale().option?.name === "en" ? "en" : "pt"];
  const localizedPath = (path: string) => {
    const hashIndex = path.indexOf("#");
    const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
    const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
    return `${locale.applyPathPrefix(pathname || "/")}${hash}`;
  };

  return (
    <div class="min-h-screen bg-background text-foreground">
      <header class="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <Navbar.Root
          aria-label={copy().mainNavigation}
          class="border-border/80 bg-background/90 [&>div]:grid-cols-[auto_minmax(0,1fr)_auto]"
        >
          <Navbar.Brand
            href={localizedPath("/")}
            aria-label={copy().home}
            class="text-2xl font-bold tracking-[-0.055em]"
          >
            newui<span class="text-primary">.</span>
          </Navbar.Brand>
          <Navbar.Actions class="col-start-2 row-start-1 flex-nowrap justify-self-end md:col-start-3">
            <AppearanceControl
              mode={colorMode.mode()}
              copy={copy()}
              onModeChange={colorMode.setMode}
            />
            <LanguageSelect label={copy().language} />
            <a
              aria-label={copy().github}
              class="hidden size-8 items-center justify-center rounded-md text-muted-foreground no-underline transition-colors hover:bg-surface hover:text-foreground md:inline-flex"
              href="https://github.com/bearkfear/newui"
              rel="noreferrer"
              target="_blank"
              title={copy().githubTooltip}
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.097c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.48 5.922.431.372.816 1.102.816 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
              </svg>
              <span class="sr-only">{copy().github}</span>
            </a>
            <Navbar.Toggle aria-label={copy().menu}>{copy().menu}</Navbar.Toggle>
          </Navbar.Actions>
          <Navbar.Content class="md:col-start-2 md:row-start-1">
            <Navbar.List>
              <Navbar.Item value="getting-started">
                <Navbar.Link
                  asChild={(linkProps) => (
                    <A {...linkProps()} href={localizedPath("/getting-started/")}>
                      {copy().start}
                    </A>
                  )}
                />
              </Navbar.Item>
              <Navbar.Item value="components">
                <Navbar.Link
                  asChild={(linkProps) => (
                    <a {...linkProps()} aria-current="false" href={localizedPath("/#componentes")}>
                      {copy().components}
                    </a>
                  )}
                />
              </Navbar.Item>
              <Navbar.Item value="themes">
                <Navbar.Link
                  asChild={(linkProps) => (
                    <a {...linkProps()} aria-current="false" href={localizedPath("/#temas")}>
                      {copy().themes}
                    </a>
                  )}
                />
              </Navbar.Item>
            </Navbar.List>
            <a
              class="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground no-underline hover:bg-surface hover:text-foreground md:hidden"
              href="https://github.com/bearkfear/newui"
              rel="noreferrer"
              target="_blank"
            >
              {copy().github}
            </a>
          </Navbar.Content>
        </Navbar.Root>
      </header>
      <main
        class="mx-auto w-[calc(100%-3rem)] max-w-6xl py-12 max-sm:w-[calc(100%-2rem)] max-sm:py-8"
        id="main-content"
      >
        {props.children}
      </main>
    </div>
  );
}
