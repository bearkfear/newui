import {
  type DocsLocale,
  isOnboardingLocale,
  type OnboardingLocale,
} from "../../i18n/docs-locales";
import { type GuideCopy, guideCopy } from "./getting-started-content";

type OnboardingCopy = Omit<
  GuideCopy,
  | "tailwindDependencies"
  | "tailwindVersions"
  | "configurePostcss"
  | "postcssOrder"
  | "selectStyles"
  | "selectStylesInstructions"
  | "preset"
> & { otherGuides: string };

const onboardingCopy: Record<OnboardingLocale, OnboardingCopy> = {
  es: {
    group: "Primeros pasos",
    onThisPage: "En esta página",
    example: "Ejemplo completo",
    previous: "Anterior",
    next: "Siguiente",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    copyErrorLabel: "Selecciona el código para copiarlo manualmente.",
    pages: {
      overview: {
        title: "Introducción",
        description: "Añade NewUI a un proyecto SolidJS y muestra tu primer componente.",
      },
      installation: {
        title: "Instalación",
        description: "Instala el paquete y carga la hoja de estilos compilada.",
      },
      "first-component": {
        title: "Primer componente",
        description: "Muestra un botón de NewUI y actualiza su texto con una señal de Solid.",
      },
      "themes-and-tokens": {
        title: "Temas y tokens (en inglés)",
        description: "Aprende a personalizar NewUI con variables CSS.",
      },
      tailwind: {
        title: "Tailwind CSS (en inglés)",
        description: "Configura PostCSS para compilar las áreas de estilos que usa tu proyecto.",
      },
    },
    prerequisites: "Antes de empezar",
    solidProject: "Necesitas un proyecto SolidJS.",
    createProject: "Crear un proyecto SolidJS",
    chooseStyles: "Elige cómo cargar los estilos",
    compiled:
      "El CSS compilado incluye los estilos de todos los componentes y funciona sin configurar Tailwind.",
    optionalTailwind:
      "La integración con Tailwind CSS 4 permite elegir qué estilos compilar y compartir tokens con las utilidades de tu proyecto.",
    otherGuides:
      "El catálogo de componentes y las guías de temas y Tailwind están disponibles en inglés.",
    installPackage: "Añade la dependencia",
    packageManager: "Gestor de paquetes",
    importStyles: "Importa el CSS",
    importInstructions:
      "Añade esta importación una sola vez en el punto de entrada de tu aplicación. En Solid con Vite suele ser `src/index.tsx`. En SolidStart, usa `src/app.tsx`.",
    agentSkill: "Skill para Claude Code y Codex",
    agentSkillInstall:
      "Cuando la skill se publique en `egcs/newui`, ejecuta este comando desde la raíz de tu proyecto y selecciona Claude Code, Codex o ambos. Añade `-g` para usarla en todos tus proyectos.",
    agentSkillLocal:
      "Si tienes una copia local del repositorio de NewUI que incluye la skill, instálala con `npx skills add /ruta/a/newui/workspace/skills/newui --skill newui`.",
    agentSkillExample:
      "La skill incluye importaciones, las partes principales de cada componente y enlaces a ejemplos. Pídele al agente algo como «Usa la skill de NewUI para añadir un menú de acciones a cada fila de esta tabla».",
    componentInstructions:
      "Después de instalar la biblioteca e importar el CSS, usa este ejemplo en `src/App.tsx` o copia el componente en una ruta de tu aplicación.",
    preview: "Vista previa interactiva",
    sampleAction: "Guardar cambios",
    saved: "Guardado",
  },
  "zh-CN": {
    group: "快速入门",
    onThisPage: "本页目录",
    example: "完整示例",
    previous: "上一篇",
    next: "下一篇",
    copyLabel: "复制",
    copiedLabel: "已复制",
    copyErrorLabel: "请选择代码并手动复制。",
    pages: {
      overview: {
        title: "概览",
        description: "在 SolidJS 项目中添加 NewUI，并渲染你的第一个组件。",
      },
      installation: { title: "安装", description: "安装软件包并加载编译好的样式表。" },
      "first-component": {
        title: "第一个组件",
        description: "渲染一个 NewUI 按钮，并用 Solid 的信号更新按钮文字。",
      },
      "themes-and-tokens": {
        title: "主题与设计令牌（英文）",
        description: "了解如何通过 CSS 变量自定义 NewUI。",
      },
      tailwind: {
        title: "Tailwind CSS（英文）",
        description: "配置 PostCSS，只编译项目所需的样式。",
      },
    },
    prerequisites: "准备工作",
    solidProject: "你需要一个 SolidJS 项目。",
    createProject: "创建 SolidJS 项目",
    chooseStyles: "选择样式加载方式",
    compiled: "编译好的 CSS 包含所有组件的样式，无需配置 Tailwind 即可使用。",
    optionalTailwind:
      "通过 Tailwind CSS 4 集成，可以选择要编译的样式模块，也可以在项目的工具类中复用 NewUI 的设计令牌。",
    otherGuides: "组件目录、主题和 Tailwind 集成指南目前提供英文版。",
    installPackage: "添加依赖",
    packageManager: "包管理器",
    importStyles: "导入 CSS",
    importInstructions:
      "在应用入口文件中导入一次即可。使用 Vite 的 Solid 项目通常在 `src/index.tsx` 中导入；使用 SolidStart 时，请在 `src/app.tsx` 中导入。",
    agentSkill: "Claude Code 和 Codex 的 NewUI 技能",
    agentSkillInstall:
      "技能发布到 `egcs/newui` 后，在项目根目录运行以下命令，选择 Claude Code、Codex 或同时选择两者。加上 `-g` 可在所有项目中使用。",
    agentSkillLocal:
      "如果你已在本地检出包含该技能的 NewUI 仓库，可以运行 `npx skills add /path/to/newui/workspace/skills/newui --skill newui` 进行安装。",
    agentSkillExample:
      "技能提供各组件的导入方式、主要组成部分和示例链接。你可以对编程助手说：“用 NewUI 技能给这个表格的每一行添加操作菜单。”",
    componentInstructions:
      "安装软件包并导入 CSS 后，将此示例放入 `src/App.tsx`，或把组件复制到应用的某个路由中。",
    preview: "交互预览",
    sampleAction: "保存更改",
    saved: "已保存",
  },
};

export function getGuideCopy(locale: DocsLocale): GuideCopy & { otherGuides?: string } {
  return isOnboardingLocale(locale)
    ? { ...guideCopy.en, ...onboardingCopy[locale] }
    : guideCopy[locale];
}
