import { splitProps } from "solid-js";
import { useTextControl } from "../text-control.context";
import { textControlRecipe } from "../text-control.recipe";
import { createRichTextEditor } from "./create-rich-text-editor";
import { RichTextEditorContext } from "./rich-text.context";
import type {
  RichTextEditorProps,
  RichTextSubmitValue,
  RichTextValueDetails,
} from "./rich-text.types";

/**
 * Provides editor state, form participation, and shared visual options.
 *
 * @remarks
 * **Português (pt-BR):** Fornece estado do editor, participação em formulário e opções visuais
 * compartilhadas.
 */
export function RichTextEditorRoot(props: RichTextEditorProps) {
  const [local, rest] = splitProps(props, [
    "value",
    "defaultValue",
    "onValueChange",
    "name",
    "form",
    "submitValue",
    "placeholder",
    "maxCharacters",
    "required",
    "size",
    "tone",
    "rounded",
    "valid",
    "invalid",
    "loading",
    "disabled",
    "readOnly",
    "class",
    "children",
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
  ]);
  const control = useTextControl(local);
  const state = createRichTextEditor(props, control);
  const context = {
    editor: state.editor,
    revision: state.revision,
    disabled: control.disabled,
    readOnly: control.readOnly,
    maxCharacters: () => local.maxCharacters,
    registerContent: state.registerContent,
  };
  return (
    <RichTextEditorContext.Provider value={context}>
      <div
        {...rest}
        data-size={control.size()}
        data-invalid={control.invalid() ? "" : undefined}
        data-valid={control.valid() ? "" : undefined}
        data-loading={control.loading() ? "" : undefined}
        data-disabled={control.disabled() ? "" : undefined}
        data-readonly={control.readOnly() ? "" : undefined}
        class={textControlRecipe({
          size: control.size(),
          tone: control.tone(),
          rounded: control.rounded(),
          class: ["nui-rich-text-editor", local.class].filter(Boolean).join(" "),
        })}
      >
        {local.children}
        {local.name ? (
          <input
            ref={state.registerInput}
            type="hidden"
            name={local.name}
            form={local.form}
            disabled={control.disabled()}
            value={submittedValue(state.details(), local.submitValue)}
          />
        ) : null}
      </div>
    </RichTextEditorContext.Provider>
  );
}

function submittedValue(details: RichTextValueDetails, format: RichTextSubmitValue | undefined) {
  if (format === "html") return details.html;
  if (format === "text") return details.text;
  return JSON.stringify(details.value);
}
