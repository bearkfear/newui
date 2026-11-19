import { Button } from "@egcs/newui/actions";
import { ActionBar, Footer, Hero, MediaObject, Panel } from "@egcs/newui/compositions";
import { Avatar, Badge } from "@egcs/newui/content";
import { createSignal } from "solid-js";
import { componentSummaries } from "../../../i18n/component-summaries";
import type { Locales } from "../../../i18n/i18n-types";
import { getLocalizedPath } from "../../../lib/localized-path";
import type { ComponentDocumentation } from "./reference-types";

const labels = {
  "pt-BR": {
    selection: "3 arquivos selecionados",
    selectionDescription: "Arquive os arquivos selecionados de uma vez.",
    archive: "Arquivar",
    archived: "3 arquivos arquivados",
    resources: "Recursos",
    guide: "Começar",
    catalog: "Componentes",
    themes: "Temas",
    hero: "Organize seu espaço",
    description: "Acompanhe projetos e decisões em um só lugar.",
    comment: "O protótipo está pronto para revisão.",
    status: "Em revisão",
    projects: "Projetos recentes",
    projectNote: "Acompanhe o trabalho em andamento.",
    design: "Sistema de design",
    website: "Site de documentação",
  },
  en: {
    selection: "3 files selected",
    selectionDescription: "Archive the selected files in one action.",
    archive: "Archive",
    archived: "3 files archived",
    resources: "Resources",
    guide: "Get started",
    catalog: "Components",
    themes: "Themes",
    hero: "Organize your workspace",
    description: "Track projects and decisions in one place.",
    comment: "The prototype is ready for review.",
    status: "In review",
    projects: "Recent projects",
    projectNote: "Track the work in progress.",
    design: "Design system",
    website: "Documentation site",
  },
};

function ActionBarPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [archived, setArchived] = createSignal(false);
  return (
    <ActionBar.Root class="w-full" variant="surface">
      <ActionBar.Content>
        <ActionBar.Title as="h3" aria-live="polite">
          {archived() ? text().archived : text().selection}
        </ActionBar.Title>
        <ActionBar.Description>{text().selectionDescription}</ActionBar.Description>
      </ActionBar.Content>
      <ActionBar.Actions>
        <Button size="sm" disabled={archived()} onClick={() => setArchived(true)}>
          {text().archive}
        </Button>
      </ActionBar.Actions>
    </ActionBar.Root>
  );
}

function FooterPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  return (
    <Footer.Root tone="subtle" width="full" class="w-full">
      <Footer.Content>
        <Footer.Brand>newui.</Footer.Brand>
        <Footer.Links>
          <Footer.Group aria-label={text().resources}>
            <Footer.Title as="h3">{text().resources}</Footer.Title>
            <Footer.Link href={getLocalizedPath("/getting-started/", props.locale)}>
              {text().guide}
            </Footer.Link>
            <Footer.Link href={getLocalizedPath("/components/", props.locale)}>
              {text().catalog}
            </Footer.Link>
          </Footer.Group>
        </Footer.Links>
      </Footer.Content>
    </Footer.Root>
  );
}

export const docs = {
  ActionBar: {
    summary: componentSummaries.ActionBar,
    usage: {
      "pt-BR":
        "Combine Content e Actions para uma seleção em massa. A barra reorganiza os elementos conforme a largura. A aplicação controla a seleção e o resultado da ação.",
      en: "Combine Content and Actions for a bulk selection. The bar rearranges the elements as space changes. The application owns selection and the action result.",
    },
    rows: [
      ["Root.variant", "plain, surface", "plain"],
      ["Title.as", "heading element", "h2"],
      ["Description.size", "1 … 7", "7"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal } from "solid-js";
import { Button } from "@egcs/newui/actions";
import { ActionBar } from "@egcs/newui/compositions";

export function ArchiveActions() {
  const [archived, setArchived] = createSignal(false);

  return (
    <ActionBar.Root variant="surface">
      <ActionBar.Content>
        <ActionBar.Title aria-live="polite">
          {archived() ? ${JSON.stringify(text.archived)} : ${JSON.stringify(text.selection)}}
        </ActionBar.Title>
        <ActionBar.Description>${text.selectionDescription}</ActionBar.Description>
      </ActionBar.Content>
      <ActionBar.Actions>
        <Button size="sm" disabled={archived()} onClick={() => setArchived(true)}>${text.archive}</Button>
      </ActionBar.Actions>
    </ActionBar.Root>
  );
}`;
    },
    preview: ActionBarPreview,
  },
  Footer: {
    summary: componentSummaries.Footer,
    usage: {
      "pt-BR":
        "Agrupe links por assunto e dê um nome a cada grupo. Coloque o rodapé da página fora do conteúdo principal para expor a região semântica de rodapé.",
      en: "Group links by topic and name each group. Place a page-level footer outside the main content so it exposes the contentinfo landmark.",
    },
    rows: [
      ["Root.tone", "default, subtle", "default"],
      ["Root.width", "sm, md, lg, full", "lg"],
      ["Group.aria-label", "string", "—"],
      ["Link.href / aria-current", "URL / page", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Footer } from "@egcs/newui/compositions";

<Footer.Root tone="subtle" width="full">
  <Footer.Content>
    <Footer.Brand>newui.</Footer.Brand>
    <Footer.Links>
      <Footer.Group aria-label=${JSON.stringify(text.resources)}>
        <Footer.Title>${text.resources}</Footer.Title>
        <Footer.Link href="${getLocalizedPath("/getting-started/", locale)}">${text.guide}</Footer.Link>
        <Footer.Link href="${getLocalizedPath("/components/", locale)}">${text.catalog}</Footer.Link>
      </Footer.Group>
    </Footer.Links>
  </Footer.Content>
</Footer.Root>`;
    },
    preview: FooterPreview,
  },
  Hero: {
    summary: componentSummaries.Hero,
    usage: {
      "pt-BR":
        "Use o layout empilhado para uma mensagem curta ou `split` quando houver mídia. Ajuste o nível de Title à hierarquia do documento.",
      en: "Use the stacked layout for a short message or `split` when there is media. Set the Title level to match the document outline.",
    },
    rows: [
      ["Root.layout", "stacked, split", "stacked"],
      ["Root.align", "start, center", "start"],
      ["Root.tone", "default, subtle, accent", "default"],
      ["Root.spacing", "sm, md, lg", "md"],
      ["Root.width", "sm, md, lg, full", "lg"],
    ],
    code: (locale) => `import { Hero } from "@egcs/newui/compositions";

<Hero.Root tone="accent" align="center" spacing="sm" aria-labelledby="workspace-title">
  <Hero.Content>
    <Hero.Title id="workspace-title">${labels[locale].hero}</Hero.Title>
    <Hero.Description>${labels[locale].description}</Hero.Description>
  </Hero.Content>
</Hero.Root>`,
    preview: (props) => (
      <Hero.Root
        class="w-full rounded-lg"
        tone="accent"
        align="center"
        spacing="sm"
        aria-labelledby="workspace-title"
      >
        <Hero.Content>
          <Hero.Title as="h3" size="4" id="workspace-title">
            {labels[props.locale].hero}
          </Hero.Title>
          <Hero.Description>{labels[props.locale].description}</Hero.Description>
        </Hero.Content>
      </Hero.Root>
    ),
  },
  MediaObject: {
    summary: componentSummaries.MediaObject,
    usage: {
      "pt-BR":
        "Use Media, Content e Actions como filhos diretos. As ações vão para baixo do conteúdo em telas menores.",
      en: "Use Media, Content, and Actions as direct children. Actions move below the content on smaller screens.",
    },
    rows: [
      ["Root.size", "sm, md, lg", "md"],
      ["Root.align", "start, center", "start"],
      ["Root.as", "article, div", "article"],
      ["Title.as", "heading element", "h3"],
    ],
    code: (locale) => `import { MediaObject } from "@egcs/newui/compositions";
import { Avatar, Badge } from "@egcs/newui/content";

<MediaObject.Root align="center">
  <MediaObject.Media>
    <Avatar.Root><Avatar.Fallback>AC</Avatar.Fallback></Avatar.Root>
  </MediaObject.Media>
  <MediaObject.Content>
    <MediaObject.Title>Alex Costa</MediaObject.Title>
    <MediaObject.Description>${labels[locale].comment}</MediaObject.Description>
  </MediaObject.Content>
  <MediaObject.Actions><Badge tone="info">${labels[locale].status}</Badge></MediaObject.Actions>
</MediaObject.Root>`,
    preview: (props) => (
      <MediaObject.Root align="center" class="w-full">
        <MediaObject.Media>
          <Avatar.Root>
            <Avatar.Fallback>AC</Avatar.Fallback>
          </Avatar.Root>
        </MediaObject.Media>
        <MediaObject.Content>
          <MediaObject.Title>Alex Costa</MediaObject.Title>
          <MediaObject.Description>{labels[props.locale].comment}</MediaObject.Description>
        </MediaObject.Content>
        <MediaObject.Actions>
          <Badge tone="info">{labels[props.locale].status}</Badge>
        </MediaObject.Actions>
      </MediaObject.Root>
    ),
  },
  Panel: {
    summary: componentSummaries.Panel,
    usage: {
      "pt-BR":
        "Dê um nome à seção com o ID do título. Use List e Item para registros ou Body para conteúdo livre. Links e filtros pertencem à aplicação.",
      en: "Name the section with its title ID. Use List and Item for records or Body for free-form content. The application owns links and filters.",
    },
    rows: [
      ["Root.tone", "default, subtle", "default"],
      ["Header.variant", "plain, soft, solid", "plain"],
      ["Header.tone", "semantic tone", "neutral"],
      ["Header.density", "comfortable, compact", "comfortable"],
      ["Link.href", "URL", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Panel } from "@egcs/newui/compositions";

<Panel.Root aria-labelledby="recent-projects">
  <Panel.Header variant="soft">
    <Panel.Title id="recent-projects">${text.projects}</Panel.Title>
    <Panel.Description>${text.projectNote}</Panel.Description>
  </Panel.Header>
  <Panel.List>
    <Panel.Item><Panel.Link href="${getLocalizedPath("/themes/", locale)}">${text.design}</Panel.Link></Panel.Item>
    <Panel.Item><Panel.Link href="${getLocalizedPath("/getting-started/", locale)}">${text.website}</Panel.Link></Panel.Item>
  </Panel.List>
</Panel.Root>`;
    },
    preview: (props) => (
      <Panel.Root aria-labelledby="recent-projects" class="w-full">
        <Panel.Header variant="soft">
          <Panel.Title as="h3" id="recent-projects">
            {labels[props.locale].projects}
          </Panel.Title>
          <Panel.Description>{labels[props.locale].projectNote}</Panel.Description>
        </Panel.Header>
        <Panel.List>
          <Panel.Item>
            <Panel.Link href={getLocalizedPath("/themes/", props.locale)}>
              {labels[props.locale].design}
            </Panel.Link>
          </Panel.Item>
          <Panel.Item>
            <Panel.Link href={getLocalizedPath("/getting-started/", props.locale)}>
              {labels[props.locale].website}
            </Panel.Link>
          </Panel.Item>
        </Panel.List>
      </Panel.Root>
    ),
  },
} satisfies Record<string, ComponentDocumentation>;
