import type { JSX } from "solid-js";
import type { TextControlOptions } from "../text-control.context";

/**
 * A schema-backed rich-text document stored as JSON.
 */
export type RichTextDocument = RichTextNode & { type: "doc" };

/**
 * A node or mark attribute value accepted by the public document format.
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
 */
export type RichTextNode = {
  /** Node name. */
  type: string;
  /** Schema-defined attributes. */
  attrs?: Record<string, RichTextAttribute>;
  /** Child nodes. */
  content?: RichTextNode[];
  /** Inline marks. */
  marks?: RichTextMark[];
  /** Text-node content. */
  text?: string;
};

/**
 * Inline formatting attached to a text node.
 */
export type RichTextMark = {
  /** Mark name. */
  type: string;
  /** Mark attributes. */
  attrs?: Record<string, RichTextAttribute>;
};

/**
 * Representations emitted after an accepted document change.
 */
export type RichTextValueDetails = {
  /** Canonical JSON document. */
  value: RichTextDocument;
  /** Normalized HTML. */
  html: string;
  /** Plain text without formatting. */
  text: string;
  /** Whether the document is empty. */
  empty: boolean;
};

/** Selects the representation submitted by RichTextEditor.Root's hidden form control. */
export type RichTextSubmitValue = "json" | "html" | "text";

/**
 * RichTextEditor.Root's schema-backed state and native form options.
 *
 * `value` is controlled JSON. `defaultValue` initializes an uncontrolled editor once.
 */
export type RichTextEditorProps = Omit<JSX.HTMLAttributes<HTMLDivElement>, "onChange" | "onInput"> &
  TextControlOptions & {
    /** Controlled JSON document. */
    value?: RichTextDocument;
    /** Initial uncontrolled document. */
    defaultValue?: RichTextDocument;
    /** Accepted-change callback. */
    onValueChange?: (details: RichTextValueDetails) => void;
    /** Native form field name. */
    name?: string;
    /** External native form id. */
    form?: string;
    /** Submitted representation. */
    submitValue?: RichTextSubmitValue;
    /** Empty-document hint. */
    placeholder?: string;
    /** Maximum editable text size. */
    maxCharacters?: number;
    /** Enable pasted image files: embed as data URLs or upload and return a persistent URL. */
    imagePaste?: "embedded" | ((file: File) => Promise<string>);
    /** Called when reading or uploading a pasted image fails. */
    onImagePasteError?: (error: unknown, file: File) => void;
    /** Accessible required state; validation remains application-owned. */
    required?: boolean;
  };
