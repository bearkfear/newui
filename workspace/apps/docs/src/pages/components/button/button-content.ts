export const buttonVariants = ["solid", "outline", "soft", "ghost", "link"] as const;
export const buttonTones = ["primary", "neutral", "info", "success", "warning", "danger"] as const;
export const buttonSizes = ["xs", "sm", "md", "lg"] as const;

export const buttonCopy = {
  "pt-BR": {
    section: "Ações",
    navigation: "Áreas do catálogo",
    onThisPage: "Nesta página",
    description:
      "Acione uma operação, envie um formulário ou confirme uma decisão com um botão nativo.",
    usage: "Uso básico",
    preview: "Prévia",
    code: "Código",
    usageDescription:
      'Por padrão, Button usa `type="button"`. Em um formulário, use `type="submit"` para enviar. Para navegar até uma URL, use um link `<a>`.',
    save: "Salvar alterações",
    saved: "Alterações salvas",
    variants: "Variantes",
    variantDescription:
      "O `variant` define a ênfase visual. Use `solid` para a ação principal, `outline` ou `soft` para alternativas e `ghost` para ações discretas. `link` dá ao botão a aparência de um link.",
    tones: "Tons",
    toneDescription:
      "O `tone` comunica a intenção da ação e acompanha o tema. Por exemplo, `danger` sinaliza uma ação destrutiva.",
    sizes: "Tamanhos",
    sizeDescription:
      "As alturas padrão vão de 24 px (`xs`) a 48 px (`lg`). Com `responsive`, o botão usa um tamanho abaixo em telas menores que 640 px. `xs` fica com a mesma altura. Use `rounded` para cantos em formato de pílula e `fullWidth` para preencher a largura disponível.",
    icons: "Ícones",
    iconDescription:
      "Use `startIcon` ou `endIcon` para complementar um rótulo. Dê um nome acessível com `aria-label` quando o botão tiver só um ícone.",
    add: "Adicionar",
    continue: "Continuar",
    search: "Buscar",
    states: "Estados",
    stateDescription:
      "Use `disabled` para indisponibilidade e `loading` durante uma operação. Durante o carregamento, o botão bloqueia novos cliques, mantém sua largura e seu nome acessível e expõe `aria-busy`. Use `aria-pressed` para uma ação de alternância, como marcar um favorito. Passe o ponteiro, use Tab ou mantenha o botão pressionado para ver hover, foco e `:active`.",
    unavailable: "Indisponível",
    favorite: "Favorito",
    api: "API",
    apiDescription:
      "Button também aceita atributos, eventos e refs do elemento HTML button. O foco de teclado e a ativação por Enter ou Espaço seguem o comportamento nativo.",
    property: "Propriedade",
    values: "Valores e comportamento",
    default: "Padrão",
    related: "Componente relacionado",
    copyLabel: "Copiar",
    copiedLabel: "Copiado",
    copyErrorLabel: "Selecione o código para copiar manualmente.",
  },
  en: {
    section: "Actions",
    navigation: "Catalog areas",
    onThisPage: "On this page",
    description: "Trigger an operation, submit a form, or confirm a decision with a native button.",
    usage: "Basic usage",
    preview: "Preview",
    code: "Code",
    usageDescription:
      'Button defaults to `type="button"`. Use `type="submit"` to submit a form. Use an `<a>` link to navigate to a URL.',
    save: "Save changes",
    saved: "Changes saved",
    variants: "Variants",
    variantDescription:
      "`variant` sets the visual emphasis. Use `solid` for the main action, `outline` or `soft` for alternatives, and `ghost` for quieter actions. `link` gives the button a link appearance.",
    tones: "Tones",
    toneDescription:
      "`tone` conveys the intent of the action and follows the theme. For example, `danger` signals a destructive action.",
    sizes: "Sizes",
    sizeDescription:
      "Default heights range from 24 px (`xs`) to 48 px (`lg`). With `responsive`, the button uses one smaller size below 640 px. `xs` keeps its original height. Use `rounded` for pill corners and `fullWidth` to fill the available width.",
    icons: "Icons",
    iconDescription:
      "Use `startIcon` or `endIcon` to support a label. Give an icon-only button an accessible name with `aria-label`.",
    add: "Add",
    continue: "Continue",
    search: "Search",
    states: "States",
    stateDescription:
      "Use `disabled` for an unavailable action and `loading` while an operation runs. While loading, the button blocks activation, retains its width and accessible name, and exposes `aria-busy`. Use `aria-pressed` for a toggle action such as bookmarking. Hover, use Tab, or hold the button down to see hover, focus, and `:active`.",
    unavailable: "Unavailable",
    favorite: "Favorite",
    api: "API",
    apiDescription:
      "Button also accepts native HTML button attributes, events, and refs. Keyboard focus and Enter or Space activation follow native behavior.",
    property: "Prop",
    values: "Values and behavior",
    default: "Default",
    related: "Related component",
    copyLabel: "Copy",
    copiedLabel: "Copied",
    copyErrorLabel: "Select the code to copy it manually.",
  },
};

export type ButtonCopy = (typeof buttonCopy)[keyof typeof buttonCopy];

export const buttonProps = [
  ["variant", buttonVariants.join(", "), "solid"],
  ["tone", buttonTones.join(", "), "primary"],
  ["size", buttonSizes.join(", "), "md"],
  ["rounded", "boolean", "false"],
  ["fullWidth", "boolean", "false"],
  ["responsive", "boolean", "false"],
  ["iconOnly", "boolean", "false"],
  ["startIcon / endIcon", "JSX.Element", "—"],
  ["loading", "boolean", "false"],
  ["disabled", "boolean", "false"],
  ["type", "button, submit, reset", "button"],
  ["aria-label", "string", "—"],
  ["aria-pressed", "true, false, mixed", "—"],
] as const;
