import type { RichTextActionProps } from "./rich-text-editor.action";

/**
 * Shared props for built-in formatting actions.
 *
 * @remarks
 * **Português (pt-BR):** Props compartilhadas das ações de formatação incluídas.
 */
export type PublicRichTextActionProps = Omit<
  RichTextActionProps,
  "label" | "icon" | "command" | "active"
>;
