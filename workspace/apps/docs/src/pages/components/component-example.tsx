import { Card, CodeHighlight, Heading, Tabs } from "@egcs/newui";
import type { ParentProps } from "solid-js";
import { GuideParagraph } from "../getting-started/getting-started-articles";

export function ExampleSection(
  props: ParentProps<{ id: string; title: string; description: string }>,
) {
  return (
    <section class="grid min-w-0 gap-3" aria-labelledby={props.id}>
      <Heading as="h2" size="4" class="m-0 scroll-mt-24" id={props.id}>
        {props.title}
      </Heading>
      <GuideParagraph text={props.description} />
      {props.children}
    </section>
  );
}

export function ComponentExample(
  props: ParentProps<{
    id: string;
    title: string;
    description: string;
    text: {
      preview: string;
      code: string;
      copyLabel: string;
      copiedLabel: string;
      copyErrorLabel: string;
    };
    code: string;
  }>,
) {
  return (
    <ExampleSection id={props.id} title={props.title} description={props.description}>
      <Card.Root class="min-w-0 overflow-hidden">
        <Tabs.Root defaultValue="preview" size="sm">
          <Tabs.List aria-labelledby={props.id} class="px-4">
            <Tabs.Trigger value="preview">{props.text.preview}</Tabs.Trigger>
            <Tabs.Trigger value="code">{props.text.code}</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="preview" class="bg-surface pt-0">
            <div class="flex min-h-24 flex-wrap items-center justify-center gap-3 p-4 sm:p-5">
              {props.children}
            </div>
          </Tabs.Content>
          <Tabs.Content value="code" class="pt-0">
            <CodeHighlight
              class="rounded-none border-0"
              title="JSX"
              language="tsx"
              code={props.code}
              copyable
              copyLabel={props.text.copyLabel}
              copiedLabel={props.text.copiedLabel}
              copyErrorLabel={props.text.copyErrorLabel}
            />
          </Tabs.Content>
        </Tabs.Root>
      </Card.Root>
    </ExampleSection>
  );
}
