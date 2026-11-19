import { Extension } from "@tiptap/core";
import { Plugin } from "@tiptap/pm/state";
import type { EditorView } from "@tiptap/pm/view";

// Tiptap's resizable image node view does not synchronize dimensions on attribute updates or undo.
export const RichTextImageSize = Extension.create({
  name: "richTextImageSize",
  addProseMirrorPlugins() {
    return [new Plugin({ view: () => ({ update: syncImageSizes }) })];
  },
});

function syncImageSizes(view: EditorView) {
  view.state.doc.descendants((node, position) => {
    if (node.type.name !== "image") return;
    const container = view.nodeDOM(position);
    const image = container instanceof HTMLElement ? container.querySelector("img") : null;
    if (!image) return;
    const width = node.attrs["width"];
    const height = node.attrs["height"];
    image.style.width = typeof width === "number" ? `${width}px` : "";
    image.style.height = typeof height === "number" ? `${height}px` : "";
  });
}
