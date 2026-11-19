import { componentSummaries } from "../../../i18n/component-summaries";
import { BadgeExample } from "./content-examples/badge";
import badgeCode from "./content-examples/badge.tsx?raw";
import { BadgeGroupExample } from "./content-examples/badge-group";
import badgeGroupCode from "./content-examples/badge-group.tsx?raw";
import { CounterExample } from "./content-examples/counter";
import counterCode from "./content-examples/counter.tsx?raw";
import { CounterAnchorExample } from "./content-examples/counter-anchor";
import counterAnchorCode from "./content-examples/counter-anchor.tsx?raw";
import type { ComponentDocumentation } from "./reference-types";

export const indicatorDocs = {
  Badge: {
    summary: componentSummaries.Badge,
    usage: {
      "pt-BR":
        'Escreva o status no rótulo para que o significado também esteja no texto. Use `as="a"` para navegação ou `as="button"` para ações.',
      en: 'Write the status in the label so its meaning is available in text. Use `as="a"` for navigation or `as="button"` for actions.',
    },
    rows: [
      ["as", "span, a, button", "span"],
      ["variant", "soft, solid, outline", "soft"],
      ["tone", "neutral, primary, info, success, warning, danger", "neutral"],
      ["size", "sm, md, lg", "md"],
      ["rounded", "boolean", "false"],
    ],
    code: badgeCode,
    preview: BadgeExample,
  },
  BadgeGroup: {
    summary: componentSummaries.BadgeGroup,
    usage: {
      "pt-BR":
        "Use `attached` para unir rótulos de tamanho igual, como o nome de uma propriedade e seu valor. Use botões nativos quando uma etiqueta tiver uma ação.",
      en: "Use `attached` to join equal-sized badges, such as a property name and its value. Use native buttons when a badge performs an action.",
    },
    rows: [
      ["attached", "boolean", "false"],
      ["children", "JSX.Element", "—"],
      ["class", "string", "—"],
    ],
    code: badgeGroupCode,
    preview: BadgeGroupExample,
  },
  Counter: {
    summary: componentSummaries.Counter,
    usage: {
      "pt-BR":
        "O valor acima de `max` aparece com um sinal de mais. No exemplo, o texto acessível mantém o valor real de 128 itens. Ative `showZero` para exibir zero.",
      en: "A value above `max` appears with a plus sign. In the example, accessible text retains the actual count of 128 items. Enable `showZero` to display zero.",
    },
    rows: [
      ["value", "number", "required"],
      ["max", "number", "99"],
      ["showZero", "boolean", "false"],
      ["label", "string", "actual count"],
      ["placement", "inline, top-start, top-end, bottom-start, bottom-end", "inline"],
      ["size", "sm, md, lg", "md"],
    ],
    code: counterCode,
    preview: CounterExample,
  },
  CounterAnchor: {
    summary: componentSummaries.CounterAnchor,
    usage: {
      "pt-BR":
        "Coloque o alvo e o `Counter` como filhos irmãos do `CounterAnchor`. Defina o canto em `Counter.placement` e inclua a contagem no nome acessível da ação. Clique para marcar as notificações como lidas.",
      en: "Place the target and `Counter` as siblings inside `CounterAnchor`. Set the corner on `Counter.placement` and include the count in the action's accessible name. Click to mark the notifications as read.",
    },
    rows: [
      ["children", "JSX.Element", "—"],
      ["class", "string", "—"],
      ["style", "JSX.CSSProperties or string", "—"],
    ],
    code: counterAnchorCode,
    preview: CounterAnchorExample,
  },
} satisfies Record<string, ComponentDocumentation>;
