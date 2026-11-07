import type { JSX } from "solid-js";
import type { TextControlOptions } from "../text-control.context";

/**
 * A schema-backed rich-text document stored as JSON.
 *
 * @remarks
 * **Português (pt-BR):** Documento rich text baseado em schema e armazenado como JSON.
 */
export type RichTextDocument = RichTextNode & { type: "doc" };

/**
 * A node or mark attribute value accepted by the public document format.
 *
 * @remarks
 * **Português (pt-BR):** Valor de atributo de nó ou marca aceito pelo documento público.
 */
export type RichTextAttribute =
  | string
  | number
  | boolean
  | null
  | RichTextAttribute[]
  | { [key: string]: RichTextAttribute };

/**
 * A node in a rich-text document.
 *
 * @remarks
 * **Português (pt-BR):** Nó de um documento rich text.
 */
export type RichTextNode = {
  /** Node name. Português (pt-BR): nome do nó. */
  type: string;
  /** Schema-defined attributes. Português (pt-BR): atributos definidos pelo schema. */
  attrs?: Record<string, RichTextAttribute>;
  /** Child nodes. Português (pt-BR): nós filhos. */
  content?: RichTextNode[];
  /** Inline marks. Português (pt-BR): marcas inline. */
  marks?: RichTextMark[];
  /** Text-node content. Português (pt-BR): conteúdo do nó de texto. */
  text?: string;
};

/**
 * Inline formatting attached to a text node.
 *
 * @remarks
 * **Português (pt-BR):** Formatação inline associada a um nó de texto.
 */
export type RichTextMark = {
  /** Mark name. Português (pt-BR): nome da marca. */
  type: string;
  /** Mark attributes. Português (pt-BR): atributos da marca. */
  attrs?: Record<string, RichTextAttribute>;
};

/**
 * Representations emitted after an accepted document change.
 *
 * @remarks
 * **Português (pt-BR):** Representações emitidas após uma alteração aceita no documento.
 */
export type RichTextValueDetails = {
  /** Canonical JSON document. Português (pt-BR): documento JSON canônico. */
  value: RichTextDocument;
  /** Normalized HTML. Português (pt-BR): HTML normalizado. */
  html: string;
  /** Plain text without formatting. Português (pt-BR): texto puro sem formatação. */
  text: string;
  /** Whether the document is empty. Português (pt-BR): se o documento está vazio. */
  empty: boolean;
};

/**
 * Selects the representation submitted by the editor's hidden form control.
 *
 * @remarks
 * **Português (pt-BR):** Seleciona a representação enviada pelo controle oculto do formulário.
 */
export type RichTextSubmitValue = "json" | "html" | "text";

/**
 * Props for the schema-backed rich-text editor root.
 *
 * @remarks
 * `value` is controlled JSON. `defaultValue` initializes an uncontrolled editor once.
 *
 * **Português (pt-BR):** Props da raiz do editor rich text baseado em schema. `value` é
 * JSON controlado. `defaultValue` inicializa uma vez um editor não controlado.
 */
export type RichTextEditorProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onChange" | "onInput"> &
  TextControlOptions & {
    /** Controlled JSON document. Português (pt-BR): documento JSON controlado. */
    value?: RichTextDocument;
    /** Initial uncontrolled document. Português (pt-BR): documento inicial não controlado. */
    defaultValue?: RichTextDocument;
    /** Accepted-change callback. Português (pt-BR): callback de alteração aceita. */
    onValueChange?: (details: RichTextValueDetails) => void;
    /** Native form field name. Português (pt-BR): nome do campo no formulário nativo. */
    name?: string;
    /** External native form id. Português (pt-BR): id de formulário nativo externo. */
    form?: string;
    /** Submitted representation. Português (pt-BR): representação enviada. */
    submitValue?: RichTextSubmitValue;
    /** Empty-document hint. Português (pt-BR): dica exibida no documento vazio. */
    placeholder?: string;
    /** Maximum editable text size. Português (pt-BR): tamanho máximo do texto editável. */
    maxCharacters?: number;
    /** Accessible required state; validation remains application-owned. Português (pt-BR): estado obrigatório acessível; a validação pertence à aplicação. */
    required?: boolean;
  };
