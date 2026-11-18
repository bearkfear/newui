import { Button, Heading, Text } from "@egcs/newui";
import { createSignal } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";
import type { Locales } from "../../i18n/i18n-types";

type GettingStartedPageProps = {
  locale: Locales;
};

export function GettingStartedPage(props: GettingStartedPageProps) {
  const [saved, setSaved] = createSignal(false);
  const { LL } = useI18nContext();
  const content = () => LL().gettingStarted;
  const prefix = () => (props.locale === "en" ? "/en" : "");

  return (
    <article class="mx-auto grid max-w-3xl gap-10 py-8">
      <header class="grid gap-4">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          newui · SolidJS
        </Text>
        <Heading as="h1" size="1" class="m-0 tracking-[-0.05em]">
          {content().title()}
        </Heading>
        <Text size="4" tone="muted" class="m-0 max-w-2xl">
          {content().description()}
        </Text>
      </header>

      <section class="grid gap-4" aria-labelledby="install-title">
        <Heading as="h2" size="3" class="m-0" id="install-title">
          {content().install()}
        </Heading>
        <Text tone="muted" class="m-0">
          {content().installDescription()}
        </Text>
        <CodeBlock>{"bun add @egcs/newui solid-js"}</CodeBlock>
      </section>

      <section class="grid gap-5" aria-labelledby="styles-title">
        <Heading as="h2" size="3" class="m-0" id="styles-title">
          {content().styles()}
        </Heading>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Heading as="h3" size="5" class="m-0">
            {content().compiled()}
          </Heading>
          <Text tone="muted" class="m-0">
            {content().compiledDescription()}
          </Text>
          <CodeBlock>{'import "@egcs/newui/styles.css";'}</CodeBlock>
        </div>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Heading as="h3" size="5" class="m-0">
            {content().tailwind()}
          </Heading>
          <Text tone="muted" class="m-0">
            {content().tailwindDescription()}
          </Text>
          <CodeBlock>
            {
              '@import "tailwindcss";\n@import "@egcs/newui/tailwind/preset.css";\n@import "@egcs/newui/tailwind/actions.css";'
            }
          </CodeBlock>
        </div>
      </section>

      <section class="grid gap-4" aria-labelledby="component-title">
        <Heading as="h2" size="3" class="m-0" id="component-title">
          {content().component()}
        </Heading>
        <Text tone="muted" class="m-0">
          {content().componentDescription()}
        </Text>
        <CodeBlock>
          {
            'import { Button } from "@egcs/newui/actions";\n\nexport function SaveButton() {\n  return <Button>Save changes</Button>;\n}'
          }
        </CodeBlock>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-wider">
            {content().preview()}
          </Text>
          <div class="flex flex-wrap gap-3">
            <Button onClick={() => setSaved(true)}>
              {saved() ? content().saved() : content().save()}
            </Button>
            <Button variant="outline">{content().cancel()}</Button>
          </div>
        </div>
      </section>

      <section class="grid gap-3 border-t border-border pt-8" aria-labelledby="next-title">
        <Heading as="h2" size="4" class="m-0" id="next-title">
          {content().next()}
        </Heading>
        <ul class="grid gap-2 pl-5 text-foreground">
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href={`${prefix()}/components/`}
            >
              {content().links.components()}
            </a>
          </li>
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href={`${prefix()}/themes/`}
            >
              {content().links.themes()}
            </a>
          </li>
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href="https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/getting-started/tailwind.md"
            >
              {content().links.tailwind()}
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}

function CodeBlock(props: { children: string }) {
  return (
    <pre class="overflow-x-auto rounded-xl border border-border bg-background p-4 text-sm text-foreground">
      <code>{props.children}</code>
    </pre>
  );
}
