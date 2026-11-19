import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import type { EditorView } from "@tiptap/pm/view";
import { Decoration, DecorationSet } from "@tiptap/pm/view";
import type { RichTextEditorProps } from "./rich-text.types";

const key = new PluginKey<DecorationSet>("richTextImagePaste");
type PasteOption = RichTextEditorProps["imagePaste"];

export function createImagePasteExtension(
  option: () => PasteOption,
  onError: (error: unknown, file: File) => void,
) {
  return Extension.create({
    name: "imagePaste",
    addProseMirrorPlugins() {
      return [
        new Plugin({
          key,
          state: {
            init: () => DecorationSet.empty,
            apply(transaction, decorations) {
              const mapped = decorations.map(transaction.mapping, transaction.doc);
              const action = transaction.getMeta(key) as
                | { add?: { id: object; pos: number }; remove?: object }
                | undefined;
              if (action?.add) {
                const { id, pos } = action.add;
                return mapped.add(transaction.doc, [
                  Decoration.widget(
                    pos,
                    () => {
                      const marker = document.createElement("span");
                      marker.textContent = "Processing image…";
                      marker.setAttribute("role", "status");
                      return marker;
                    },
                    { id },
                  ),
                ]);
              }
              if (action?.remove)
                return mapped.remove(
                  mapped.find(undefined, undefined, (spec) => spec["id"] === action.remove),
                );
              return mapped;
            },
          },
          props: {
            handlePaste(view, event) {
              const mode = option();
              const files = Array.from(event.clipboardData?.files ?? []).filter((file) =>
                file.type.startsWith("image/"),
              );
              if (!mode || !files.length) return false;
              event.preventDefault();
              for (const file of files) insertImage(view, file, mode, onError);
              return true;
            },
          },
        }),
      ];
    },
  });
}

function insertImage(
  view: EditorView,
  file: File,
  mode: Exclude<PasteOption, undefined>,
  onError: (error: unknown, file: File) => void,
) {
  const id = {};
  view.dispatch(view.state.tr.setMeta(key, { add: { id, pos: view.state.selection.to } }));
  const result = mode === "embedded" ? readImage(file) : Promise.resolve().then(() => mode(file));
  void result
    .then((src) => {
      if (view.isDestroyed) return;
      const marker = key
        .getState(view.state)
        ?.find(undefined, undefined, (spec) => spec["id"] === id)[0];
      if (!marker) return;
      if (!src.trim()) throw new Error("Image upload returned an empty URL.");
      const image = view.state.schema.nodes["image"]?.create({ src, alt: "" });
      if (!image) throw new Error("Image node is unavailable.");
      view.dispatch(
        view.state.tr
          .replaceRangeWith(marker.from, marker.from, image)
          .setMeta(key, { remove: id }),
      );
    })
    .catch((error: unknown) => {
      if (!view.isDestroyed) view.dispatch(view.state.tr.setMeta(key, { remove: id }));
      onError(error, file);
    });
}

function readImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error ?? new Error("Unable to read image."));
    reader.onabort = () => reject(new Error("Image reading was canceled."));
    reader.onload = () =>
      typeof reader.result === "string"
        ? resolve(reader.result)
        : reject(new Error("Unable to read image."));
    reader.readAsDataURL(file);
  });
}
