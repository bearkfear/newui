import { NodeSelection } from "@tiptap/pm/state";
import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js";
import { Portal } from "solid-js/web";
import { Button } from "../../actions/button/button";
import { useRichTextEditor } from "./rich-text.context";

export function RichTextImageControls() {
  const context = useRichTextEditor();
  const [position, setPosition] = createSignal<{ top: number; left: number }>();
  const [alt, setAlt] = createSignal("");
  const [width, setWidth] = createSignal("");
  let selected = -1;
  let lastWidth: unknown;
  let lastAlt: unknown;
  const update = () => {
    context.revision();
    const editor = context.editor();
    const selection = editor?.state.selection;
    if (
      !editor ||
      context.disabled() ||
      context.readOnly() ||
      !(selection instanceof NodeSelection) ||
      selection.node.type.name !== "image"
    ) {
      selected = -1;
      lastWidth = undefined;
      lastAlt = undefined;
      setPosition(undefined);
      return;
    }
    const node = editor.view.nodeDOM(selection.from);
    const image = imageElement(node);
    if (!image) return;
    if (selected !== selection.from) {
      selected = selection.from;
      lastAlt = undefined;
      lastWidth = undefined;
    }
    if (lastAlt !== selection.node.attrs["alt"]) {
      lastAlt = selection.node.attrs["alt"];
      setAlt(String(lastAlt ?? ""));
    }
    if (lastWidth !== selection.node.attrs["width"]) {
      lastWidth = selection.node.attrs["width"];
      setWidth(String(lastWidth ?? Math.round(image.getBoundingClientRect().width)));
    }
    const rect = image.getBoundingClientRect();
    setPosition({
      left: Math.max(8, Math.min(rect.left, window.innerWidth - 328)),
      top: rect.bottom + 200 < window.innerHeight ? rect.bottom + 8 : Math.max(8, rect.top - 200),
    });
  };
  createEffect(update);
  onMount(() => {
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    onCleanup(() => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    });
  });
  return (
    <Show when={position()}>
      {(point) => (
        <Portal>
          <ImagePanel
            point={point()}
            alt={alt()}
            width={width()}
            setAlt={setAlt}
            setWidth={setWidth}
          />
        </Portal>
      )}
    </Show>
  );
}

function ImagePanel(props: {
  point: { top: number; left: number };
  alt: string;
  width: string;
  setAlt: (value: string) => void;
  setWidth: (value: string) => void;
}) {
  const context = useRichTextEditor();
  const valid = () =>
    Number.isInteger(Number(props.width)) &&
    Number(props.width) >= 1 &&
    Number(props.width) <= 4096;
  return (
    <fieldset
      class="nui-rich-text-image-controls"
      aria-label="Selected image controls"
      style={{ top: `${props.point.top}px`, left: `${props.point.left}px` }}
      onKeyDown={(event) => {
        if (event.key === "Escape") context.editor()?.commands.focus();
      }}
    >
      <label>
        Alternative text
        <input
          type="text"
          value={props.alt}
          onInput={(event) => props.setAlt(event.currentTarget.value)}
          placeholder="Describe the image"
        />
      </label>
      <label>
        Width (px)
        <input
          type="number"
          min="1"
          max="4096"
          value={props.width}
          onInput={(event) => props.setWidth(event.currentTarget.value)}
        />
      </label>
      <div class="nui-rich-text-image-actions">
        <Button
          type="button"
          size="xs"
          variant="soft"
          disabled={!valid()}
          onClick={() =>
            context
              .editor()
              ?.chain()
              .focus()
              .updateAttributes("image", {
                alt: props.alt,
                width: Number(props.width),
                height: null,
              })
              .run()
          }
        >
          Apply
        </Button>
        <Button
          type="button"
          size="xs"
          tone="danger"
          variant="ghost"
          onClick={() => context.editor()?.chain().focus().deleteSelection().run()}
        >
          Remove image
        </Button>
      </div>
    </fieldset>
  );
}

function imageElement(node: Node | null) {
  if (!(node instanceof HTMLElement)) return null;
  return node.matches("img") ? node : node.querySelector("img");
}
