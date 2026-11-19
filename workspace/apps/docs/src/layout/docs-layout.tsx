import { Container, Navbar } from "@egcs/newui";
import { createColorMode } from "@egcs/newui/theme";
import { A, useLocation, useNavigate } from "@solidjs/router";
import {
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  type ParentProps,
  Show,
  Suspense,
} from "solid-js";
import TypesafeI18n, { useI18nContext } from "../i18n/i18n-solid";
import type { Locales } from "../i18n/i18n-types";
import { getLocaleFromPath, getLocalizedPath } from "../lib/localized-path";
import { ThemeSettingsProvider } from "../lib/theme-settings";
import { AppearanceControl } from "./appearance-control";
import { DocsFooter } from "./docs-footer";
import { LanguageSelect } from "./language-select";
import { PageHead } from "./page-head";

export function DocsLayout(props: ParentProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = createMemo(() => getLocaleFromPath(location.pathname));

  createEffect(() => {
    document.documentElement.lang = locale() === "en" ? "en-US" : "pt-BR";
  });

  const changeLocale = (nextLocale: Locales) => {
    const path = getLocalizedPath(location.pathname, nextLocale);
    navigate(`${path}${window.location.search}${window.location.hash}`);
  };

  return (
    <>
      <PageHead />
      <Show when={locale()} keyed>
        {(currentLocale) => (
          <TypesafeI18n locale={currentLocale}>
            <LayoutContent {...props} locale={locale} onLocaleChange={changeLocale} />
          </TypesafeI18n>
        )}
      </Show>
    </>
  );
}

function LayoutContent(
  props: ParentProps<{
    locale: () => Locales;
    onLocaleChange: (locale: Locales) => void;
  }>,
) {
  const location = useLocation();
  const isHome = () => ["/", "/en", "/en/"].includes(location.pathname);
  const colorMode = createColorMode({ storageKey: "newui-docs-theme" });
  const { LL } = useI18nContext();
  const [scrolled, setScrolled] = createSignal(false);
  onMount(() => {
    const update = () => setScrolled(window.scrollY > 0);
    update();
    window.addEventListener("scroll", update, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", update));
  });

  return (
    <ThemeSettingsProvider mode={colorMode.mode} setMode={colorMode.setMode}>
      <div
        class="flex min-h-screen flex-col bg-background text-foreground"
        style={{
          "background-color": "var(--nui-background)",
          "background-image": isHome()
            ? "radial-gradient(ellipse 85% 100% at 50% 0%, color-mix(in srgb, var(--nui-primary) 24%, transparent), transparent 100%)"
            : "none",
          "background-size": "100% 720px",
          "background-repeat": "no-repeat",
        }}
      >
        <header class="sticky top-0 z-50" classList={{ "backdrop-blur-xl": scrolled() }}>
          <Navbar.Root
            aria-label={LL().navigation.main()}
            class="border-border/70 [&>div]:grid-cols-[auto_minmax(0,1fr)_auto]"
            style={{
              "background-color": scrolled()
                ? "color-mix(in srgb, var(--nui-background) 75%, transparent)"
                : "transparent",
            }}
          >
            <Navbar.Brand
              href={getLocalizedPath("/", props.locale())}
              aria-label={LL().brand.home()}
              class="text-2xl font-bold tracking-[-0.055em]"
            >
              newui<span class="text-primary">.</span>
            </Navbar.Brand>
            <Navbar.Actions class="col-start-2 row-start-1 flex-nowrap items-center justify-self-end md:col-start-3">
              <AppearanceControl
                mode={colorMode.mode()}
                labels={{
                  appearance: LL().settings.appearance(),
                  light: LL().settings.light(),
                  dark: LL().settings.dark(),
                  system: LL().settings.system(),
                }}
                onModeChange={colorMode.setMode}
              />
              <LanguageSelect
                value={() => props.locale()}
                label={LL().settings.language()}
                onChange={props.onLocaleChange}
              />
              <a
                aria-label={LL().brand.github()}
                class="hidden size-8 items-center justify-center rounded-md text-muted-foreground no-underline transition-colors hover:bg-surface hover:text-foreground md:inline-flex"
                href="https://github.com/bearkfear/newui"
                rel="noreferrer"
                target="_blank"
                title={LL().brand.githubTooltip()}
              >
                <svg class="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.333-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.097c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.48 5.922.431.372.816 1.102.816 2.222 0 1.604-.015 2.896-.015 3.29 0 .322.216.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
                <span class="sr-only">{LL().brand.github()}</span>
              </a>
              <Navbar.Toggle aria-label={LL().navigation.menu()}>
                {LL().navigation.menu()}
              </Navbar.Toggle>
            </Navbar.Actions>
            <DocsNavigation locale={props.locale()} />
          </Navbar.Root>
        </header>
        <main id="main-content" class="flex-1">
          <Container size="lg" class="py-12 max-sm:py-8">
            <Suspense>{props.children}</Suspense>
          </Container>
        </main>
        <DocsFooter locale={props.locale()} />
      </div>
    </ThemeSettingsProvider>
  );
}

function DocsNavigation(props: { locale: Locales }) {
  const { LL } = useI18nContext();

  return (
    <Navbar.Content class="md:col-start-2 md:row-start-1">
      <Navbar.List>
        <Navbar.Item value="getting-started">
          <Navbar.Link
            asChild={(linkProps) => (
              <A {...linkProps()} href={getLocalizedPath("/getting-started/", props.locale)}>
                {LL().navigation.getStarted()}
              </A>
            )}
          />
        </Navbar.Item>
        <Navbar.Item value="components">
          <Navbar.Link
            asChild={(linkProps) => (
              <A {...linkProps()} href={getLocalizedPath("/components/", props.locale)}>
                {LL().navigation.components()}
              </A>
            )}
          />
        </Navbar.Item>
        <Navbar.Item value="themes">
          <Navbar.Link
            asChild={(linkProps) => (
              <A {...linkProps()} href={getLocalizedPath("/themes/", props.locale)}>
                {LL().navigation.themes()}
              </A>
            )}
          />
        </Navbar.Item>
      </Navbar.List>
    </Navbar.Content>
  );
}
