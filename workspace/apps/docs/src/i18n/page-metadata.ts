import { componentAnchor } from "../pages/components/component-catalog";
import { componentSummaries } from "./component-summaries";
import type { Locales } from "./i18n-types";

type PageMetadata = { title: string; description: string };

export const pageMetadata = {
  "/": {
    "pt-BR": {
      title: "NewUI — Biblioteca de componentes para SolidJS",
      description:
        "Construa interfaces com componentes acessíveis para SolidJS. Explore botões, formulários, tabelas, gráficos, temas personalizáveis e exemplos interativos da NewUI.",
    },
    en: {
      title: "NewUI — SolidJS UI Component Library",
      description:
        "Build accessible SolidJS interfaces with NewUI. Explore buttons, forms, tables, charts, customizable themes, and interactive component examples.",
    },
  },
  "/getting-started/": {
    "pt-BR": {
      title: "Começar com a NewUI no SolidJS",
      description:
        "Adicione a NewUI a um projeto SolidJS, escolha como carregar os estilos e renderize seu primeiro componente. Veja os pré-requisitos e os caminhos de integração.",
    },
    en: {
      title: "Get Started with NewUI for SolidJS",
      description:
        "Add NewUI to a SolidJS project, choose a stylesheet setup, and render your first component. Find prerequisites and the right integration path.",
    },
  },
  "/getting-started/installation/": {
    "pt-BR": {
      title: "Instalar NewUI em um projeto SolidJS",
      description:
        "Instale @egcs/newui com npm, pnpm, Yarn ou Bun e importe o CSS compilado no arquivo de entrada do seu projeto SolidJS ou SolidStart.",
    },
    en: {
      title: "Install NewUI in a SolidJS Project",
      description:
        "Install @egcs/newui with npm, pnpm, Yarn, or Bun and import the compiled CSS from the entry point of your SolidJS or SolidStart project.",
    },
  },
  "/getting-started/first-component/": {
    "pt-BR": {
      title: "Seu primeiro componente SolidJS com NewUI",
      description:
        "Crie seu primeiro botão com a NewUI. Copie o exemplo de App.tsx e aprenda a atualizar o rótulo do botão com um signal do SolidJS.",
    },
    en: {
      title: "Build Your First SolidJS Component with NewUI",
      description:
        "Build your first NewUI button. Copy the complete App.tsx example and learn how to update a button label with a SolidJS signal.",
    },
  },
  "/getting-started/themes-and-tokens/": {
    "pt-BR": {
      title: "Temas e tokens de design para SolidJS",
      description:
        "Entenda os tokens CSS da NewUI e personalize cores, tipografia e espaçamento. Use createTheme e configure os modos claro, escuro ou sistema.",
    },
    en: {
      title: "Themes and Design Tokens for SolidJS",
      description:
        "Explore NewUI CSS design tokens for color, type, and spacing. Use createTheme to customize components and set light, dark, or system appearance.",
    },
  },
  "/getting-started/tailwind/": {
    "pt-BR": {
      title: "Integração NewUI com Tailwind CSS 4",
      description:
        "Configure NewUI e Tailwind CSS 4 com PostCSS. Instale as dependências de build, importe áreas de estilos e adote os tokens com o preset opcional.",
    },
    en: {
      title: "NewUI and Tailwind CSS 4 Integration",
      description:
        "Configure NewUI and Tailwind CSS 4 with PostCSS. Install the build dependencies, import component styles by area, and adopt the optional token preset.",
    },
  },
  "/components/": {
    "pt-BR": {
      title: "Catálogo de componentes SolidJS",
      description:
        "Explore os componentes da NewUI por área: ações, formulários, navegação, layout, feedback, dados, gráficos e composições para SolidJS.",
    },
    en: {
      title: "SolidJS UI Component Catalog",
      description:
        "Browse NewUI components for SolidJS by area, including actions, forms, navigation, layout, feedback, data, charts, and compositions.",
    },
  },
  "/components/button/": {
    "pt-BR": {
      title: "Button para SolidJS — Variantes, estados e API",
      description:
        "Use o Button da NewUI com SolidJS. Compare variantes, tons e tamanhos, veja ícones e estados como loading e aria-pressed e copie o JSX dos exemplos.",
    },
    en: {
      title: "SolidJS Button — Variants, States and API",
      description:
        "Use NewUI Button in SolidJS. Compare variants, tones, and sizes, explore icons and states including loading and aria-pressed, and copy JSX examples.",
    },
  },
  "/components/button-group/": {
    "pt-BR": {
      title: "ButtonGroup para SolidJS — Grupos de botões",
      description:
        "Organize botões relacionados no SolidJS com ButtonGroup. Veja exemplos de botões unidos, orientação vertical, estilos compartilhados e estado desabilitado.",
    },
    en: {
      title: "SolidJS ButtonGroup — Layout and API",
      description:
        "Group related SolidJS buttons with NewUI ButtonGroup. Explore attached buttons, vertical layout, shared styling, disabled state, and JSX examples.",
    },
  },
  "/themes/": {
    "pt-BR": {
      title: "Editor de temas para SolidJS",
      description:
        "Personalize as cores, os raios e os tokens da NewUI. Veja as mudanças nos componentes e copie a configuração em CSS ou createTheme para seu projeto SolidJS.",
    },
    en: {
      title: "SolidJS Theme Editor and CSS Tokens",
      description:
        "Customize NewUI colors, radii, and design tokens in a live preview. Copy CSS variables or a createTheme configuration for your SolidJS project.",
    },
  },
} satisfies Record<string, Record<Locales, PageMetadata>>;

export type IndexablePath = keyof typeof pageMetadata | `/components/${string}/`;

export const indexablePages: Record<string, Record<Locales, PageMetadata>> = {
  ...Object.fromEntries(
    Object.entries(componentSummaries).map(([name, summary]) => [
      `/components/${componentAnchor(name as keyof typeof componentSummaries)}/`,
      {
        "pt-BR": { title: `${name} para SolidJS — Exemplos e API`, description: summary["pt-BR"] },
        en: { title: `${name} for SolidJS — Examples and API`, description: summary.en },
      },
    ]),
  ),
  ...pageMetadata,
};

export const missingPageMetadata = {
  "pt-BR": {
    title: "Página não encontrada",
    description: "Esta página da documentação da NewUI não está disponível.",
    action: "Voltar à página inicial",
  },
  en: {
    title: "Page not found",
    description: "This NewUI documentation page is unavailable.",
    action: "Back to the homepage",
  },
};
