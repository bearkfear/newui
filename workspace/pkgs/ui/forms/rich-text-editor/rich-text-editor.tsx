import {
  RichTextBlockquote,
  RichTextBulletList,
  RichTextCodeBlock,
  RichTextHeading,
  RichTextHorizontalRule,
  RichTextOrderedList,
} from "./rich-text-editor.block-actions";
import { RichTextRedo, RichTextUndo } from "./rich-text-editor.history-actions";
import {
  RichTextBold,
  RichTextCode,
  RichTextItalic,
  RichTextStrike,
} from "./rich-text-editor.inline-actions";
import { RichTextLink } from "./rich-text-editor.link";
import { RichTextCharacterCount, RichTextContent, RichTextToolbar } from "./rich-text-editor.parts";
import { RichTextEditorRoot } from "./rich-text-editor.root";

/**
 * Schema-backed rich-text editor with composable formatting controls.
 *
 * @remarks
 * **Português (pt-BR):** Editor rich text baseado em schema com controles de formatação
 * componíveis.
 */
export const RichTextEditor = {
  Root: RichTextEditorRoot,
  Toolbar: RichTextToolbar,
  Content: RichTextContent,
  CharacterCount: RichTextCharacterCount,
  Bold: RichTextBold,
  Italic: RichTextItalic,
  Strike: RichTextStrike,
  Code: RichTextCode,
  Link: RichTextLink,
  Heading: RichTextHeading,
  BulletList: RichTextBulletList,
  OrderedList: RichTextOrderedList,
  Blockquote: RichTextBlockquote,
  CodeBlock: RichTextCodeBlock,
  HorizontalRule: RichTextHorizontalRule,
  Undo: RichTextUndo,
  Redo: RichTextRedo,
};
