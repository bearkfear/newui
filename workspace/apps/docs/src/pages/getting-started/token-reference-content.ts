export const tokenReferenceLabels = {
  "pt-BR": {
    title: "Referência de tokens",
    intro:
      "Use os nomes com prefixo `--nui-` no CSS. Em `createTheme({ tokens: … })`, os nomes da API usam camelCase, como `radiusMd` e `primarySoft`. Os tokens de componentes, como as sombras de popover e as cores de séries de gráficos, podem ser ajustados diretamente no CSS.",
    token: "Token",
    purpose: "Onde é usado",
    groups: [
      "Superfícies e texto",
      "Cores semânticas",
      "Tipografia",
      "Espaçamento e geometria",
      "Foco, movimento e elevação",
    ],
    roleNote:
      "Na tabela, `{tom}` pode ser `primary` (ação principal), `neutral` (ação neutra), `info` (informação), `success` (sucesso), `warning` (atenção) ou `danger` (erro ou ação destrutiva). Por exemplo, `--nui-danger-soft` é o fundo suave do tom danger.",
    scaleNote:
      "Os degraus de 1 a 12 vão de fundos sutis a texto de alto contraste. Use os tokens de estado para estilizar componentes. Eles já selecionam o degrau apropriado para a função e o modo.",
  },
  en: {
    title: "Token reference",
    intro:
      "Use names prefixed with `--nui-` in CSS. In `createTheme({ tokens: … })`, API names use camelCase, such as `radiusMd` and `primarySoft`. Component tokens such as popover shadows and chart series colors can be set directly in CSS.",
    token: "Token",
    purpose: "Where it is used",
    groups: [
      "Surfaces and text",
      "Semantic colors",
      "Typography",
      "Spacing and geometry",
      "Focus, motion, and elevation",
    ],
    roleNote:
      "In the table, `{tone}` can be `primary` (primary action), `neutral` (neutral action), `info` (information), `success` (success), `warning` (attention), or `danger` (error or destructive action). For example, `--nui-danger-soft` is the soft background for the danger tone.",
    scaleNote:
      "Steps 1 through 12 range from subtle backgrounds to high-contrast text. Use state tokens to style components. They already pick the step for the role and color mode.",
  },
} as const;

export const tokenGroups = [
  [
    [
      "background",
      "Fundo da aplicação ou de um contêiner temático.",
      "Application or themed container background.",
    ],
    [
      "surface",
      "Fundo secundário para agrupar conteúdo.",
      "Secondary background for grouping content.",
    ],
    ["foreground", "Cor padrão do texto.", "Default text color."],
    [
      "muted-foreground",
      "Cor de texto secundário e descrições.",
      "Color for secondary text and descriptions.",
    ],
    [
      "muted",
      "Realce discreto. Por padrão, usa o fundo suave do tom principal.",
      "Subtle highlight. Defaults to the primary tone’s soft background.",
    ],
    ["border", "Divisórias e bordas de superfícies.", "Dividers and surface borders."],
    [
      "control-border",
      "Borda padrão de campos e controles.",
      "Default border for fields and controls.",
    ],
    [
      "control-border-hover",
      "Borda de controles ao passar o ponteiro.",
      "Control border on hover.",
    ],
    [
      "disabled-background",
      "Fundo de controles desabilitados.",
      "Background for disabled controls.",
    ],
    [
      "disabled-foreground",
      "Texto e ícones de controles desabilitados.",
      "Text and icons in disabled controls.",
    ],
    ["disabled-border", "Borda de controles desabilitados.", "Border for disabled controls."],
  ],
  [
    ["{tone}", "Fundo sólido da ação ou do estado.", "Solid background for an action or status."],
    ["{tone}-hover", "Fundo sólido ao passar o ponteiro.", "Solid background on hover."],
    [
      "{tone}-soft",
      "Fundo suave, como o de badges e avisos.",
      "Soft background for elements such as badges and notices.",
    ],
    ["{tone}-soft-hover", "Fundo suave ao passar o ponteiro.", "Soft background on hover."],
    [
      "{tone}-soft-active",
      "Fundo suave pressionado ou selecionado.",
      "Soft background when pressed or selected.",
    ],
    [
      "{tone}-border",
      "Borda colorida, como a de um botão outline.",
      "Tinted border, such as an outline button border.",
    ],
    ["{tone}-border-hover", "Borda colorida ao passar o ponteiro.", "Tinted border on hover."],
    [
      "{tone}-text",
      "Texto e ícones coloridos sobre fundos suaves ou neutros.",
      "Tinted text and icons on soft or neutral backgrounds.",
    ],
    ["{tone}-text-strong", "Texto colorido com ênfase maior.", "Stronger tinted text."],
    ["{tone}-focus", "Cor de foco associada ao tom.", "Focus color for the tone."],
    [
      "on-{tone}",
      "Texto e ícones sobre o fundo sólido do tom.",
      "Text and icons on the tone’s solid background.",
    ],
    [
      "{tone}-1 … {tone}-12",
      "Escala de 12 degraus que alimenta os estados do tom.",
      "Twelve-step scale used by the tone’s state tokens.",
    ],
    [
      "chart-1 … chart-5",
      "Cores das séries dos gráficos, na ordem em que aparecem.",
      "Chart series colors in display order.",
    ],
  ],
  [
    [
      "font-sans",
      "Família padrão do texto e dos controles que herdam a fonte.",
      "Default font family for text and inheriting controls.",
    ],
    [
      "font-mono",
      "Família monoespaçada para código e outros trechos técnicos.",
      "Monospace family for code and other technical text.",
    ],
    [
      "font-size-{xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl}",
      "Escala geral de texto, de 0,75rem a 3rem.",
      "General text scale, from 0.75rem to 3rem.",
    ],
    [
      "font-size-{display-sm, display-md}",
      "Títulos de destaque. Os valores padrão são 2rem e 2,5rem.",
      "Display headings. Defaults are 2rem and 2.5rem.",
    ],
    [
      "font-weight-{normal, medium, semibold}",
      "Pesos padrão de 400, 500 e 600.",
      "Default weights of 400, 500, and 600.",
    ],
    [
      "leading-{tight, snug, normal, relaxed}",
      "Alturas de linha padrão de 1,25, 1,375, 1,5 e 1,625.",
      "Default line heights of 1.25, 1.375, 1.5, and 1.625.",
    ],
    [
      "tracking-tight",
      "Espaçamento entre letras em títulos mais compactos. O padrão é −0,025em.",
      "Letter spacing for compact headings. Defaults to −0.025em.",
    ],
  ],
  [
    [
      "space-unit",
      "Base de 0,25rem para espaçamento e medidas numéricas. Alterar o valor também afeta larguras e alturas que usam a escala.",
      "Base of 0.25rem for numeric spacing and sizing. Changing it also affects widths and heights that use the scale.",
    ],
    [
      "radius-{xs, sm, md, lg, xl, 2xl, 3xl, 4xl}",
      "Raio dos cantos, de 0,125rem a 2rem. Button usa md e Card usa xl por padrão.",
      "Corner radius, from 0.125rem to 2rem. Button defaults to md and Card to xl.",
    ],
    [
      "control-height-{xs, sm, md, lg}",
      "Altura dos controles por tamanho. Os padrões são 1,5rem, 2rem, 2,5rem e 3rem.",
      "Control heights by size. Defaults are 1.5rem, 2rem, 2.5rem, and 3rem.",
    ],
    [
      "header-gap",
      "Distância entre título e descrição em cabeçalhos compactos de Card, Dialog e outros componentes.",
      "Space between title and description in compact headers such as Card and Dialog.",
    ],
    [
      "resizable-handle-size",
      "Espessura do separador arrastável de Resizable.",
      "Thickness of the draggable Resizable separator.",
    ],
    [
      "toast-width / popover-width / hover-card-width",
      "Larguras de referência de Toast, Popover e HoverCard.",
      "Reference widths for Toast, Popover, and HoverCard.",
    ],
  ],
  [
    [
      "focus-ring / focus-width / focus-offset",
      "Cor, espessura e distância do contorno de foco.",
      "Color, thickness, and offset of the focus outline.",
    ],
    [
      "motion-duration / motion-easing",
      "Duração e curva padrão das transições, com 150ms e cubic-bezier(0.4, 0, 0.2, 1).",
      "Default transition duration and easing, 150ms and cubic-bezier(0.4, 0, 0.2, 1).",
    ],
    [
      "elevated-border / elevated-shadow",
      "Borda e sombra de superfícies elevadas, como Card.",
      "Border and shadow for elevated surfaces such as Card.",
    ],
    [
      "overlay-backdrop / overlay-shadow",
      "Fundo atrás de janelas modais e sombra do painel.",
      "Backdrop behind modals and shadow around the panel.",
    ],
    [
      "popover-shadow / tooltip-shadow / hover-card-shadow / toast-shadow",
      "Sombras próprias de cada tipo de sobreposição.",
      "Shadows for each type of overlay.",
    ],
    [
      "tooltip-background / tooltip-foreground",
      "Fundo e texto de Tooltip.",
      "Tooltip background and text.",
    ],
    [
      "z-overlay / z-popover / z-hover-card / z-tooltip",
      "Ordem de empilhamento das sobreposições.",
      "Stacking order of overlays.",
    ],
    [
      "loading-track / progress-track",
      "Fundo da trilha de indicadores de carregamento e progresso.",
      "Track backgrounds for loading and progress indicators.",
    ],
  ],
] as const;
