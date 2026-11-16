import type { RichTextActionProps } from "./rich-text-editor.action";

/**
 * Shared props for built-in formatting actions.
 */
export type PublicRichTextActionProps = Omit<
  RichTextActionProps,
  "label" | "icon" | "command" | "active"
>;
