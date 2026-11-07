import type { Editor } from "@tiptap/core";
import { type Accessor, createContext, useContext } from "solid-js";

export type RichTextEditorContextValue = {
  editor: Accessor<Editor | undefined>;
  revision: Accessor<number>;
  disabled: Accessor<boolean>;
  readOnly: Accessor<boolean>;
  maxCharacters: Accessor<number | undefined>;
  registerContent: (element: HTMLDivElement) => void;
};

export const RichTextEditorContext = createContext<RichTextEditorContextValue>();

export function useRichTextEditor() {
  const context = useContext(RichTextEditorContext);
  if (!context) throw new Error("RichTextEditor parts must be inside RichTextEditor.Root.");
  return context;
}
