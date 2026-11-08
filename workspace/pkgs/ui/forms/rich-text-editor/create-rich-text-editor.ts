import { useFieldContext } from "@ark-ui/solid/field";
import { Editor } from "@tiptap/core";
import { createEffect, createSignal, onCleanup, onMount, untrack } from "solid-js";
import { bindTextControlReset } from "../text-control.reset";
import { createRichTextEditorExtensions } from "./rich-text.extensions";
import type { ReturnTypeOfUseTextControl } from "./rich-text.internal-types";
import { assertRichTextDocument } from "./rich-text.schema";
import type {
  RichTextDocument,
  RichTextEditorProps,
  RichTextValueDetails,
} from "./rich-text.types";

export function createRichTextEditor(
  props: RichTextEditorProps,
  control: ReturnTypeOfUseTextControl,
) {
  const field = useFieldContext();
  const [editor, setEditor] = createSignal<Editor>();
  const [mount, setMount] = createSignal<HTMLDivElement>();
  const [formInput, setFormInput] = createSignal<HTMLInputElement>();
  const [revision, setRevision] = createSignal(0);
  const initial = untrack(() => props.value ?? props.defaultValue ?? emptyDocument());
  assertRichTextDocument(initial);
  const [details, setDetails] = createSignal<RichTextValueDetails>(initialDetails(initial));
  let disposed = false;

  onMount(() => {
    const element = mount();
    if (!element) throw new Error("RichTextEditor.Content is required inside RichTextEditor.Root.");
    const instance = createEditor(
      element,
      initial,
      props,
      () => setRevision((value) => value + 1),
      (current) => updateDetails(current, setDetails, props.onValueChange),
    );
    setEditor(instance);
    setDetails(editorDetails(instance));
    const input = formInput();
    if (input) {
      bindTextControlReset(
        input,
        () => resetEditor(instance, initial, props.value, setDetails),
        () => disposed,
      );
    }
    onCleanup(() => {
      disposed = true;
      instance.destroy();
    });
  });

  createEffect(() => syncControlledValue(editor(), props.value, setDetails));
  createEffect(() => syncEditorOptions(editor(), props, control, field?.()));

  return { editor, revision, details, registerContent: setMount, registerInput: setFormInput };
}

function createEditor(
  element: HTMLDivElement,
  initial: RichTextDocument,
  props: RichTextEditorProps,
  revise: () => void,
  change: (editor: Editor) => void,
) {
  const instance = new Editor({
    element,
    content: initial,
    extensions: createRichTextEditorExtensions({
      placeholder: props.placeholder ?? "Write something…",
      maxCharacters: props.maxCharacters,
    }),
    editable: !(props.disabled || props.readOnly),
    injectCSS: false,
    enableContentCheck: true,
    onUpdate: ({ editor }) => change(editor),
    onTransaction: revise,
    onSelectionUpdate: revise,
  });
  return instance;
}

function updateDetails(
  editor: Editor,
  setDetails: ((value: RichTextValueDetails) => void) | undefined,
  notify: RichTextEditorProps["onValueChange"],
) {
  const next = editorDetails(editor);
  setDetails?.(next);
  notify?.(next);
}

function editorDetails(editor: Editor): RichTextValueDetails {
  return {
    value: editor.getJSON() as RichTextDocument,
    html: editor.getHTML(),
    text: editor.getText({ blockSeparator: "\n\n" }),
    empty: editor.isEmpty,
  };
}

function initialDetails(value: RichTextDocument): RichTextValueDetails {
  return { value, html: "", text: "", empty: true };
}

function emptyDocument(): RichTextDocument {
  return { type: "doc", content: [{ type: "paragraph" }] };
}

function syncControlledValue(
  editor: Editor | undefined,
  value: RichTextDocument | undefined,
  setDetails: (value: RichTextValueDetails) => void,
) {
  if (!editor || value === undefined) return;
  assertRichTextDocument(value);
  if (JSON.stringify(editor.getJSON()) === JSON.stringify(value)) return;
  editor.commands.setContent(value, { emitUpdate: false, errorOnInvalidContent: true });
  setDetails(editorDetails(editor));
}

function resetEditor(
  editor: Editor | undefined,
  initial: RichTextDocument,
  controlled: RichTextDocument | undefined,
  setDetails: (value: RichTextValueDetails) => void,
) {
  if (!editor || controlled !== undefined) return;
  editor.commands.setContent(initial, { emitUpdate: false, errorOnInvalidContent: true });
  setDetails(editorDetails(editor));
}

function syncEditorOptions(
  editor: Editor | undefined,
  props: RichTextEditorProps,
  control: ReturnTypeOfUseTextControl,
  field: ReturnType<NonNullable<ReturnType<typeof useFieldContext>>> | undefined,
) {
  if (!editor) return;
  const editable = !(control.disabled() || control.readOnly());
  editor.setEditable(editable, false);
  editor.setOptions({ editorProps: { attributes: editorAttributes(props, control, field) } });
}

function editorAttributes(
  props: RichTextEditorProps,
  control: ReturnTypeOfUseTextControl,
  field: ReturnType<NonNullable<ReturnType<typeof useFieldContext>>> | undefined,
) {
  const attributes: Record<string, string> = {
    role: "textbox",
    "aria-multiline": "true",
    class: "nui-rich-text-surface nui-prose nui-focus-links",
  };
  addAttribute(attributes, "id", field?.ids.control);
  addAttribute(attributes, "aria-label", props["aria-label"]);
  addAttribute(attributes, "aria-labelledby", props["aria-labelledby"] ?? field?.ids.label);
  addAttribute(attributes, "aria-describedby", control.describedBy(props["aria-describedby"]));
  addAttribute(attributes, "aria-invalid", control.invalid() ? "true" : undefined);
  addAttribute(attributes, "aria-required", props.required || field?.required ? "true" : undefined);
  addAttribute(attributes, "aria-readonly", control.readOnly() ? "true" : undefined);
  addAttribute(attributes, "aria-disabled", control.disabled() ? "true" : undefined);
  return attributes;
}

function addAttribute(attributes: Record<string, string>, name: string, value: string | undefined) {
  if (value !== undefined) attributes[name] = value;
}
