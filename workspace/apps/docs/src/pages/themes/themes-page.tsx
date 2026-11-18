import { Badge, Button, Heading, Input, Panel, RadioGroup, Tabs, Text } from "@egcs/newui";
import { For, Show } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";
import { useThemeSettings } from "../../lib/theme-settings";
import { ThemeAdvanced } from "./theme-advanced";
import { ThemeCode } from "./theme-code";
import { ThemeShowcase } from "./theme-showcase";

const themes = ["#0090ff", "#30a46c", "#e5484d"];

export function ThemesPage() {
  const { LL } = useI18nContext();
  const content = () => LL().themesPage;
  const theme = useThemeSettings();

  return (
    <article class="grid w-full gap-10 py-4 text-left sm:py-8">
      <header class="grid max-w-3xl gap-3">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          {content().eyebrow()}
        </Text>
        <Heading as="h1" size="2" class="m-0 tracking-[-0.04em]">
          {content().title()}
        </Heading>
        <Text size="5" tone="muted" class="m-0 max-w-2xl">
          {content().description()}
        </Text>
      </header>

      <Tabs.Root defaultValue="basic" variant="segmented" tone="primary" size="md">
        <Panel.Root aria-label={content().configure()}>
          <Panel.Header class="flex flex-wrap items-start justify-between gap-4">
            <div class="grid min-w-0 flex-1 gap-1">
              <Panel.Title>{content().configure()}</Panel.Title>
              <Panel.Description>{content().configureDescription()}</Panel.Description>
            </div>
            <ThemeCode />
          </Panel.Header>
          <Panel.Toolbar class="pb-4 pt-0" style={{ "border-top": "0" }}>
            <ThemeTabs />
          </Panel.Toolbar>
          <Panel.Body>
            <Tabs.Content value="basic" class="grid gap-8">
              <RadioGroup.Root
                aria-label={content().theme()}
                orientation="horizontal"
                value={themes.includes(theme.colors().accent) ? theme.colors().accent : null}
                onValueChange={(details) => {
                  if (details.value && themes.includes(details.value))
                    theme.selectTheme(details.value);
                }}
              >
                <RadioGroup.Label>{content().theme()}</RadioGroup.Label>
                <For each={themes}>
                  {(color, index) => (
                    <RadioGroup.Item value={color}>
                      <RadioGroup.ItemControl />
                      <RadioGroup.ItemText>
                        {
                          [content().defaultTheme(), content().greenTheme(), content().redTheme()][
                            index()
                          ]
                        }
                      </RadioGroup.ItemText>
                    </RadioGroup.Item>
                  )}
                </For>
              </RadioGroup.Root>
              <Show when={!themes.includes(theme.colors().accent)}>
                <Badge tone="primary" variant="soft" class="justify-self-start">
                  {content().customTheme()}
                </Badge>
              </Show>
              <section class="grid gap-4" aria-label={content().geometry()}>
                <Heading as="h3" size="5" class="m-0">
                  {content().geometry()}
                </Heading>
                <div class="grid gap-6 sm:grid-cols-2">
                  <div class="grid justify-items-start gap-2">
                    <Text size="7" class="m-0 font-medium">
                      {content().radius()}
                    </Text>
                    <RadioGroup.Root
                      aria-label={content().radius()}
                      variant="segmented"
                      value={theme.geometry().radius}
                      onValueChange={(details) => {
                        if (details.value) theme.setGeometry("radius", details.value);
                      }}
                    >
                      <For
                        each={[
                          ["0rem", content().sharp()],
                          ["0.375rem", content().standard()],
                          ["0.75rem", content().rounded()],
                        ]}
                      >
                        {(option) => (
                          <RadioGroup.Item value={option[0] ?? ""}>
                            <RadioGroup.ItemControl />
                            <RadioGroup.ItemText>{option[1]}</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        )}
                      </For>
                    </RadioGroup.Root>
                  </div>
                  <div class="grid justify-items-start gap-2">
                    <Text size="7" class="m-0 font-medium">
                      {content().spacing()}
                    </Text>
                    <RadioGroup.Root
                      aria-label={content().spacing()}
                      variant="segmented"
                      value={theme.geometry().spacing}
                      onValueChange={(details) => {
                        if (details.value) theme.setGeometry("spacing", details.value);
                      }}
                    >
                      <For
                        each={[
                          ["0.2rem", content().compact()],
                          ["0.25rem", content().standard()],
                          ["0.3rem", content().spacious()],
                        ]}
                      >
                        {(option) => (
                          <RadioGroup.Item value={option[0] ?? ""}>
                            <RadioGroup.ItemControl />
                            <RadioGroup.ItemText>{option[1]}</RadioGroup.ItemText>
                          </RadioGroup.Item>
                        )}
                      </For>
                    </RadioGroup.Root>
                  </div>
                </div>
              </section>
            </Tabs.Content>
            <Tabs.Content value="advanced" class="grid gap-8">
              <section class="grid gap-4" aria-label={content().colors()}>
                <Heading as="h3" size="5" class="m-0">
                  {content().colors()}
                </Heading>
                <div class="grid w-full gap-5 text-left sm:grid-cols-3">
                  <ColorField
                    label={content().accent()}
                    value={theme.colors().accent}
                    onChange={(value) => theme.setColor("accent", value)}
                  />
                  <ColorField
                    label={content().gray()}
                    value={theme.colors().gray}
                    onChange={(value) => theme.setColor("gray", value)}
                  />
                  <ColorField
                    label={content().background()}
                    value={theme.colors().background}
                    onChange={(value) => theme.setColor("background", value)}
                  />
                </div>
              </section>
              <ThemeAdvanced />
            </Tabs.Content>
            <Button variant="outline" class="mt-6" onClick={theme.reset}>
              {content().reset()}
            </Button>
          </Panel.Body>
        </Panel.Root>
      </Tabs.Root>
      <ThemeShowcase />
    </article>
  );
}

function ThemeTabs() {
  const { LL } = useI18nContext();
  return (
    <Tabs.List
      aria-label={LL().themesPage.configure()}
      style={{
        "--nui-tabs-track": "var(--nui-primary-soft)",
        "--nui-tabs-hover": "var(--nui-primary-soft-hover)",
        "--nui-tabs-selected-bg": "var(--nui-primary)",
        "--nui-tabs-selected-fg": "var(--nui-on-primary)",
      }}
    >
      <Tabs.Trigger value="basic">{LL().themesPage.basic()}</Tabs.Trigger>
      <Tabs.Trigger value="advanced">{LL().themesPage.advanced()}</Tabs.Trigger>
    </Tabs.List>
  );
}

function ColorField(props: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label class="grid min-w-0 gap-2 text-sm font-medium">
      {props.label}
      <span class="flex min-w-0 items-center gap-2 rounded-md border border-border bg-background p-1">
        <input
          aria-label={`${props.label} color picker`}
          class="size-9 shrink-0 cursor-pointer rounded border-0 bg-transparent p-1"
          type="color"
          value={props.value}
          onInput={(event) => props.onChange(event.currentTarget.value)}
        />
        <Input
          aria-label={`${props.label} hex value`}
          class="min-w-0 border-0 bg-transparent font-mono uppercase"
          value={props.value}
          readOnly
        />
      </span>
    </label>
  );
}
