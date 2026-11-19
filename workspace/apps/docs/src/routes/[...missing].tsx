import { Heading, Text } from "@egcs/newui";
import { A, useLocation } from "@solidjs/router";
import { HttpStatusCode } from "@solidjs/start";
import { missingPageMetadata } from "../i18n/page-metadata";
import { getLocaleFromPath, getLocalizedPath } from "../lib/localized-path";

export default function NotFoundRoute() {
  const location = useLocation();
  const locale = () => getLocaleFromPath(location.pathname);
  const text = () => missingPageMetadata[locale()];

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
        href={getLocalizedPath("/", locale())}
      >
        {text().action}
      </A>
    </section>
  );
}
