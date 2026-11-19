import { Badge, Button, Card, CodeHighlight, Text } from "@egcs/newui";
import { createTheme } from "@egcs/newui/theme";
import { For } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";
import { getLocalizedPath } from "../../lib/localized-path";
import { copyLabels, GuideParagraph, GuideSection } from "./getting-started-articles";
import type { GuideCopy } from "./getting-started-content";
import { themeGuideCopy } from "./theme-guide-content";

import { TokenReference } from "./token-reference";
import { tokenReferenceLabels } from "./token-reference-content";

const options = { primary: "green", tokens: { radiusMd: "0.75rem" } } as const;
const theme = createTheme(options);
const modes = ["light", "dark"] as const;
const modeCode = `<html data-nui-theme="system">
  <body>
    <section data-nui-theme="dark">...</section>
  </body>
</html>`;
const globalCode = `:root {
  --nui-radius-md: 0.75rem;
  --nui-space-unit: 0.25rem;
  --nui-font-sans: "Inter", system-ui, sans-serif;
}`;

export function ThemeGuide(props: { locale: Locales; text: GuideCopy }) {
  const text = () => themeGuideCopy[props.locale];
  const sample = () => `import { Badge, Button } from "@egcs/newui";
import { createTheme } from "@egcs/newui/theme";

const theme = createTheme(${JSON.stringify(options, null, 2)});

export default function ThemedSection() {
  return (
    <section style={theme}>
      <Button tone="primary">${text().action}</Button>
      <Badge variant="soft" tone="primary">${text().label}</Badge>
    </section>
  );
}`;

  return (
    <>
      <GuideSection id="concepts" title={text().concepts}>
        <Text class="m-0">{text().definition}</Text>
        <GuideParagraph text={text().semantic} />
        <a
          class="w-fit font-medium text-primary underline underline-offset-4"
          href="#token-reference"
        >
          {tokenReferenceLabels[props.locale].title}
        </a>
      </GuideSection>
      <GuideSection id="color-modes" title={text().modes}>
        <GuideParagraph text={text().modeInstructions} />
        <CodeHighlight {...copyLabels(props.text)} language="html" code={modeCode} copyable />
      </GuideSection>
      <GuideSection id="brand" title={text().brand}>
        <GuideParagraph text={text().brandInstructions} />
        <Text size="7" tone="muted" class="m-0">
          {text().modesPreview}
        </Text>
        <div class="grid gap-3 sm:grid-cols-2">
          <For each={modes}>
            {(mode) => (
              <Card.Root data-nui-theme={mode} style={theme} class="grid gap-3 p-4">
                <Text size="7" tone="muted" class="m-0">
                  {text()[mode]}
                </Text>
                <div class="flex flex-wrap items-center gap-3">
                  <Button tone="primary">{text().action}</Button>
                  <Badge variant="soft" tone="primary">
                    {text().label}
                  </Badge>
                </div>
              </Card.Root>
            )}
          </For>
        </div>
        <CodeHighlight {...copyLabels(props.text)} language="tsx" code={sample()} copyable />
        <Text class="m-0">{text().paletteNotes}</Text>
      </GuideSection>
      <GuideSection id="global-tokens" title={text().global}>
        <GuideParagraph text={text().globalInstructions} />
        <CodeHighlight {...copyLabels(props.text)} language="css" code={globalCode} copyable />
        <GuideParagraph text={text().tailwind} />
        <a
          class="w-fit font-medium text-primary underline underline-offset-4"
          href={getLocalizedPath("/themes/", props.locale)}
        >
          {text().explore}
        </a>
      </GuideSection>
      <TokenReference locale={props.locale} />
    </>
  );
}
