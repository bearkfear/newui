import { Button, Heading, Text } from "@egcs/newui";
import { createSignal } from "solid-js";

type GettingStartedPageProps = {
  language: "en" | "pt";
};

const copy = {
  pt: {
    title: "Comece com a newui",
    description:
      "Instale a biblioteca, escolha como carregar os estilos e renderize seu primeiro componente.",
    install: "Instale",
    installDescription: "Adicione a newui e o SolidJS ao seu projeto:",
    styles: "Escolha como usar os estilos",
    compiled: "CSS compilado",
    compiledDescription: "Importe a folha completa uma vez no ponto de entrada da aplicação:",
    tailwind: "Tailwind CSS 4",
    tailwindDescription:
      "Selecione as áreas de estilos que entram no build e use os utilitários Tailwind.",
    component: "Renderize um componente",
    componentDescription:
      "Importe os componentes da área correspondente. Para começar com um botão:",
    save: "Salvar alterações",
    cancel: "Cancelar",
    next: "Próximos passos",
    links: [
      "Explore os componentes",
      "Conheça temas e tokens",
      "Consulte a integração com Tailwind",
    ],
    preview: "Prévia interativa",
    saved: "Salvo",
  },
  en: {
    title: "Start building with newui",
    description: "Install the library, choose how to load styles, and render your first component.",
    install: "Install",
    installDescription: "Add newui and SolidJS to your project:",
    styles: "Choose how to use styles",
    compiled: "Compiled CSS",
    compiledDescription: "Import the complete stylesheet once from your app entry:",
    tailwind: "Tailwind CSS 4",
    tailwindDescription: "Select which style areas enter the build and use Tailwind utilities.",
    component: "Render a component",
    componentDescription: "Import components from their area. Start with a button:",
    save: "Save changes",
    cancel: "Cancel",
    next: "Where to go next",
    links: [
      "Explore components",
      "Learn about themes and tokens",
      "Read the Tailwind integration guide",
    ],
    preview: "Interactive preview",
    saved: "Saved",
  },
} as const;

export function GettingStartedPage(props: GettingStartedPageProps) {
  const [saved, setSaved] = createSignal(false);
  const content = () => copy[props.language];
  const prefix = () => (props.language === "en" ? "/en" : "");

  return (
    <article class="mx-auto grid max-w-3xl gap-10 py-8">
      <header class="grid gap-4">
        <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-widest">
          newui · SolidJS
        </Text>
        <Heading as="h1" size="1" class="m-0 tracking-[-0.05em]">
          {content().title}
        </Heading>
        <Text size="4" tone="muted" class="m-0 max-w-2xl">
          {content().description}
        </Text>
      </header>

      <section class="grid gap-4" aria-labelledby="install-title">
        <Heading as="h2" size="3" class="m-0" id="install-title">
          {content().install}
        </Heading>
        <Text tone="muted" class="m-0">
          {content().installDescription}
        </Text>
        <CodeBlock>{"bun add @egcs/newui solid-js"}</CodeBlock>
      </section>

      <section class="grid gap-5" aria-labelledby="styles-title">
        <Heading as="h2" size="3" class="m-0" id="styles-title">
          {content().styles}
        </Heading>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Heading as="h3" size="5" class="m-0">
            {content().compiled}
          </Heading>
          <Text tone="muted" class="m-0">
            {content().compiledDescription}
          </Text>
          <CodeBlock>{'import "@egcs/newui/styles.css";'}</CodeBlock>
        </div>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Heading as="h3" size="5" class="m-0">
            {content().tailwind}
          </Heading>
          <Text tone="muted" class="m-0">
            {content().tailwindDescription}
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
          {content().component}
        </Heading>
        <Text tone="muted" class="m-0">
          {content().componentDescription}
        </Text>
        <CodeBlock>
          {
            'import { Button } from "@egcs/newui/actions";\n\nexport function SaveButton() {\n  return <Button>Save changes</Button>;\n}'
          }
        </CodeBlock>
        <div class="grid gap-4 rounded-2xl border border-border bg-surface p-6">
          <Text size="7" tone="muted" class="m-0 font-medium uppercase tracking-wider">
            {content().preview}
          </Text>
          <div class="flex flex-wrap gap-3">
            <Button onClick={() => setSaved(true)}>
              {saved() ? content().saved : content().save}
            </Button>
            <Button variant="outline">{content().cancel}</Button>
          </div>
        </div>
      </section>

      <section class="grid gap-3 border-t border-border pt-8" aria-labelledby="next-title">
        <Heading as="h2" size="4" class="m-0" id="next-title">
          {content().next}
        </Heading>
        <ul class="grid gap-2 pl-5 text-foreground">
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href={`${prefix()}/#componentes`}
            >
              {content().links[0]}
            </a>
          </li>
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href={`${prefix()}/#temas`}
            >
              {content().links[1]}
            </a>
          </li>
          <li>
            <a
              class="font-medium text-primary underline-offset-4 hover:underline"
              href="https://github.com/bearkfear/newui/blob/main/workspace/pkgs/ui/getting-started/tailwind.md"
            >
              {content().links[2]}
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
