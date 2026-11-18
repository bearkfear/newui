import { Button, Card, CodeHighlight, Field, Heading, RadioGroup, Text } from "@egcs/newui";
import { Layers, Palette, Scaling } from "lucide-solid";
import { createSignal, createUniqueId, For } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { Locales } from "../../i18n/i18n-types";

const variants = ["solid", "soft", "outline", "ghost"] as const;
const sizes = ["xs", "sm", "md", "lg"] as const;
const tones = ["primary", "neutral", "success", "danger"] as const;

const labels = {
  "pt-BR": {
    title: "Mude uma prop, veja o resultado",
    description: "Ajuste o estilo, o tom e o tamanho do botão. A prévia e o JSX mudam juntos.",
    style: "Estilo",
    tone: "Tom",
    size: "Tamanho",
    preview: "Prévia",
    action: "Confirmar",
    copy: "Copiar código",
    copied: "Código copiado",
    copyError: "Selecione o código para copiar manualmente.",
  },
  en: {
    title: "Change a prop, see the result",
    description: "Adjust the button style, tone, and size. The preview and JSX update together.",
    style: "Style",
    tone: "Tone",
    size: "Size",
    preview: "Preview",
    action: "Confirm",
    copy: "Copy code",
    copied: "Code copied",
    copyError: "Select the code to copy it manually.",
  },
};

export function ButtonPlayground(props: { locale: Locales }) {
  const titleId = createUniqueId();
  const text = () => labels[props.locale];
  const [variant, setVariant] = createSignal<(typeof variants)[number]>("solid");
  const [tone, setTone] = createSignal<(typeof tones)[number]>("primary");

  const [size, setSize] = createSignal<(typeof sizes)[number]>("md");

  const code = () =>
    `import { Button } from "@egcs/newui";\n\n<Button\n  variant="${variant()}"\n  tone="${tone()}"\n  size="${size()}"\n>\n  ${text().action}\n</Button>`;

  return (
    <section class="grid gap-8 py-20" aria-labelledby={titleId}>
      <header class="grid max-w-2xl gap-3">
        <Heading as="h2" size="2" class="m-0" id={titleId}>
          {text().title}
        </Heading>
        <Text size="4" tone="muted" class="m-0">
          {text().description}
        </Text>
      </header>
      <Card.Root class="grid min-w-0 overflow-hidden lg:grid-cols-2">
        <div class="grid min-w-0 content-start gap-5 p-4 sm:p-6">
          <fieldset
            class="m-0 grid min-h-36 place-items-center rounded-xl border border-dashed border-border bg-background p-6"
            aria-label={text().preview}
          >
            <Button variant={variant()} tone={tone()} size={size()}>
              {text().action}
            </Button>
          </fieldset>
          <PropOptions
            label={text().style}
            icon={Layers}
            options={variants}
            value={variant()}
            onSelect={setVariant}
          />
          <PropOptions
            label={text().tone}
            icon={Palette}
            options={tones}
            value={tone()}
            onSelect={setTone}
          />
          <PropOptions
            label={text().size}
            icon={Scaling}
            options={sizes}
            value={size()}
            onSelect={setSize}
          />
        </div>
        <div class="grid min-w-0 border-t border-border bg-background p-4 sm:p-6 lg:border-l lg:border-t-0">
          <CodeHighlight
            language="tsx"
            title="JSX"
            code={code()}
            copyable
            copyLabel={text().copy}
            copiedLabel={text().copied}
            copyErrorLabel={text().copyError}
          />
        </div>
      </Card.Root>
    </section>
  );
}

function PropOptions<Value extends string>(props: {
  label: string;
  icon: typeof Palette;
  options: readonly Value[];
  value: Value;
  onSelect: (value: Value) => void;
}) {
  return (
    <Field.Root class="min-w-0">
      <Field.Label
        asChild={(labelProps) => <span {...labelProps()} />}
        class="inline-flex items-center gap-2"
      >
        <Dynamic
          component={props.icon}
          size={16}
          aria-hidden="true"
          class="text-muted-foreground"
        />
        {props.label}
      </Field.Label>
      <RadioGroup.Root
        variant="segmented"
        size="sm"
        class="w-full"
        value={props.value}
        onValueChange={({ value }) => {
          const selected = props.options.find((option) => option === value);
          if (selected) props.onSelect(selected);
        }}
      >
        <For each={props.options}>
          {(option) => (
            <RadioGroup.Item value={option} class="max-sm:px-1">
              <RadioGroup.ItemControl />
              <RadioGroup.ItemText>{option}</RadioGroup.ItemText>
            </RadioGroup.Item>
          )}
        </For>
      </RadioGroup.Root>
    </Field.Root>
  );
}
