import { Footer, Heading, Text } from "@egcs/newui";
import { useI18nContext } from "../i18n/i18n-solid";
import type { Locales } from "../i18n/i18n-types";
import { getLocalizedPath } from "../lib/localized-path";

export function DocsFooter(props: { locale: Locales }) {
  const { LL } = useI18nContext();

  return (
    <Footer.Root tone="subtle">
      <Footer.Content>
        <Footer.Brand>
          <Heading as="h2" size="3" class="m-0 tracking-[-0.055em]">
            newui<span class="text-primary">.</span>
          </Heading>
          <Text tone="muted" class="m-0 max-w-xs">
            {LL().footer.description()}
          </Text>
        </Footer.Brand>
        <Footer.Links>
          <Footer.Group aria-label={LL().footer.documentation()}>
            <Footer.Title class="m-0">{LL().footer.documentation()}</Footer.Title>
            <Footer.Link href={getLocalizedPath("/getting-started/", props.locale)}>
              {LL().navigation.getStarted()}
            </Footer.Link>
            <Footer.Link href={getLocalizedPath("/components/", props.locale)}>
              {LL().navigation.components()}
            </Footer.Link>
            <Footer.Link href={getLocalizedPath("/themes/", props.locale)}>
              {LL().navigation.themes()}
            </Footer.Link>
          </Footer.Group>
          <Footer.Group aria-label={LL().footer.project()}>
            <Footer.Title class="m-0">{LL().footer.project()}</Footer.Title>
            <Footer.Link href="https://github.com/bearkfear/newui">
              {LL().footer.repository()} <span aria-hidden="true">↗</span>
            </Footer.Link>
          </Footer.Group>
        </Footer.Links>
      </Footer.Content>
      <Footer.Meta>
        <span>{LL().footer.openSource()}</span>
        <span>{LL().footer.credit()}</span>
      </Footer.Meta>
    </Footer.Root>
  );
}
