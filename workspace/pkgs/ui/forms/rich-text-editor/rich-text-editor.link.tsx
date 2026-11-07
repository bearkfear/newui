import { Link, Link2Off } from "lucide-solid";
import type { JSX } from "solid-js";
import { createEffect, createSignal, Show, splitProps } from "solid-js";
import { Button } from "../../actions/button/button";
import { useRichTextEditor } from "./rich-text.context";

/**
 * Props for the inline link editor.
 *
 * @remarks
 * **Português (pt-BR):** Props do editor inline de links.
 */
export type RichTextLinkProps = JSX.HTMLAttributes<HTMLSpanElement>;

/**
 * Opens an inline URL form and applies or removes a link on the current selection.
 *
 * @remarks
 * **Português (pt-BR):** Abre um formulário inline de URL e aplica ou remove um link da seleção
 * atual.
 */
export function RichTextLink(props: RichTextLinkProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["class"]);
  const [open, setOpen] = createSignal(false);
  const [href, setHref] = createSignal("");
  const active = () => {
    context.revision();
    return context.editor()?.isActive("link") ?? false;
  };
  createEffect(() => {
    if (!open()) return;
    const current = context.editor()?.getAttributes("link")["href"];
    setHref(typeof current === "string" ? current : "");
  });
  const disabled = () => context.disabled() || context.readOnly() || !context.editor();
  return (
    <span {...rest} class={["nui-rich-text-link", local.class].filter(Boolean).join(" ")}>
      <Button
        type="button"
        size="xs"
        tone="neutral"
        variant="ghost"
        iconOnly
        disabled={disabled()}
        aria-label="Edit link"
        aria-pressed={active()}
        title="Edit link"
        onClick={() => setOpen((value) => !value)}
      >
        <Link size={16} aria-hidden="true" />
      </Button>
      <Show when={open()}>
        <form
          class="nui-rich-text-link-form"
          onSubmit={(event) => {
            event.preventDefault();
            applyLink(context.editor(), href());
            setOpen(false);
          }}
        >
          <input
            type="url"
            value={href()}
            placeholder="https://example.com"
            aria-label="Link URL"
            onInput={(event) => setHref(event.currentTarget.value)}
          />
          <Button type="submit" size="xs" variant="soft">
            Apply
          </Button>
          <Show when={active()}>
            <Button
              type="button"
              size="xs"
              tone="neutral"
              variant="ghost"
              iconOnly
              aria-label="Remove link"
              title="Remove link"
              onClick={() => {
                context.editor()?.chain().focus().unsetLink().run();
                setOpen(false);
              }}
            >
              <Link2Off size={16} aria-hidden="true" />
            </Button>
          </Show>
        </form>
      </Show>
    </span>
  );
}

function applyLink(
  editor: ReturnType<ReturnType<typeof useRichTextEditor>["editor"]>,
  href: string,
) {
  if (!editor) return;
  const normalized = href.trim();
  if (!normalized) {
    editor.chain().focus().unsetLink().run();
    return;
  }
  editor.chain().focus().extendMarkRange("link").setLink({ href: normalized }).run();
}
