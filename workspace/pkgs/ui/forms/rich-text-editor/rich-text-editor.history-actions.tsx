import { Redo2, Undo2 } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** Undoes the latest editor transaction when history is available. */
export function RichTextUndo(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Undo"}
      icon={<Undo2 size={16} />}
      command={(editor) => editor.chain().focus().undo().run()}
    />
  );
}

/** Reapplies the latest undone editor transaction when redo history is available. */
export function RichTextRedo(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Redo"}
      icon={<Redo2 size={16} />}
      command={(editor) => editor.chain().focus().redo().run()}
    />
  );
}
