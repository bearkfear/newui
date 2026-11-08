import CharacterCount from "@tiptap/extension-character-count";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";

export function createRichTextSchemaExtensions(): Extensions {
  return [
    StarterKit.configure({
      heading: { levels: [2, 3] },
      link: {
        autolink: true,
        defaultProtocol: "https",
        openOnClick: false,
        protocols: ["http", "https", "mailto", "tel"],
      },
      trailingNode: false,
    }),
  ];
}

export function createRichTextEditorExtensions(options: {
  placeholder: string;
  maxCharacters: number | undefined;
}): Extensions {
  return [
    ...createRichTextSchemaExtensions(),
    Placeholder.configure({ placeholder: options.placeholder }),
    CharacterCount.configure({ limit: options.maxCharacters }),
  ];
}

import type { Extensions } from "@tiptap/core";
