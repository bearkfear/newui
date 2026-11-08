import { getSchema, isNodeEmpty } from "@tiptap/core";
import type { Node } from "@tiptap/pm/model";
import { createRichTextSchemaExtensions } from "./rich-text.extensions";
import type { RichTextDocument } from "./rich-text.types";

export function parseRichTextDocument(value: RichTextDocument): Node {
  try {
    return getSchema(createRichTextSchemaExtensions()).nodeFromJSON(value);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown schema error.";
    throw new TypeError(`Invalid rich-text document: ${message}`, { cause: error });
  }
}

export function documentIsEmpty(value: RichTextDocument) {
  return isNodeEmpty(parseRichTextDocument(value));
}

export function assertRichTextDocument(value: unknown): asserts value is RichTextDocument {
  if (!isDocumentShape(value)) throw new TypeError("Rich-text value must be a JSON document.");
  parseRichTextDocument(value);
}

function isDocumentShape(value: unknown): value is RichTextDocument {
  return Boolean(value && typeof value === "object" && "type" in value && value.type === "doc");
}
