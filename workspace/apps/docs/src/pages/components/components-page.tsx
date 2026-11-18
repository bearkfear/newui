import { Card, Heading, Text } from "@egcs/newui";
import { useI18nContext } from "../../i18n/i18n-solid";

export function ComponentsPage() {
  const { LL } = useI18nContext();
  const content = () => LL().catalogPage;
  const areas = () => {
    const translations = content().areas;
    return [translations["0"](), translations["1"](), translations["2"](), translations["3"]()];
  };

  return (
    <article class="mx-auto grid max-w-5xl gap-10 py-8">
      <header class="grid max-w-3xl gap-4">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          {content().eyebrow()}
        </Text>
        <Heading as="h1" size="1" class="m-0 tracking-[-0.05em]">
          {content().title()}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {content().description()}
        </Text>
      </header>
      <section class="grid gap-4 sm:grid-cols-2" aria-label={content().title()}>
        {areas().map((area, index) => (
          <Card.Root as="article" variant="soft" class="grid min-h-40 content-between gap-5 p-6">
            <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-wider">
              0{index + 1}
            </Text>
            <div class="grid gap-2">
              <Heading as="h2" size="4" class="m-0">
                {area}
              </Heading>
              <Card.Description>{content().status()}</Card.Description>
            </div>
          </Card.Root>
        ))}
      </section>
    </article>
  );
}
