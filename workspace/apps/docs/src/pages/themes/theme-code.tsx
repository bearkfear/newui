import { Button, CodeHighlight, Dialog, RadioGroup, Text } from "@egcs/newui";
import { createTheme } from "@egcs/newui/theme";
import { createSignal } from "solid-js";
import { useI18nContext } from "../../i18n/i18n-solid";
import { themeOptions } from "../../lib/theme-options";
import { useThemeSettings } from "../../lib/theme-settings";

export function ThemeCode() {
  const { LL } = useI18nContext();
  const content = () => LL().themesPage;
  const theme = useThemeSettings();
  const [format, setFormat] = createSignal("css");
  const [status, setStatus] = createSignal<"idle" | "copied" | "error">("idle");
  const code = () => {
    const options = themeOptions(theme.colors(), theme.geometry(), theme.overrides());
    if (format() === "typescript")
      return `import { createTheme } from "@egcs/newui/theme";\n\nconst theme = createTheme(${JSON.stringify(options, null, 2)});\n\n// Solid JSX\n<div style={theme}>...</div>`;
    const variables = createTheme(options);
    return `:root {\n${Object.entries(variables)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join("\n")}\n}`;
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code());
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            {content().viewCode()}
          </Button>
        )}
      />
      <Dialog.Content size="lg">
        <Dialog.Header>
          <Dialog.Title>{content().code()}</Dialog.Title>
          <Dialog.Description>{content().codeDescription()}</Dialog.Description>
          <Dialog.CloseTrigger aria-label={content().close()} />
        </Dialog.Header>
        <Dialog.Body class="grid gap-4 text-left">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <RadioGroup.Root
              aria-label={content().code()}
              variant="segmented"
              value={format()}
              onValueChange={(details) => {
                if (details.value) {
                  setFormat(details.value);
                  setStatus("idle");
                }
              }}
            >
              <RadioGroup.Item value="css">
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>CSS</RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="typescript">
                <RadioGroup.ItemControl />
                <RadioGroup.ItemText>createTheme</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup.Root>
            <Button variant="outline" onClick={copy}>
              {status() === "copied" ? content().copied() : content().copy()}
            </Button>
          </div>
          <CodeHighlight language={format() === "typescript" ? "tsx" : "css"} code={code()} />
          <Text size="7" tone="muted" class="m-0" role="status">
            {status() === "error"
              ? content().copyError()
              : status() === "copied"
                ? content().copied()
                : ""}
          </Text>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog.Root>
  );
}
