import { generateText } from "@tiptap/core";
import { generateHTML, generateJSON } from "@tiptap/html";
import { createRichTextSchemaExtensions } from "./rich-text.extensions";
import { assertRichTextDocument, documentIsEmpty } from "./rich-text.schema";
import type { RichTextDocument } from "./rich-text.types";

/**
 * Converts supported HTML into the editor's canonical JSON document.
 *
 * Unsupported markup is normalized or discarded by the schema. This is not an HTML sanitizer.
 *
 * @remarks
 * **Português (pt-BR):** Converte HTML suportado no documento JSON canônico do editor. Marcação
 * não suportada é normalizada ou descartada pelo schema. Isto não é um sanitizador de HTML.
 */
export function parseRichTextHtml(html: string): RichTextDocument {
  const value = generateJSON(html, createRichTextSchemaExtensions());
  validateRichTextDocument(value);
  return value;
}

/**
 * Renders a canonical rich-text JSON document as normalized HTML.
 *
 * @remarks
 * **Português (pt-BR):** Renderiza um documento JSON rich text canônico como HTML normalizado.
 */
export function renderRichTextHtml(value: RichTextDocument): string {
  validateRichTextDocument(value);
  return generateHTML(value, createRichTextSchemaExtensions());
}

/**
 * Extracts plain text from a document. Formatting cannot be reconstructed from this result.
 *
 * @remarks
 * **Português (pt-BR):** Extrai texto puro do documento. A formatação não pode ser reconstruída
 * a partir deste resultado.
 */
export function extractRichText(value: RichTextDocument): string {
  validateRichTextDocument(value);
  return generateText(value, createRichTextSchemaExtensions(), { blockSeparator: "\n\n" });
}

/**
 * Reports whether a valid document contains no meaningful content.
 *
 * @remarks
 * **Português (pt-BR):** Informa se um documento válido não contém conteúdo significativo.
 */
export function isRichTextEmpty(value: RichTextDocument): boolean {
  return documentIsEmpty(value);
}

/**
 * Validates an unknown value against the editor's fixed schema.
 *
 * @remarks
 * **Português (pt-BR):** Valida um valor desconhecido contra o schema fixo do editor.
 */
export function validateRichTextDocument(value: unknown): asserts value is RichTextDocument {
  assertRichTextDocument(value);
}
