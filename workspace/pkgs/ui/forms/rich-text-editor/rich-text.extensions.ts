import CharacterCount from "@tiptap/extension-character-count";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { RichTextImageSize } from "./rich-text.image-size";

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
    Image.configure({
      allowBase64: true,
      resize: {
        enabled: true,
        directions: ["bottom-right"],
        minWidth: 24,
        minHeight: 24,
        alwaysPreserveAspectRatio: true,
      },
    }),
  ];
}

export function createRichTextEditorExtensions(options: {
  placeholder: string;
  maxCharacters: number | undefined;
}): Extensions {
  return [
    ...createRichTextSchemaExtensions(),
    RichTextImageSize,
    Placeholder.configure({ placeholder: options.placeholder }),
    CharacterCount.configure({ limit: options.maxCharacters }),
  ];
}

import type { Extensions } from "@tiptap/core";
