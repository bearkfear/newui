import { Field, FileInput } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Field.Root style={{ width: "min(100%, 26rem)" }}>
      <Field.Label>{pt() ? "Anexo" : "Attachment"}</Field.Label>
      <FileInput.Root name="attachment" variant="compact" accept={{ "application/pdf": [".pdf"] }}>
        <FileInput.Control>
          <FileInput.Trigger>
            <FileInput.Indicator />
            {pt() ? "Escolher arquivo" : "Choose file"}
          </FileInput.Trigger>
          <FileInput.ValueText
            placeholder={pt() ? "Nenhum arquivo selecionado" : "No file selected"}
          />
        </FileInput.Control>
      </FileInput.Root>
      <Field.Description>
        {pt() ? "Selecione um documento PDF." : "Select a PDF document."}
      </Field.Description>
    </Field.Root>
  );
}
