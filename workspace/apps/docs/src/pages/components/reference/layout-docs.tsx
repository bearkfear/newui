import { Heading, Text } from "@egcs/newui/content";
import { Container, Resizable, Section } from "@egcs/newui/layout";
import { componentSummaries } from "../../../i18n/component-summaries";
import type { Locales } from "../../../i18n/i18n-types";
import type { ComponentDocumentation } from "./reference-types";

const containerCopy = {
  "pt-BR": "Conteúdo com margens laterais",
  en: "Content with responsive gutters",
};
const sectionCopy = { "pt-BR": "Visão geral do projeto", en: "Project overview" };
const panels = [
  { id: "navigation", minSize: 25 },
  { id: "details", minSize: 30 },
];
const labels = {
  "pt-BR": { navigation: "Navegação", details: "Detalhes", resize: "Redimensionar os painéis" },
  en: { navigation: "Navigation", details: "Details", resize: "Resize the panels" },
};

function ResizablePreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  return (
    <Resizable.Root
      panels={panels}
      defaultSize={[40, 60]}
      style={{ width: "100%", height: "8rem" }}
    >
      <Resizable.Panel id="navigation" class="grid place-items-center bg-background p-2">
        <Text size="7" class="m-0">
          {text().navigation}
        </Text>
      </Resizable.Panel>
      <Resizable.Handle id="navigation:details" aria-label={text().resize} withHandle />
      <Resizable.Panel id="details" class="grid place-items-center bg-background p-2">
        <Text size="7" class="m-0">
          {text().details}
        </Text>
      </Resizable.Panel>
    </Resizable.Root>
  );
}

export const docs = {
  Container: {
    summary: componentSummaries.Container,
    usage: {
      "pt-BR":
        "Use um Container dentro de uma seção de largura total para alinhar o conteúdo às demais seções da página. Escolha o limite com `size`.",
      en: "Place a Container inside a full-width section to align its content with the rest of the page. Use `size` to choose the width limit.",
    },
    rows: [
      ["size", "sm, md, lg, full", "lg"],
      ["children", "JSX.Element", "—"],
      ["class", "string", "—"],
    ],
    code: (locale) => `import { Container } from "@egcs/newui/layout";

<Container size="sm">${containerCopy[locale]}</Container>`,
    preview: (props) => (
      <Container size="sm" class="rounded-lg border border-dashed border-border bg-background py-4">
        {containerCopy[props.locale]}
      </Container>
    ),
  },
  Resizable: {
    summary: componentSummaries.Resizable,
    usage: {
      "pt-BR":
        "Dê uma largura e uma altura ao Root. Use os mesmos IDs em `panels` e `Panel` e arraste o separador ou use as setas quando ele estiver em foco.",
      en: "Give Root a usable width and height. Match the IDs in `panels` and `Panel`, then drag the divider or use the arrow keys while it is focused.",
    },
    rows: [
      ["Root.panels", "{ id, minSize?, maxSize?, collapsible? }[]", "—"],
      ["Root.defaultSize / size", "(number | string)[]", "—"],
      ["Root.orientation", "horizontal, vertical", "horizontal"],
      ["Handle.id", "beforeId:afterId", "—"],
      ["Handle.withHandle", "boolean", "false"],
      ["Root.onResizeEnd", "(details) => void", "—"],
    ],
    code: (locale) => `import { Resizable } from "@egcs/newui/layout";

<Resizable.Root
  panels={[${panels.map(({ id, minSize }) => `{ id: "${id}", minSize: ${minSize} }`).join(", ")}]}
  defaultSize={[40, 60]}
  style={{ width: "100%", height: "8rem" }}
>
  <Resizable.Panel id="navigation">${labels[locale].navigation}</Resizable.Panel>
  <Resizable.Handle id="navigation:details" aria-label=${JSON.stringify(labels[locale].resize)} withHandle />
  <Resizable.Panel id="details">${labels[locale].details}</Resizable.Panel>
</Resizable.Root>`,
    preview: ResizablePreview,
  },
  Section: {
    summary: componentSummaries.Section,
    usage: {
      "pt-BR":
        "Combine Section com Container para controlar o espaçamento vertical e as margens laterais. Associe o título da região com `aria-labelledby`.",
      en: "Pair Section with Container to set vertical spacing and side gutters. Connect the region’s heading with `aria-labelledby`.",
    },
    rows: [
      ["spacing", "sm, md, lg", "md"],
      ["aria-labelledby", "string", "—"],
      ["children", "JSX.Element", "—"],
    ],
    code: (locale) => `import { Container, Section } from "@egcs/newui/layout";
import { Heading } from "@egcs/newui/content";

<Section spacing="sm" aria-labelledby="project-overview">
  <Container size="sm">
    <Heading as="h3" id="project-overview">${sectionCopy[locale]}</Heading>
  </Container>
</Section>`,
    preview: (props) => (
      <Section
        spacing="sm"
        aria-labelledby="project-overview"
        class="w-full rounded-lg bg-background"
      >
        <Container size="sm">
          <Heading as="h3" size="5" id="project-overview" class="m-0">
            {sectionCopy[props.locale]}
          </Heading>
        </Container>
      </Section>
    ),
  },
} satisfies Record<string, ComponentDocumentation>;
