import { Loading } from "@egcs/newui/feedback";

export function LoadingExample(props: { locale?: "pt-BR" | "en" }) {
  return (
    <Loading
      size="sm"
      showLabel
      label={
        props.locale === "pt-BR" ? "Buscando atividades do projeto…" : "Fetching project activity…"
      }
    />
  );
}
