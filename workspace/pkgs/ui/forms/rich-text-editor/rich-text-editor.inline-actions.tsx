import { Bold, Code2, Italic, Strikethrough } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** Toggles bold on the current selection or applies it to subsequently typed text. */
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

/** Toggles italic formatting on the current selection or subsequent text. */
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

/** Toggles strike-through formatting on the current selection or subsequent text. */
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

/** Toggles inline code formatting on the current selection or subsequent text. */
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
