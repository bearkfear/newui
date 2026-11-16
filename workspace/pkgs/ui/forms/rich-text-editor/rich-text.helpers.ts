import { generateText } from "@tiptap/core";
import { generateHTML, generateJSON } from "@tiptap/html";
import { createRichTextSchemaExtensions } from "./rich-text.extensions";
import { assertRichTextDocument, documentIsEmpty } from "./rich-text.schema";
import type { RichTextDocument } from "./rich-text.types";

/**
 * Converts supported HTML into the editor's canonical JSON document.
 *
 * Unsupported markup is normalized or discarded by the schema. This is not an HTML sanitizer.
 */
export function parseRichTextHtml(html: string): RichTextDocument {
  const value = generateJSON(html, createRichTextSchemaExtensions());
  validateRichTextDocument(value);
  return value;
}

/**
 * Renders a canonical rich-text JSON document as normalized HTML.
 */
export function renderRichTextHtml(value: RichTextDocument): string {
  validateRichTextDocument(value);
  return generateHTML(value, createRichTextSchemaExtensions());
}

/**
 * Extracts plain text from a document. Formatting cannot be reconstructed from this result.
 */
export function extractRichText(value: RichTextDocument): string {
  validateRichTextDocument(value);
  return generateText(value, createRichTextSchemaExtensions(), { blockSeparator: "\n\n" });
}

/**
 * Reports whether a valid document contains no meaningful content.
 */
export function isRichTextEmpty(value: RichTextDocument): boolean {
  return documentIsEmpty(value);
}

/**
 * Validates an unknown value against the editor's fixed schema.
 */
export function validateRichTextDocument(value: unknown): asserts value is RichTextDocument {
  assertRichTextDocument(value);
}
