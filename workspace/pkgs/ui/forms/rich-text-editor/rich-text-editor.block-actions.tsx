import { CodeXml, Heading2, Heading3, List, ListOrdered, Minus, Quote } from "lucide-solid";
import { RichTextAction } from "./rich-text-editor.action";
import type { PublicRichTextActionProps } from "./rich-text-editor.public-action";

/** Props for a supported heading action. Português (pt-BR): props de uma ação de título. */
export type RichTextHeadingProps = PublicRichTextActionProps & { level: 2 | 3 };

/** Heading action. Português (pt-BR): ação de título. */
export function RichTextHeading(props: RichTextHeadingProps) {
  const icon = () => (props.level === 2 ? <Heading2 size={16} /> : <Heading3 size={16} />);
  return (
    <RichTextAction
      {...props}
      label={`Heading ${props.level}`}
      icon={icon()}
      active={(editor) => editor.isActive("heading", { level: props.level })}
      command={(editor) => editor.chain().focus().toggleHeading({ level: props.level }).run()}
    />
  );
}

/** Bullet-list action. Português (pt-BR): ação de lista não ordenada. */
export function RichTextBulletList(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Bullet list"
      icon={<List size={16} />}
      active={(editor) => editor.isActive("bulletList")}
      command={(editor) => editor.chain().focus().toggleBulletList().run()}
    />
  );
}

/** Ordered-list action. Português (pt-BR): ação de lista ordenada. */
export function RichTextOrderedList(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Ordered list"
      icon={<ListOrdered size={16} />}
      active={(editor) => editor.isActive("orderedList")}
      command={(editor) => editor.chain().focus().toggleOrderedList().run()}
    />
  );
}

/** Blockquote action. Português (pt-BR): ação de citação em bloco. */
export function RichTextBlockquote(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Blockquote"
      icon={<Quote size={16} />}
      active={(editor) => editor.isActive("blockquote")}
      command={(editor) => editor.chain().focus().toggleBlockquote().run()}
    />
  );
}

/** Code-block action. Português (pt-BR): ação de bloco de código. */
export function RichTextCodeBlock(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Code block"
      icon={<CodeXml size={16} />}
      active={(editor) => editor.isActive("codeBlock")}
      command={(editor) => editor.chain().focus().toggleCodeBlock().run()}
    />
  );
}

/** Horizontal-rule action. Português (pt-BR): ação de divisor horizontal. */
export function RichTextHorizontalRule(props: PublicRichTextActionProps) {
  return (
    <RichTextAction
      {...props}
      label="Horizontal rule"
      icon={<Minus size={16} />}
      command={(editor) => editor.chain().focus().setHorizontalRule().run()}
    />
  );
}
