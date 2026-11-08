import { Bold, Code2, Italic, Strikethrough } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** Bold formatting action. Português (pt-BR): ação de formatação em negrito. */
export function RichTextBold(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Bold"
      icon={<Bold size={16} />}
      active={(editor) => editor.isActive("bold")}
      command={(editor) => editor.chain().focus().toggleBold().run()}
    />
  );
}

/** Italic formatting action. Português (pt-BR): ação de formatação em itálico. */
export function RichTextItalic(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Italic"
      icon={<Italic size={16} />}
      active={(editor) => editor.isActive("italic")}
      command={(editor) => editor.chain().focus().toggleItalic().run()}
    />
  );
}

/** Strike formatting action. Português (pt-BR): ação de formatação tachada. */
export function RichTextStrike(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Strikethrough"
      icon={<Strikethrough size={16} />}
      active={(editor) => editor.isActive("strike")}
      command={(editor) => editor.chain().focus().toggleStrike().run()}
    />
  );
}

/** Inline-code action. Português (pt-BR): ação de código inline. */
export function RichTextCode(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Inline code"
      icon={<Code2 size={16} />}
      active={(editor) => editor.isActive("code")}
      command={(editor) => editor.chain().focus().toggleCode().run()}
    />
  );
}
