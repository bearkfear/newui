import { Heading, Separator, Text } from "@egcs/newui";
import { useI18nContext } from "../../i18n/i18n-solid";
import type { Locales } from "../../i18n/i18n-types";
import { ButtonPlayground } from "./button-playground";
import { HomeInstallation, HomeThemes } from "./home-next-steps";
import { HomeShowcase } from "./home-showcase";

type HomePageProps = {
  locale: Locales;
};

export function HomePage(props: HomePageProps) {
  const { LL } = useI18nContext();
  const prefix = props.locale === "en" ? "/en" : "";

  return (
    <>
      <section class="grid justify-items-start gap-6 py-16 sm:py-24" aria-labelledby="home-title">
        <Heading as="h1" size="1" class="m-0 max-w-3xl text-balance" id="home-title">
          {LL().home.title()}
        </Heading>
        <Text size="4" tone="muted" class="m-0 max-w-2xl text-pretty">
          {LL().home.description()}
        </Text>
        <div class="flex flex-wrap gap-3">
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
            href={`${prefix}/getting-started/`}
          >
            {LL().home.start()}
          </a>
          <a
            class="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-5 font-medium text-foreground no-underline transition-colors hover:bg-surface"
            href={`${prefix}/components/`}
          >
            {LL().home.catalog()}
          </a>
        </div>
      </section>
      <Separator decorative />
      <HomeShowcase locale={props.locale} />
      <Separator decorative />
      <ButtonPlayground locale={props.locale} />
      <Separator decorative />
      <HomeThemes locale={props.locale} prefix={prefix} />
      <Separator decorative />
      <HomeInstallation locale={props.locale} prefix={prefix} />
    </>
  );
}
