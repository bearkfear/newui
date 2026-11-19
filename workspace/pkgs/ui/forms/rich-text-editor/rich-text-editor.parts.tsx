import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useRichTextEditor } from "./rich-text.context";
import { RichTextImageControls } from "./rich-text-editor.image-controls";
import { RichTextDefaultToolbar } from "./rich-text-editor.toolbar";

/**
 * Native group attributes for the editor's formatting toolbar.
 */
export type RichTextToolbarProps = JSX.HTMLAttributes<HTMLDivElement>;

/**
 * Renders formatting controls. Omitting children renders the default toolbar.
 */
export function RichTextToolbar(props: RichTextToolbarProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);
  return (
    // biome-ignore lint/a11y/useSemanticElements: Formatting buttons remain native Tab stops.
    <div
      {...rest}
      role="group"
      aria-label={props["aria-label"] ?? "Text formatting"}
      class={["nui-rich-text-toolbar", local.class].filter(Boolean).join(" ")}
    >
      <Show when={local.children} fallback={<RichTextDefaultToolbar />}>
        {(children) => children()}
      </Show>
    </div>
  );
}

/**
 * Native div attributes forwarded to the contenteditable mount point.
 */
export type RichTextContentProps = JSX.HTMLAttributes<HTMLDivElement>;

/**
 * Mounts the schema-backed contenteditable surface.
 */
export function RichTextContent(props: RichTextContentProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["class", "ref"]);
  return (
    <>
      <div
        {...rest}
        ref={(element) => {
          context.registerContent(element);
          if (typeof local.ref === "function") local.ref(element);
        }}
        class={["nui-rich-text-content", local.class].filter(Boolean).join(" ")}
      />
      <RichTextImageControls />
    </>
  );
}

/**
 * Native span attributes for the live character count.
 */
export type RichTextCharacterCountProps = JSX.HTMLAttributes<HTMLSpanElement>;

/**
 * Displays the current character count and optional configured limit.
 */
export function RichTextCharacterCount(props: RichTextCharacterCountProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["class", "children"]);
  const count = () => {
    context.revision();
    return context.editor()?.storage.characterCount.characters() ?? 0;
  };
  return (
    <span
      {...rest}
      aria-live="polite"
      class={["nui-rich-text-count", local.class].filter(Boolean).join(" ")}
    >
      {local.children ??
        `${count()}${context.maxCharacters() ? ` / ${context.maxCharacters()}` : ""}`}
    </span>
  );
}
