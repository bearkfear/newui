import { Field, Heading, Input, InputGroup, NumberInput, Text } from "@egcs/newui";
import type { ThemeToken } from "@egcs/newui/theme";
import { For, Show } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";
import { themeOptions } from "../../lib/theme-options";
import { useThemeSettings } from "../../lib/theme-settings";

const extraTokens: Partial<Record<ThemeToken, string>> = {
  fontSans: "var(--nui-font-sans)",
  fontMono: "var(--nui-font-mono)",
  fontSizeBase: "1rem",
  controlHeightMd: "2.5rem",
  focusWidth: "2px",
  focusOffset: "2px",
  motionDuration: "150ms",
  motionEasing: "cubic-bezier(0.4, 0, 0.2, 1)",
};

export function ThemeAdvanced() {
  const { LL } = useI18nContext();
  const theme = useThemeSettings();
  const values = () => ({
    ...extraTokens,
    ...themeOptions(theme.colors(), theme.geometry(), theme.overrides()).tokens,
  });
  const names = Object.keys(values()) as Array<keyof ReturnType<typeof labels>>;
  const labels = () => LL().themesPage.tokenLabels;
  return (
    <section class="grid gap-4" aria-labelledby="theme-tokens-title">
      <div class="grid gap-1">
        <Heading as="h3" size="5" class="m-0" id="theme-tokens-title">
          {LL().themesPage.advancedTokens()}
        </Heading>
        <Text size="7" tone="muted" class="m-0">
          {LL().themesPage.advancedDescription()}
        </Text>
      </div>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <For each={names}>
          {(name) => (
            <Field.Root>
              <Field.Label>{labels()[name]()}</Field.Label>
              <Show
                when={values()[name]?.match(/^(-?\d+(?:\.\d+)?)(rem|px|ms)$/)}
                fallback={
                  <Input
                    value={values()[name] ?? ""}
                    onChange={(event) =>
                      theme.setOverride(name as ThemeToken, event.currentTarget.value)
                    }
                  />
                }
              >
                {(match) => (
                  <InputGroup.Root>
                    <NumberInput
                      locale="en-US"
                      useGrouping={false}
                      maximumFractionDigits={3}
                      allowNegative={false}
                      min="0"
                      max={match()[2] === "rem" ? "4" : match()[2] === "px" ? "100" : "5000"}
                      value={match()[1] ?? "0"}
                      onValueChange={(details) => {
                        if (details.status === "valid" && details.rawValue)
                          theme.setOverride(name as ThemeToken, `${details.rawValue}${match()[2]}`);
                      }}
                    />
                    <InputGroup.Addon placement="end">{match()[2]}</InputGroup.Addon>
                  </InputGroup.Root>
                )}
              </Show>
            </Field.Root>
          )}
        </For>
      </div>
    </section>
  );
}
