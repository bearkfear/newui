import { Footer, Heading, Text } from "@egcs/newui";
import type { DocsLocale } from "../i18n/docs-locales";
import { getShellCopy } from "../i18n/onboarding-shell-copy";
import { getLocalizedPath } from "../lib/localized-path";

export function DocsFooter(props: { locale: DocsLocale }) {
  const text = () => getShellCopy(props.locale);

  return (
    <Footer.Root tone="subtle">
      <Footer.Content>
        <Footer.Brand>
          <Heading as="h2" size="3" class="m-0 tracking-[-0.055em]">
            newui<span class="text-primary">.</span>
          </Heading>
          <Text tone="muted" class="m-0 max-w-xs">
            {text().footer.description}
          </Text>
        </Footer.Brand>
        <Footer.Links>
          <Footer.Group aria-label={text().footer.documentation}>
            <Footer.Title class="m-0">{text().footer.documentation}</Footer.Title>
            <Footer.Link href={getLocalizedPath("/getting-started/", props.locale)}>
              {text().navigation.getStarted}
            </Footer.Link>
            <Footer.Link href={getLocalizedPath("/components/", props.locale)}>
              {text().navigation.components}
            </Footer.Link>
            <Footer.Link href={getLocalizedPath("/themes/", props.locale)}>
              {text().navigation.themes}
            </Footer.Link>
          </Footer.Group>
          <Footer.Group aria-label={text().footer.project}>
            <Footer.Title class="m-0">{text().footer.project}</Footer.Title>
            <Footer.Link href="https://github.com/bearkfear/newui">
              {text().footer.repository} <span aria-hidden="true">↗</span>
            </Footer.Link>
          </Footer.Group>
        </Footer.Links>
      </Footer.Content>
      <Footer.Meta>
        <span>{text().footer.openSource}</span>
        <span>{text().footer.credit}</span>
      </Footer.Meta>
    </Footer.Root>
  );
}
