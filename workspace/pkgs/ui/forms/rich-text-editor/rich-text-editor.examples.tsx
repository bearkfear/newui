import { createSignal, For } from "solid-js";
import { Button } from "../../actions/button/button";
import { Field } from "../field/field";
import { extractRichText, parseRichTextHtml, renderRichTextHtml } from "./rich-text.helpers";
import type { RichTextDocument, RichTextValueDetails } from "./rich-text.types";
import { RichTextEditor } from "./rich-text-editor";

export const sampleDocument: RichTextDocument = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "A calmer writing surface" }],
    },
    {
      type: "paragraph",
      content: [
        { type: "text", text: "Shape an idea with " },
        { type: "text", text: "structure", marks: [{ type: "bold" }] },
        { type: "text", text: ", then keep the JSON as its durable source." },
      ],
    },
    {
      type: "bulletList",
      content: ["Draft in context", "Render normalized HTML", "Index plain text"].map((text) => ({
        type: "listItem",
        content: [{ type: "paragraph", content: [{ type: "text", text }] }],
      })),
    },
  ],
};

export function ControlledRichTextExample() {
  const [value, setValue] = createSignal(sampleDocument);
  const [details, setDetails] = createSignal<RichTextValueDetails>();
  return (
    <div class="text-fields-demo-stack">
      <Field.Root>
        <Field.Label>Release notes</Field.Label>
        <RichTextEditor.Root
          value={value()}
          onValueChange={(next) => {
            setValue(next.value);
            setDetails(next);
          }}
          maxCharacters={600}
        >
          <RichTextEditor.Toolbar />
          <RichTextEditor.Content />
          <RichTextEditor.CharacterCount />
        </RichTextEditor.Root>
        <Field.Description>
          JSON remains canonical while HTML and text are derived.
        </Field.Description>
      </Field.Root>
      <pre class="text-fields-demo-code">{details()?.html ?? renderRichTextHtml(value())}</pre>
    </div>
  );
}

export function RichTextFormExample() {
  const [result, setResult] = createSignal("Submit to inspect the serialized JSON value.");
  return (
    <form
      class="text-fields-demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        setResult(String(new FormData(event.currentTarget).get("article")));
      }}
      onReset={() => setResult("The uncontrolled document returned to its default value.")}
    >
      <Field.Root required>
        <Field.Label>
          Article
          <Field.RequiredIndicator />
        </Field.Label>
        <RichTextEditor.Root name="article" defaultValue={sampleDocument} required>
          <RichTextEditor.Toolbar />
          <RichTextEditor.Content />
        </RichTextEditor.Root>
        <Field.Description>
          Required state is accessible; application validation owns emptiness.
        </Field.Description>
      </Field.Root>
      <div class="text-fields-demo-row">
        <Button type="submit">Inspect form data</Button>
        <Button type="reset" variant="outline">
          Reset default
        </Button>
      </div>
      <pre class="text-fields-demo-code" role="status">
        {result()}
      </pre>
    </form>
  );
}

export function RichTextHelperExample() {
  const imported = parseRichTextHtml(
    "<h2>Legacy article</h2><p>Imported with <strong>structure</strong>.</p>",
  );
  return (
    <div class="text-fields-demo-stack">
      <RichTextEditor.Root defaultValue={imported} readOnly aria-label="Imported legacy article">
        <RichTextEditor.Content />
      </RichTextEditor.Root>
      <pre class="text-fields-demo-code">{renderRichTextHtml(imported)}</pre>
      <pre class="text-fields-demo-code">{extractRichText(imported)}</pre>
    </div>
  );
}

export function RichTextStates() {
  const states = [
    {
      label: "Readonly",
      props: { readOnly: true, disabled: false, valid: false, invalid: false },
    },
    {
      label: "Disabled",
      props: { readOnly: false, disabled: true, valid: false, invalid: false },
    },
    { label: "Valid", props: { readOnly: false, disabled: false, valid: true, invalid: false } },
    { label: "Invalid", props: { readOnly: false, disabled: false, valid: false, invalid: true } },
  ];
  return (
    <div class="text-fields-demo-grid">
      <For each={states}>
        {(state) => (
          <Field.Root invalid={state.props.invalid} valid={state.props.valid}>
            <Field.Label>{state.label}</Field.Label>
            <RichTextEditor.Root {...state.props} defaultValue={sampleDocument}>
              <RichTextEditor.Toolbar />
              <RichTextEditor.Content />
            </RichTextEditor.Root>
            <Field.ErrorText>Review this document before continuing.</Field.ErrorText>
          </Field.Root>
        )}
      </For>
    </div>
  );
}
