import type { DocsLocale, OnboardingLocale } from "./docs-locales";
import { isOnboardingLocale } from "./docs-locales";
import en from "./en";
import type { Translation } from "./i18n-types";
import ptBR from "./pt-BR";

type ShellCopy = Pick<Translation, "navigation" | "settings" | "brand" | "footer">;

const onboardingShellCopy: Record<OnboardingLocale, ShellCopy> = {
  es: {
    navigation: {
      getStarted: "Primeros pasos",
      components: "Componentes",
      themes: "Temas",
      main: "Navegación principal",
      mobile: "Navegación móvil",
      menu: "Menú",
    },
    settings: {
      language: "Idioma de la documentación",
      appearance: "Modo de color",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    brand: {
      home: "newui — inicio",
      github: "GitHub",
      githubTooltip: "Visitar el repositorio en GitHub",
    },
    footer: {
      description: "Componentes para crear interfaces con SolidJS.",
      documentation: "Documentación",
      project: "Proyecto",
      repository: "Repositorio en GitHub",
      openSource: "Código abierto, construido en comunidad.",
      credit: "NewUI · Creado por EGCS",
    },
  },
  "zh-CN": {
    navigation: {
      getStarted: "快速入门",
      components: "组件",
      themes: "主题",
      main: "主导航",
      mobile: "移动端导航",
      menu: "菜单",
    },
    settings: {
      language: "文档语言",
      appearance: "配色模式",
      light: "浅色",
      dark: "深色",
      system: "跟随系统",
    },
    brand: { home: "newui — 首页", github: "GitHub", githubTooltip: "访问 GitHub 仓库" },
    footer: {
      description: "用于构建 SolidJS 界面的组件库。",
      documentation: "文档",
      project: "项目",
      repository: "GitHub 仓库",
      openSource: "开源，由社区共同构建。",
      credit: "NewUI · 由 EGCS 开发",
    },
  },
};

export function getShellCopy(locale: DocsLocale): ShellCopy {
  if (isOnboardingLocale(locale)) return onboardingShellCopy[locale];
  return locale === "en" ? en : ptBR;
}
