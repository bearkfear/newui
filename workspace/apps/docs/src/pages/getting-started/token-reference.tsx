import { Heading, Table, Text } from "@egcs/newui";
import { For, Show } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";
import { GuideParagraph, GuideSection } from "./getting-started-articles";
import { tokenGroups, tokenReferenceLabels } from "./token-reference-content";

export function TokenReference(props: { locale: Locales }) {
  const text = () => tokenReferenceLabels[props.locale];
  return (
    <GuideSection id="token-reference" title={text().title}>
      <GuideParagraph text={text().intro} />
      <For each={tokenGroups}>
        {(rows, index) => (
          <div class="mt-4 grid min-w-0 gap-3">
            <Heading as="h3" size="5" class="m-0">
              {text().groups[index()]}
            </Heading>
            <Show when={index() === 1}>
              <GuideParagraph text={text().roleNote} />
            </Show>
            <Table.Container aria-label={text().groups[index()]}>
              <Table.Root density="compact">
                <Table.Header>
                  <Table.Row>
                    <Table.Head>{text().token}</Table.Head>
                    <Table.Head>{text().purpose}</Table.Head>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <For each={rows}>
                    {([names, pt, en]) => (
                      <Table.Row>
                        <Table.Head scope="row" class="w-2/5">
                          <code class="font-mono text-[0.875em] [overflow-wrap:anywhere]">
                            {formatNames(names, props.locale)}
                          </code>
                        </Table.Head>
                        <Table.Cell>{props.locale === "en" ? en : pt}</Table.Cell>
                      </Table.Row>
                    )}
                  </For>
                </Table.Body>
              </Table.Root>
            </Table.Container>
            <Show when={index() === 1}>
              <Text class="m-0" tone="muted">
                {text().scaleNote}
              </Text>
            </Show>
          </div>
        )}
      </For>
    </GuideSection>
  );
}

function formatNames(names: string, locale: Locales) {
  return names
    .replace(/(^| \/ | … )/g, "$1--nui-")
    .replaceAll("{tone}", locale === "en" ? "{tone}" : "{tom}");
}
