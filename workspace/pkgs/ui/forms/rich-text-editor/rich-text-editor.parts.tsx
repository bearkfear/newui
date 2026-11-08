import type { JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import { useRichTextEditor } from "./rich-text.context";
import { RichTextDefaultToolbar } from "./rich-text-editor.toolbar";

/**
 * Props for the editor's formatting action group.
 *
 * @remarks
 * **Português (pt-BR):** Props do grupo de ações de formatação do editor.
 */
export type RichTextToolbarProps = JSX.HTMLAttributes<HTMLDivElement>;

/**
 * Renders formatting controls. Omitting children renders the default toolbar.
 *
 * @remarks
 * **Português (pt-BR):** Renderiza controles de formatação. Omitir os filhos renderiza a toolbar
 * padrão.
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
        {local.children}
      </Show>
    </div>
  );
}

/**
 * Props for the editable surface mount point.
 *
 * @remarks
 * **Português (pt-BR):** Props do ponto de montagem da superfície editável.
 */
export type RichTextContentProps = JSX.HTMLAttributes<HTMLDivElement>;

/**
 * Mounts the schema-backed contenteditable surface.
 *
 * @remarks
 * **Português (pt-BR):** Monta a superfície contenteditable baseada em schema.
 */
export function RichTextContent(props: RichTextContentProps) {
  const context = useRichTextEditor();
  const [local, rest] = splitProps(props, ["class", "ref"]);
  return (
    <div
      {...rest}
      ref={(element) => {
        context.registerContent(element);
        if (typeof local.ref === "function") local.ref(element);
      }}
      class={["nui-rich-text-content", local.class].filter(Boolean).join(" ")}
    />
  );
}

/**
 * Props for the live character count.
 *
 * @remarks
 * **Português (pt-BR):** Props da contagem dinâmica de caracteres.
 */
export type RichTextCharacterCountProps = JSX.HTMLAttributes<HTMLSpanElement>;

/**
 * Displays the current character count and optional configured limit.
 *
 * @remarks
 * **Português (pt-BR):** Exibe a contagem atual de caracteres e o limite configurado opcional.
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
