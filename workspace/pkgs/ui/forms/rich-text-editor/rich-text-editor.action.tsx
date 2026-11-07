import type { Editor } from "@tiptap/core";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";
import type { ButtonProps } from "../../actions/button/button";
import { Button } from "../../actions/button/button";
import { useRichTextEditor } from "./rich-text.context";

export type RichTextActionProps = Omit<
  ButtonProps,
  "aria-label" | "children" | "command" | "onClick" | "onMouseDown"
> & {
  label: string;
  icon: JSX.Element;
  command: (editor: Editor) => boolean;
  active?: (editor: Editor) => boolean;
};

export function RichTextAction(props: RichTextActionProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["label", "icon", "command", "active", "disabled"]);
  const current = () => {
    context.revision();
    return context.editor();
  };
  const pressed = () => {
    const editor = current();
    return editor && local.active ? local.active(editor) : undefined;
  };
  const disabled = () =>
    local.disabled || context.disabled() || context.readOnly() || current() === undefined;
  return (
    <Button
      {...rest}
      type="button"
      size="xs"
      tone="neutral"
      variant="ghost"
      iconOnly
      disabled={disabled()}
      aria-label={local.label}
      aria-pressed={pressed()}
      title={local.label}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => {
        const editor = current();
        if (editor) local.command(editor);
      }}
    >
      <span aria-hidden="true">{local.icon}</span>
    </Button>
  );
}
