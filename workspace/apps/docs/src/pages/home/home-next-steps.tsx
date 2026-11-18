import { Badge, Button, Card, CodeHighlight, Field, Heading, RadioGroup, Text } from "@egcs/newui";
import { createTheme } from "@egcs/newui/theme";
import { createSignal, createUniqueId, For } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";

const themes = {
  ocean: { name: "Ocean", primary: "blue", radiusMd: "0.5rem", radiusLg: "0.75rem" },
  forest: { name: "Forest", primary: "green", radiusMd: "0.875rem", radiusLg: "1.25rem" },
  ember: { name: "Ember", primary: "red", radiusMd: "0.125rem", radiusLg: "0.25rem" },
} as const;

const themeKeys = ["ocean", "forest", "ember"] as const;

const labels = {
  "pt-BR": {
    themesTitle: "Uma interface, sua identidade",
    themesDescription:
      "Troque o tema para ver como a paleta e os cantos mudam nos mesmos componentes.",
    theme: "Tema da prévia",
    browse: "Explorar temas",
    report: "Relatório mensal",
    status: "Pronto",
    reportDescription: "Receitas, despesas e saldo de junho.",
    action: "Ver saldo de junho",
    hideBalance: "Ocultar saldo",
    balance: "Saldo de junho · R$ 3.300",
    installTitle: "Comece a usar",
    installDescription:
      "Instale a NewUI no seu projeto Solid e siga o guia para importar os estilos.",
    guide: "Abrir guia de instalação",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    copyErrorLabel: "Selecione o código para copiar manualmente.",
  },
  en: {
    themesTitle: "One interface, your identity",
    themesDescription:
      "Switch themes to see how the palette and corner radius change across the same components.",
    theme: "Preview theme",
    browse: "Explore themes",
    report: "Monthly report",
    status: "Ready",
    reportDescription: "June’s revenue, expenses, and net result.",
    action: "View June’s balance",
    hideBalance: "Hide balance",
    balance: "June’s balance · $3,300",
    installTitle: "Get started",
    installDescription:
      "Install NewUI in your Solid project, then follow the guide to import the styles.",
    guide: "Open the installation guide",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    copyErrorLabel: "Select the code to copy it manually.",
  },
};

const linkClass = "w-fit font-medium text-primary underline underline-offset-4";

export function HomeThemes(props: { locale: Locales; prefix: string }) {
  const titleId = createUniqueId();
  const text = () => labels[props.locale];
  const [selected, setSelected] = createSignal<(typeof themeKeys)[number]>("ocean");
  const [showBalance, setShowBalance] = createSignal(false);
  const balanceId = createUniqueId();
  const theme = () => themes[selected()];
  const options = () => ({
    primary: theme().primary,
    tokens: { radiusMd: theme().radiusMd, radiusLg: theme().radiusLg },
  });
  const code = () =>
    `import { createTheme } from "@egcs/newui/theme";\n\nconst theme = createTheme(${JSON.stringify(options(), null, 2)});\n\n<div style={theme}>…</div>`;

  return (
    <section class="grid gap-8 py-20" aria-labelledby={titleId}>
      <header class="grid max-w-2xl gap-3">
        <Heading as="h2" size="2" class="m-0" id={titleId}>
          {text().themesTitle}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {text().themesDescription}
        </Text>
        <a class={linkClass} href={`${props.prefix}/themes/`}>
          {text().browse}
        </a>
      </header>

      <Card.Root class="grid min-w-0 overflow-hidden lg:grid-cols-2">
        <div class="grid min-w-0 content-start gap-5 p-4 sm:p-6">
          <Field.Root>
            <Field.Label asChild={(labelProps) => <span {...labelProps()} />}>
              {text().theme}
            </Field.Label>
            <RadioGroup.Root
              variant="segmented"
              size="sm"
              class="w-full"
              value={selected()}
              onValueChange={({ value }) => {
                const key = themeKeys.find((key) => key === value);
                if (key) setSelected(key);
              }}
            >
              <For each={themeKeys}>
                {(key) => (
                  <RadioGroup.Item value={key}>
                    <RadioGroup.ItemControl />
                    <RadioGroup.ItemText>{themes[key].name}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                )}
              </For>
            </RadioGroup.Root>
          </Field.Root>

          <div
            class="grid place-items-center rounded-xl bg-surface p-4 sm:p-6"
            style={createTheme(options())}
          >
            <Card.Root class="w-full max-w-sm">
              <Card.Header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <Card.Title as="h3">{text().report}</Card.Title>
                  <Badge tone="primary" variant="soft">
                    {text().status}
                  </Badge>
                </div>
                <Card.Description>{text().reportDescription}</Card.Description>
              </Card.Header>
              <Card.Content class="grid justify-items-start gap-3">
                <Button
                  aria-expanded={showBalance()}
                  aria-controls={balanceId}
                  onClick={() => setShowBalance((visible) => !visible)}
                >
                  {showBalance() ? text().hideBalance : text().action}
                </Button>
                <div id={balanceId} hidden={!showBalance()}>
                  <Text size="6" class="m-0">
                    {text().balance}
                  </Text>
                </div>
              </Card.Content>
            </Card.Root>
          </div>
        </div>
        <div class="grid min-w-0 border-t border-border bg-background p-4 sm:p-6 lg:border-l lg:border-t-0">
          <CodeHighlight
            language="tsx"
            title="createTheme"
            code={code()}
            copyable
            copyLabel={text().copyLabel}
            copiedLabel={text().copiedLabel}
            copyErrorLabel={text().copyErrorLabel}
          />
        </div>
      </Card.Root>
    </section>
  );
}

export function HomeInstallation(props: { locale: Locales; prefix: string }) {
  const titleId = createUniqueId();
  const text = () => labels[props.locale];

  return (
    <section class="py-16" aria-labelledby={titleId}>
      <Card.Root class="grid min-w-0 items-center gap-6 bg-surface p-4 sm:p-8 lg:grid-cols-2">
        <div class="grid min-w-0 gap-3">
          <Heading as="h2" size="3" id={titleId} class="m-0">
            {text().installTitle}
          </Heading>
          <Text tone="muted" class="m-0">
            {text().installDescription}
          </Text>
          <a class={linkClass} href={`${props.prefix}/getting-started/`}>
            {text().guide}
          </a>
        </div>
        <CodeHighlight
          language="bash"
          title="Bun"
          code="bun add @egcs/newui solid-js"
          copyable
          copyLabel={text().copyLabel}
          copiedLabel={text().copiedLabel}
          copyErrorLabel={text().copyErrorLabel}
        />
      </Card.Root>
    </section>
  );
}
