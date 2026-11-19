import { Field, RichTextEditor } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "100%" }}>
      <Field.Label>{pt() ? "Notas do projeto" : "Project notes"}</Field.Label>
      <RichTextEditor.Root
        name="notes"
        maxCharacters={300}
        defaultValue={{
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [
                { type: "text", text: pt() ? "A revisão está pronta." : "The review is ready." },
              ],
            },
          ],
        }}
      >
        <RichTextEditor.Toolbar aria-label={pt() ? "Formatação" : "Formatting"}>
          <RichTextEditor.Bold label={pt() ? "Negrito" : "Bold"} />
          <RichTextEditor.Italic label={pt() ? "Itálico" : "Italic"} />
          <RichTextEditor.BulletList label={pt() ? "Lista com marcadores" : "Bullet list"} />
        </RichTextEditor.Toolbar>
        <RichTextEditor.Content />
        <RichTextEditor.CharacterCount />
      </RichTextEditor.Root>
    </Field.Root>
  );
}
