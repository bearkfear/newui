import { lazy } from "solid-js";
import { componentSummaries } from "../../../../i18n/component-summaries";
import type { ComponentDocumentation } from "../reference-types";
import { Example as FieldExample } from "./field";
import fieldCode from "./field.tsx?raw";
import { Example as InputExample } from "./input";
import inputCode from "./input.tsx?raw";
import { Example as InputGroupExample } from "./input-group";
import inputGroupCode from "./input-group.tsx?raw";
import { Example as MaskedInputExample } from "./masked-input";
import maskedInputCode from "./masked-input.tsx?raw";
import richTextEditorCode from "./rich-text-editor.tsx?raw";
import { Example as TextareaExample } from "./textarea";
import textareaCode from "./textarea.tsx?raw";

const RichTextEditorExample = lazy(() =>
  import("./rich-text-editor").then((module) => ({ default: module.Example })),
);

export const docs = {
  Field: {
    summary: componentSummaries.Field,
    usage: {
      "pt-BR":
        "Field propaga estados como required e invalid ao controle. Corrija o e-mail neste exemplo para remover a mensagem de erro.",
      en: "Field passes states such as required and invalid to its control. Correct the email in this example to clear the error message.",
    },
    rows: [
      ["required", "boolean", "false"],
      ["invalid", "boolean", "false"],
      ["valid", "boolean", "false"],
      ["disabled", "boolean", "false"],
      ["readOnly", "boolean", "false"],
      ["size", "sm | md | lg", "md"],
    ],
    code: fieldCode,
    preview: FieldExample,
  },
  Input: {
    summary: componentSummaries.Input,
    usage: {
      "pt-BR":
        "Escolha o type e autocomplete de acordo com o dado esperado. Field conecta o rótulo e a descrição, e o navegador aplica a validação nativa de e-mail.",
      en: "Choose the type and autocomplete value for the expected data. Field associates the label and description, and the browser handles native email validation.",
    },
    rows: [
      ["type", "text | email | password | search | tel | url", "text"],
      ["size", "sm | md | lg", "md"],
      ["htmlSize", "number", "—"],
      ["value / defaultValue", "string", "—"],
      ["onInput", "native input handler", "—"],
    ],
    code: inputCode,
    preview: InputExample,
  },
  InputGroup: {
    summary: componentSummaries.InputGroup,
    usage: {
      "pt-BR":
        "Coloque ícones decorativos em Icon e botões em Action. Este campo usa `attached` para unir o botão à entrada. Digite um termo e envie a busca.",
      en: "Put decorative icons in Icon and buttons in Action. This field uses `attached` to join the button to the input. Enter a term and submit the search.",
    },
    rows: [
      ["attached", "boolean", "false"],
      ["size", "sm | md | lg", "md"],
      ["loading", "boolean", "false"],
      ["placement (Icon / Addon)", "start | end", "start"],
      ["placement (Action)", "start | end", "end"],
    ],
    code: inputGroupCode,
    preview: InputGroupExample,
  },
  MaskedInput: {
    summary: componentSummaries.MaskedInput,
    usage: {
      "pt-BR":
        'O caractere `#` aceita um dígito e o hífen é literal. Passe a sequência inicial sem hífen. `submitValue="raw"` envia somente os dígitos.',
      en: 'The `#` character accepts one digit and the hyphen is literal. Pass the initial sequence without the hyphen. `submitValue="raw"` submits only the digits.',
    },
    rows: [
      ["mask", "string | readonly string[]", "required"],
      ["tokens", "InputMaskTokens", "built-in tokens"],
      ["value / defaultValue", "raw string", "empty"],
      ["onValueChange", "(details) => void", "—"],
      ["submitValue", "formatted | raw", "formatted"],
    ],
    code: maskedInputCode,
    preview: MaskedInputExample,
  },
  RichTextEditor: {
    summary: componentSummaries.RichTextEditor,
    usage: {
      "pt-BR":
        "Monte Content para renderizar o editor. Componha Toolbar com as ações necessárias e use CharacterCount para exibir o total de caracteres. Salve o documento JSON de `onValueChange` como representação canônica.",
      en: "Mount Content to render the editor. Compose Toolbar with the actions you need and use CharacterCount to display the total. Persist the JSON document from `onValueChange` as the canonical representation.",
    },
    rows: [
      ["value / defaultValue", "RichTextDocument", "empty document"],
      ["onValueChange", "(details: RichTextValueDetails) => void", "—"],
      ["name", "string", "—"],
      ["submitValue", "json | html | text", "json"],
      ["maxCharacters", "number", "—"],
    ],
    code: richTextEditorCode,
    preview: RichTextEditorExample,
  },
  Textarea: {
    summary: componentSummaries.Textarea,
    usage: {
      "pt-BR":
        "Use `rows` para definir a altura inicial e `maxlength` para limitar o comprimento. O evento nativo onInput atualiza o contador neste exemplo.",
      en: "Set the initial height with `rows` and cap the length with `maxlength`. The native onInput event updates the counter in this example.",
    },
    rows: [
      ["rows", "number", "4"],
      ["resize", "vertical | horizontal | both | none", "vertical"],
      ["autoresize", "boolean", "false"],
      ["maxlength", "number", "—"],
      ["value / defaultValue", "string", "—"],
    ],
    code: textareaCode,
    preview: TextareaExample,
  },
} satisfies Record<string, ComponentDocumentation>;
