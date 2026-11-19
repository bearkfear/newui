export const guidePages = [
  "overview",
  "installation",
  "first-component",
  "themes-and-tokens",
  "tailwind",
] as const;
export type GuidePage = (typeof guidePages)[number];

export const guideCopy = {
  "pt-BR": {
    group: "Começar",
    onThisPage: "Nesta página",
    example: "Exemplo completo",
    previous: "Anterior",
    next: "Próximo",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    copyErrorLabel: "Selecione o código para copiar manualmente.",
    pages: {
      overview: {
        title: "Visão geral",
        description: "Adicione a NewUI a um projeto SolidJS e renderize seu primeiro componente.",
      },
      installation: {
        title: "Instalação",
        description: "Instale o pacote e carregue a folha de estilos compilada.",
      },
      "first-component": {
        title: "Primeiro componente",
        description:
          "Renderize um botão da NewUI e use um signal do Solid para atualizar seu texto.",
      },
      "themes-and-tokens": {
        title: "Temas e tokens",
        description:
          "Entenda como a NewUI usa variáveis CSS para definir cores, medidas e tipografia.",
      },
      tailwind: {
        title: "Tailwind CSS",
        description:
          "Configure o PostCSS para compilar só as áreas de estilos que seu projeto usa.",
      },
    },
    prerequisites: "Antes de começar",
    solidProject: "Você precisa de um projeto SolidJS.",
    createProject: "Criar um projeto SolidJS",
    chooseStyles: "Escolha como carregar os estilos",
    compiled:
      "O CSS compilado é o caminho mais curto. Ele inclui os estilos de todos os componentes e funciona sem configurar Tailwind.",
    optionalTailwind:
      "Se quiser selecionar áreas de estilos no build ou compartilhar os tokens com as utilities do seu projeto, siga a integração com Tailwind CSS 4.",
    installPackage: "Adicione a dependência",
    packageManager: "Gerenciador de pacotes",
    importStyles: "Importe o CSS",
    importInstructions:
      "Adicione este import uma vez no arquivo de entrada da aplicação. Em um projeto Solid com Vite, ele costuma ser `src/index.tsx`. No SolidStart, use `src/app.tsx`.",
    agentSkill: "Skill para Claude Code e Codex",
    agentSkillInstall:
      "Rode o comando na raiz do seu projeto e selecione Claude Code, Codex ou os dois. Para usar a skill em todos os seus projetos, adicione `-g`.",
    agentSkillLocal:
      "Se você tem um checkout da NewUI que já contém a skill, instale a partir dele com `npx skills add /caminho/para/newui/workspace/skills/newui --skill newui`.",
    agentSkillExample:
      "A skill traz os imports, as partes principais e links para exemplos de cada componente. Depois de instalar, peça ao agente algo como “Use a skill NewUI para adicionar um menu de ações em cada linha da tabela”.",
    componentInstructions:
      "Depois da instalação e do import do CSS, use este exemplo em `src/App.tsx` ou copie o componente para uma rota da sua aplicação.",
    preview: "Prévia interativa",
    sampleAction: "Salvar alterações",
    saved: "Salvo",
    tailwindDependencies: "Instale as dependências de build",
    tailwindVersions:
      "Este caminho usa Tailwind CSS 4.3.3 ou superior na série 4.x e PostCSS 8.5 ou superior na série 8.x.",
    configurePostcss: "Configure o PostCSS",
    postcssOrder: "Na raiz do projeto, registre o plugin da NewUI antes do plugin do Tailwind.",
    selectStyles: "Selecione as áreas de estilos",
    selectStylesInstructions:
      "Coloque estes imports na folha de estilos de entrada e importe esse arquivo uma vez na aplicação. Use essa folha no lugar de `@egcs/newui/styles.css`.",
    preset:
      "O preset é opcional. Ele conecta utilities como bg-surface aos tokens da NewUI. O import actions.css inclui os estilos do Button.",
  },
  en: {
    group: "Get started",
    onThisPage: "On this page",
    example: "Complete example",
    previous: "Previous",
    next: "Next",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    copyErrorLabel: "Select the code to copy it manually.",
    pages: {
      overview: {
        title: "Overview",
        description: "Add NewUI to a SolidJS project and render your first component.",
      },
      installation: {
        title: "Installation",
        description: "Install the package and load the compiled stylesheet.",
      },
      "first-component": {
        title: "First component",
        description: "Render a NewUI button and use a Solid signal to update its text.",
      },
      "themes-and-tokens": {
        title: "Themes and tokens",
        description: "Learn how NewUI uses CSS variables to define colors, sizing, and typography.",
      },
      tailwind: {
        title: "Tailwind CSS",
        description: "Configure PostCSS to compile only the style areas your project uses.",
      },
    },
    prerequisites: "Before you start",
    solidProject: "You need a SolidJS project.",
    createProject: "Create a SolidJS project",
    chooseStyles: "Choose how to load styles",
    compiled:
      "Compiled CSS is the shortest path. It includes styles for every component and works without Tailwind configuration.",
    optionalTailwind:
      "Use the Tailwind CSS 4 integration to select style areas at build time or share tokens with your application utilities.",
    installPackage: "Add the dependency",
    packageManager: "Package manager",
    importStyles: "Import the CSS",
    importInstructions:
      "Add this import once in your application entry. In a Solid project with Vite, that is usually `src/index.tsx`. With SolidStart, use `src/app.tsx`.",
    agentSkill: "Skill for Claude Code and Codex",
    agentSkillInstall:
      "Run this command from your project root and select Claude Code, Codex, or both. Add `-g` to make the skill available across your projects.",
    agentSkillLocal:
      "If you have a NewUI checkout that contains the skill, install it with `npx skills add /path/to/newui/workspace/skills/newui --skill newui`.",
    agentSkillExample:
      "The skill includes imports, component anatomy, and links to examples. After installation, ask your agent something like “Use the NewUI skill to add an actions menu to each row of this table.”",
    componentInstructions:
      "After installing the package and importing the CSS, use this example in `src/App.tsx` or copy the component into a route in your application.",
    preview: "Interactive preview",
    sampleAction: "Save changes",
    saved: "Saved",
    tailwindDependencies: "Install the build dependencies",
    tailwindVersions:
      "This setup uses Tailwind CSS 4.3.3 or later in the 4.x series and PostCSS 8.5 or later in the 8.x series.",
    configurePostcss: "Configure PostCSS",
    postcssOrder: "In the project root, register the NewUI plugin before the Tailwind plugin.",
    selectStyles: "Select style areas",
    selectStylesInstructions:
      "Add these imports to your entry stylesheet and import that file once in your application. Use it in place of `@egcs/newui/styles.css`.",
    preset:
      "The optional preset connects utilities such as bg-surface to NewUI tokens. The actions.css import includes styles for Button.",
  },
};

export type GuideCopy = (typeof guideCopy)[keyof typeof guideCopy];
