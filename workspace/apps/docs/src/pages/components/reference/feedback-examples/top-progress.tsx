import { Button } from "@egcs/newui/actions";
import { createTopProgress, TopProgress } from "@egcs/newui/feedback";

export function TopProgressExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const progress = createTopProgress({ delay: 0 });

  return (
    <>
      <Button onClick={() => progress.start()}>
        {pt() ? "Iniciar carregamento" : "Start loading"}
      </Button>
      <Button variant="outline" onClick={() => progress.done()}>
        {pt() ? "Concluir" : "Finish"}
      </Button>
      <TopProgress controller={progress} label={pt() ? "Carregando página" : "Loading page"} />
    </>
  );
}
