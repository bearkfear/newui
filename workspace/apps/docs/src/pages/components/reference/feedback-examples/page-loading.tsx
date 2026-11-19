import { PageLoading } from "@egcs/newui/feedback";

export function PageLoadingExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <PageLoading
      layout="section"
      label={pt() ? "Carregando o espaço de trabalho…" : "Loading workspace…"}
      description={
        pt()
          ? "Buscando seus projetos e atividades recentes."
          : "Fetching your projects and recent activity."
      }
    />
  );
}
