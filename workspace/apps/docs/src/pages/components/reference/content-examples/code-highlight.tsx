import { CodeHighlight } from "@egcs/newui/content";

export function CodeHighlightExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const source =
    'import { Button } from "@egcs/newui/actions";\n\n<Button variant="soft">Save</Button>;';

  return (
    <CodeHighlight
      language="tsx"
      title="example.tsx"
      code={source}
      copyable
      copyLabel={pt() ? "Copiar" : "Copy"}
      copiedLabel={pt() ? "Copiado" : "Copied"}
      copyErrorLabel={pt() ? "Não foi possível copiar" : "Could not copy"}
      style={{ width: "100%", "max-width": "28rem" }}
    />
  );
}
