import { Heading, Text } from "@egcs/newui";
import { A } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import type { Locales } from "../i18n/i18n-types";
import { missingPageMetadata } from "../i18n/page-metadata";
import { getLocalizedPath } from "../lib/localized-path";

export function NotFoundPage(props: { locale: Locales }) {
  const text = () => missingPageMetadata[props.locale];

  return (
    <section class="grid gap-4 py-12">
      <HttpStatusCode code={404} />
      <Heading as="h1" size="2" class="m-0">
        {text().title}
      </Heading>
      <Text tone="muted" class="m-0">
        {text().description}
      </Text>
      <A
        class="w-fit font-medium text-primary underline underline-offset-4"
        href={getLocalizedPath("/", props.locale)}
      >
        {text().action}
      </A>
    </section>
  );
}
