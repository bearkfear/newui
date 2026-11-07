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

export function RichTextDefaultToolbar() {
  return (
    <>
      <RichTextBold />
      <RichTextItalic />
      <RichTextStrike />
      <RichTextCode />
      <RichTextLink />
      <span class="nui-rich-text-separator" aria-hidden="true" />
      <RichTextHeading level={2} />
      <RichTextHeading level={3} />
      <RichTextBulletList />
      <RichTextOrderedList />
      <RichTextBlockquote />
      <RichTextCodeBlock />
      <RichTextHorizontalRule />
      <span class="nui-rich-text-separator" aria-hidden="true" />
      <RichTextUndo />
      <RichTextRedo />
    </>
  );
}
