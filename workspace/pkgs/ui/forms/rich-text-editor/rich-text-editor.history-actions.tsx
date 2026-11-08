import { Redo2, Undo2 } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** Undo action. Português (pt-BR): ação de desfazer. */
export function RichTextUndo(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Undo"
      icon={<Undo2 size={16} />}
      command={(editor) => editor.chain().focus().undo().run()}
    />
  );
}

/** Redo action. Português (pt-BR): ação de refazer. */
export function RichTextRedo(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Redo"
      icon={<Redo2 size={16} />}
      command={(editor) => editor.chain().focus().redo().run()}
    />
  );
}
