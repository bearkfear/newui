import { componentSummaries } from "../../../i18n/component-summaries";
import { AccordionExample } from "./content-examples/accordion";
import accordionCode from "./content-examples/accordion.tsx?raw";
import { AvatarExample } from "./content-examples/avatar";
import avatarCode from "./content-examples/avatar.tsx?raw";
import { CardExample } from "./content-examples/card";
import cardCode from "./content-examples/card.tsx?raw";
import { CodeHighlightExample } from "./content-examples/code-highlight";
import codeHighlightCode from "./content-examples/code-highlight.tsx?raw";
import { CollapsibleExample } from "./content-examples/collapsible";
import collapsibleCode from "./content-examples/collapsible.tsx?raw";
import { HeadingExample } from "./content-examples/heading";
import headingCode from "./content-examples/heading.tsx?raw";
import { ProseExample } from "./content-examples/prose";
import proseCode from "./content-examples/prose.tsx?raw";
import { SeparatorExample } from "./content-examples/separator";
import separatorCode from "./content-examples/separator.tsx?raw";
import { TextExample } from "./content-examples/text";
import textCode from "./content-examples/text.tsx?raw";
import { TimelineExample } from "./content-examples/timeline";
import timelineCode from "./content-examples/timeline.tsx?raw";
import { indicatorDocs } from "./content-indicators";
import type { ComponentDocumentation } from "./reference-types";

export const docs = {
  ...indicatorDocs,
  Accordion: {
    summary: componentSummaries.Accordion,
    usage: {
      "pt-BR":
        "Defina um `value` estável para cada item e use `defaultValue` para abrir uma seção inicialmente. Ative `multiple` para permitir várias seções abertas.",
      en: "Give every item a stable `value` and use `defaultValue` to open a section initially. Enable `multiple` to allow several open sections.",
    },
    rows: [
      ["Root.variant", "outline, soft", "outline"],
      ["Root.defaultValue", "string[]", "[]"],
      ["Root.multiple", "boolean", "false"],
      ["Root.collapsible", "boolean", "true"],
      ["Item.value", "string", "required"],
      ["ItemHeading.as", "h2, h3, h4, h5, h6", "h3"],
    ],
    code: accordionCode,
    preview: AccordionExample,
  },
  Avatar: {
    summary: componentSummaries.Avatar,
    usage: {
      "pt-BR":
        "Defina o conteúdo de `Avatar.Fallback` para quando a imagem estiver ausente ou falhar. Se o nome já aparecer ao lado, o avatar pode ser decorativo.",
      en: "Provide `Avatar.Fallback` content for when the image is missing or fails. When the name already appears alongside it, the avatar can be decorative.",
    },
    rows: [
      ["Root.size", "xs, sm, md, lg, xl", "md"],
      ["Root.shape", "circle, square", "circle"],
      ["Root.onStatusChange", "image status callback", "—"],
      ["Image.src", "string", "—"],
      ["Fallback.children", "JSX.Element", "—"],
    ],
    code: avatarCode,
    preview: AvatarExample,
  },
  Card: {
    summary: componentSummaries.Card,
    usage: {
      "pt-BR":
        "Combine `Card.Header`, `Card.Content` e `Card.Footer` conforme o conteúdo. Escolha o nível de `Card.Title` pela hierarquia da página.",
      en: "Combine `Card.Header`, `Card.Content`, and `Card.Footer` as the content needs. Choose the `Card.Title` level to match the page hierarchy.",
    },
    rows: [
      ["Root.variant", "outline, soft, elevated", "outline"],
      ["Root.as", "div, article, section", "div"],
      ["Title.as", "h1, h2, h3, h4, h5, h6", "h2"],
      ["Title.size", "1, 2, 3, 4, 5, 6", "5"],
      ["Footer.variant", "simple, divided", "simple"],
    ],
    code: cardCode,
    preview: CardExample,
  },
  CodeHighlight: {
    summary: componentSummaries.CodeHighlight,
    usage: {
      "pt-BR":
        "Passe o texto original em `code` e escolha a linguagem para realçar a sintaxe. Ative `copyable` para permitir a cópia e traduza os rótulos se necessário.",
      en: "Pass the original text to `code` and choose a language for highlighting. Enable `copyable` to let readers copy the snippet and localize the labels as needed.",
    },
    rows: [
      ["code", "string", "required"],
      ["language", "text, bash, css, html, javascript, json, typescript, jsx, tsx", "text"],
      ["title", "string", "—"],
      ["copyable", "boolean", "false"],
      ["copyLabel / copiedLabel / copyErrorLabel", "string", "—"],
    ],
    code: codeHighlightCode,
    preview: CodeHighlightExample,
  },
  Collapsible: {
    summary: componentSummaries.Collapsible,
    usage: {
      "pt-BR":
        "Coloque o rótulo dentro de `Collapsible.Trigger`. O conteúdo fica montado após a primeira abertura. Use `unmountOnExit` quando quiser desmontá-lo ao fechar.",
      en: "Place the label inside `Collapsible.Trigger`. Content stays mounted after the first opening. Use `unmountOnExit` to remove it on close.",
    },
    rows: [
      ["Root.variant", "outline, soft", "outline"],
      ["Root.defaultOpen", "boolean", "false"],
      ["Root.open", "boolean", "—"],
      ["Root.disabled", "boolean", "false"],
      ["Root.lazyMount", "boolean", "true"],
      ["Root.unmountOnExit", "boolean", "false"],
    ],
    code: collapsibleCode,
    preview: CollapsibleExample,
  },
  Heading: {
    summary: componentSummaries.Heading,
    usage: {
      "pt-BR":
        "Use `as` para escolher o nível na hierarquia do documento. Ajuste `size` separadamente para definir a aparência. O contêiner define o espaçamento.",
      en: "Use `as` to choose the level in the document outline. Set `size` independently to control appearance. The container owns spacing.",
    },
    rows: [
      ["as", "h1, h2, h3, h4, h5, h6", "h2"],
      ["size", "1, 2, 3, 4, 5, 6", "3"],
      ["children", "JSX.Element", "—"],
    ],
    code: headingCode,
    preview: HeadingExample,
  },
  Prose: {
    summary: componentSummaries.Prose,
    usage: {
      "pt-BR":
        "Passe elementos semânticos de HTML como filhos. Converta Markdown na aplicação e sanitize HTML de fontes externas antes de inseri-lo.",
      en: "Pass semantic HTML elements as children. Render Markdown in the application and sanitize untrusted HTML before inserting it.",
    },
    rows: [
      ["size", "sm, md, lg", "md"],
      ["children", "JSX.Element", "—"],
      ["class", "string", "—"],
    ],
    code: proseCode,
    preview: ProseExample,
  },
  Separator: {
    summary: componentSummaries.Separator,
    usage: {
      "pt-BR":
        'Use a orientação horizontal para separar blocos. Em uma linha de metadados, combine `orientation="vertical"` com `decorative` para uma divisão apenas visual.',
      en: 'Use the horizontal orientation to separate sections. In a metadata row, combine `orientation="vertical"` with `decorative` for a visual divider.',
    },
    rows: [
      ["orientation", "horizontal, vertical", "horizontal"],
      ["decorative", "boolean", "false"],
      ["class", "string", "—"],
    ],
    code: separatorCode,
    preview: SeparatorExample,
  },
  Text: {
    summary: componentSummaries.Text,
    usage: {
      "pt-BR":
        'Use `tone="muted"` para informação secundária. Escolha `as="span"` quando o texto precisar fazer parte da mesma linha ou frase.',
      en: 'Use `tone="muted"` for secondary information. Choose `as="span"` when the text should flow inline with a sentence.',
    },
    rows: [
      ["as", "p, span, div", "p"],
      ["size", "1, 2, 3, 4, 5, 6, 7", "6"],
      ["tone", "default, muted", "default"],
      ["children", "JSX.Element", "—"],
    ],
    code: textCode,
    preview: TextExample,
  },
  Timeline: {
    summary: componentSummaries.Timeline,
    usage: {
      "pt-BR":
        'Use uma lista de itens e indique a etapa em curso com `status="current"`. Dê contexto ao status no texto e use `dateTime` para registrar datas em formato legível por máquinas.',
      en: 'Use a list of items and mark the current step with `status="current"`. Give status context in text and use `dateTime` for machine-readable dates.',
    },
    rows: [
      ["Root.orientation", "vertical, horizontal", "vertical"],
      ["Root.density", "comfortable, compact", "comfortable"],
      ["Item.status", "default, complete, current, pending", "default"],
      ["Title.as", "h1, h2, h3, h4, h5, h6", "h3"],
      ["Time.dateTime", "string", "—"],
    ],
    code: timelineCode,
    preview: TimelineExample,
  },
} satisfies Record<string, ComponentDocumentation>;
