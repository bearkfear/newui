import { CodeXml, Heading2, Heading3, List, ListOrdered, Minus, Quote } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** `level` restricts the heading action to levels 2 and 3 supported by the editor schema. */
export type RichTextHeadingProps = PublicRichTextActionProps & { level: 2 | 3 };

/** Applies the selected supported heading level (2 or 3) to the current block. */
export function RichTextHeading(props: RichTextHeadingProps) {
  const icon = () => (props.level === 2 ? <Heading2 size={16} /> : <Heading3 size={16} />);
  return (
    <RichTextAction
      {...props}
      label={props.label ?? `Heading ${props.level}`}
      icon={icon()}
      active={(editor) => editor.isActive("heading", { level: props.level })}
      command={(editor) => editor.chain().focus().toggleHeading({ level: props.level }).run()}
    />
  );
}

/** Toggles the selected blocks into or out of a bulleted list. */
export function RichTextBulletList(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Bullet list"}
      icon={<List size={16} />}
      active={(editor) => editor.isActive("bulletList")}
      command={(editor) => editor.chain().focus().toggleBulletList().run()}
    />
  );
}

/** Toggles the selected blocks into or out of a numbered list. */
export function RichTextOrderedList(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Ordered list"}
      icon={<ListOrdered size={16} />}
      active={(editor) => editor.isActive("orderedList")}
      command={(editor) => editor.chain().focus().toggleOrderedList().run()}
    />
  );
}

/** Toggles a blockquote around the current block selection. */
export function RichTextBlockquote(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Blockquote"}
      icon={<Quote size={16} />}
      active={(editor) => editor.isActive("blockquote")}
      command={(editor) => editor.chain().focus().toggleBlockquote().run()}
    />
  );
}

/** Toggles a code block for the current block selection. */
export function RichTextCodeBlock(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Code block"}
      icon={<CodeXml size={16} />}
      active={(editor) => editor.isActive("codeBlock")}
      command={(editor) => editor.chain().focus().toggleCodeBlock().run()}
    />
  );
}

/** Inserts a horizontal rule at the current editor selection. */
export function RichTextHorizontalRule(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label={props.label ?? "Horizontal rule"}
      icon={<Minus size={16} />}
      command={(editor) => editor.chain().focus().setHorizontalRule().run()}
    />
  );
}
