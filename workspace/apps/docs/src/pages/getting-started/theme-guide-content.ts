export const themeGuideCopy = {
  "pt-BR": {
    concepts: "O que são temas e tokens?",
    definition:
      "Tokens são variáveis CSS que guardam decisões de design, como a cor de uma ação, o raio de um botão ou a fonte do texto. Um tema define os valores desses tokens para uma interface inteira ou para uma seção.",
    semantic:
      'Os nomes descrevem a função do valor. Um botão com `tone="primary"` usa os tokens da ação principal. Ao mudar a paleta, os componentes continuam com a mesma intenção e passam a usar as novas cores.',
    modes: "Claro, escuro e sistema",
    modeInstructions:
      'Use `data-nui-theme="light"`, `data-nui-theme="dark"` ou `data-nui-theme="system"`. Na raiz, o atributo vale para o documento. Em uma seção, vale para aquela seção e seus descendentes. Por padrão, a NewUI acompanha a preferência do sistema.',
    modesPreview: "A mesma paleta em dois modos",
    light: "Claro",
    dark: "Escuro",
    action: "Continuar",
    label: "Em andamento",
    brand: "Aplique a identidade do seu produto",
    brandInstructions:
      "Use `createTheme` para escolher uma paleta e sobrescrever tokens. A função retorna um objeto de variáveis CSS. Aplique-o com `style` no contêiner para limitar o efeito àquele trecho.",
    paletteNotes:
      "A paleta preenche os papéis de cor em conjunto, incluindo fundo sólido, hover, bordas e texto. Para cores próprias, ajuste também os estados relacionados e verifique o contraste. A troca de cor principal sozinha afeta apenas os componentes e estados que leem esse token.",
    global: "Defina tokens no CSS global",
    globalInstructions:
      "Coloque as sobrescritas em `:root`, depois de carregar os estilos da NewUI. Ao escolher uma fonte, carregue a família no projeto. O token informa qual fonte usar.",
    tailwind:
      "Com o preset opcional do Tailwind, utilities como `bg-surface` e `rounded-md` leem os mesmos tokens. Os componentes já leem esses valores com o CSS compilado.",
    explore: "Experimente no editor de temas",
  },
  en: {
    concepts: "What are themes and tokens?",
    definition:
      "Tokens are CSS variables that store design decisions such as an action color, a button radius, or a font. A theme sets those values for an entire interface or for one section.",
    semantic:
      'Token names describe what a value does. A button with `tone="primary"` reads the primary action tokens. When the palette changes, components keep their meaning and pick up the new colors.',
    modes: "Light, dark, and system",
    modeInstructions:
      'Use `data-nui-theme="light"`, `data-nui-theme="dark"`, or `data-nui-theme="system"`. On the root, the attribute applies to the document. On a section, it applies to that section and its descendants. NewUI follows the system preference by default.',
    modesPreview: "The same palette in two modes",
    light: "Light",
    dark: "Dark",
    action: "Continue",
    label: "In progress",
    brand: "Apply your product’s visual identity",
    brandInstructions:
      "Use `createTheme` to select a palette and override tokens. The function returns a CSS variable object. Apply it with `style` on a container to scope the effect to that section.",
    paletteNotes:
      "A palette sets color roles together, including solid background, hover, borders, and text. For custom colors, adjust related states and check contrast. Changing the primary color alone affects the components and states that read that token.",
    global: "Set tokens in global CSS",
    globalInstructions:
      "Place overrides on `:root` after loading NewUI’s styles. When choosing a font, load the font family in your project. The token tells the application which font to use.",
    tailwind:
      "With the optional Tailwind preset, utilities such as `bg-surface` and `rounded-md` read the same tokens. Components already read these values with the compiled CSS.",
    explore: "Try the theme editor",
  },
} as const;
