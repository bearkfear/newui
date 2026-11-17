import { Container, Navbar } from "@egcs/newui";
import { createColorMode } from "@egcs/newui/theme";
import { A, useLocation, useNavigate } from "@solidjs/router";
import { createMemo, type ParentProps, Suspense } from "solid-js";
import { messages } from "../i18n/messages";
import { AppearanceControl } from "./appearance-control";

function LanguageSelect(props: {
  value: () => "pt" | "en";
  label: string;
  onChange: (locale: "pt" | "en") => void;
}) {
  return (
    <label class="sr-only">
      {props.label}
      <select
        aria-label={props.label}
        class="h-9 w-[7rem] shrink-0 rounded-md border border-border bg-background px-2 text-sm text-foreground"
        value={props.value()}
        onChange={(event) => {
          const nextLocale = event.currentTarget.value;
          if (nextLocale === "pt" || nextLocale === "en") props.onChange(nextLocale);
        }}
      >
        <option value="pt">🇧🇷 pt-BR</option>
        <option value="en">🇺🇸 EN</option>
      </select>
    </label>
  );
}

function getLocalizedPath(path: string, locale: "pt" | "en") {
  const pathname = path.startsWith("/en/") ? path.slice(3) : path === "/en" ? "/" : path;
  if (locale === "pt") return pathname || "/";
  return pathname === "/" ? "/en/" : `/en${pathname}`;
}

export default function Layout(props: ParentProps) {
  const colorMode = createColorMode({ storageKey: "newui-docs-theme" });
  const location = useLocation();
  const navigate = useNavigate();
  const locale = createMemo<"pt" | "en">(() =>
    location.pathname === "/en" || location.pathname.startsWith("/en/") ? "en" : "pt",
  );
  const copy = createMemo(() => messages[locale()]);

  const changeLocale = (nextLocale: "pt" | "en") => {
    const path = getLocalizedPath(location.pathname, nextLocale);
    navigate(`${path}${window.location.search}${window.location.hash}`);
  };

  return (
    <div class="min-h-screen bg-background text-foreground">
      <header class="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <Navbar.Root
          aria-label={copy().mainNavigation}
          class="border-border/80 bg-background/90 [&>div]:grid-cols-[auto_minmax(0,1fr)_auto]"
        >
          <Navbar.Brand
            href={getLocalizedPath("/", locale())}
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
            <LanguageSelect value={locale} label={copy().language} onChange={changeLocale} />
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
                    <A {...linkProps()} href={getLocalizedPath("/getting-started/", locale())}>
                      {copy().start}
                    </A>
                  )}
                />
              </Navbar.Item>
              <Navbar.Item value="components">
                <Navbar.Link
                  asChild={(linkProps) => (
                    <A {...linkProps()} href={`${getLocalizedPath("/", locale())}#componentes`}>
                      {copy().components}
                    </A>
                  )}
                />
              </Navbar.Item>
              <Navbar.Item value="themes">
                <Navbar.Link
                  asChild={(linkProps) => (
                    <A {...linkProps()} href={`${getLocalizedPath("/", locale())}#temas`}>
                      {copy().themes}
                    </A>
                  )}
                />
              </Navbar.Item>
            </Navbar.List>
          </Navbar.Content>
        </Navbar.Root>
      </header>
      <main id="main-content">
        <Container size="lg" class="py-12 max-sm:py-8">
          <Suspense>{props.children}</Suspense>
        </Container>
      </main>
    </div>
  );
}
