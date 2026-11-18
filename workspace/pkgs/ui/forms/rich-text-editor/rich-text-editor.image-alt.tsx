import { Image as ImageIcon } from "lucide-solid";
import type { JSX } from "solid-js";
import { createEffect, createSignal, Show, splitProps } from "solid-js";
import { Button } from "../../actions/button/button";
import { useRichTextEditor } from "./rich-text.context";

/** Native span attributes for the selected image's alternative text editor. */
export type RichTextImageAltProps = JSX.HTMLAttributes<HTMLSpanElement>;

/** Edits the alternative text of the currently selected image. */
export function RichTextImageAlt(props: RichTextImageAltProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["class"]);
  const [open, setOpen] = createSignal(false);
  const [alt, setAlt] = createSignal("");
  let input: HTMLInputElement | undefined;
  const active = () => {
    context.revision();
    return context.editor()?.isActive("image") ?? false;
  };
  const disabled = () => context.disabled() || context.readOnly() || !active();
  createEffect(() => {
    if (disabled()) setOpen(false);
  });
  function close() {
    setOpen(false);
    context.editor()?.commands.focus();
  }
  return (
    <span {...rest} class={["nui-rich-text-link", local.class].filter(Boolean).join(" ")}>
      <Button
        type="button"
        size="xs"
        tone="neutral"
        variant="ghost"
        iconOnly
        disabled={disabled()}
        aria-label="Edit image alternative text"
        title="Edit image alternative text"
        aria-expanded={open()}
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => {
          if (open()) {
            close();
            return;
          }
          const value = context.editor()?.getAttributes("image")["alt"];
          setAlt(typeof value === "string" ? value : "");
          setOpen(true);
          queueMicrotask(() => input?.focus());
        }}
      >
        <ImageIcon size={16} aria-hidden="true" />
      </Button>
      <Show when={open() && !disabled()}>
        <form
          class="nui-rich-text-link-form"
          onSubmit={(event) => {
            event.preventDefault();
            context.editor()?.chain().focus().updateAttributes("image", { alt: alt() }).run();
            setOpen(false);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              close();
            }
          }}
        >
          <input
            ref={input}
            type="text"
            value={alt()}
            aria-label="Image alternative text"
            placeholder="Describe the image"
            onInput={(event) => setAlt(event.currentTarget.value)}
          />
          <Button type="submit" size="xs" variant="soft">
            Apply
          </Button>
          <Button type="button" size="xs" tone="neutral" variant="ghost" onClick={close}>
            Cancel
          </Button>
        </form>
      </Show>
    </span>
  );
}
