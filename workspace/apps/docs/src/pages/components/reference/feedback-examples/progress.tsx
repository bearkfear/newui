import { Button } from "@egcs/newui/actions";
import { Progress } from "@egcs/newui/feedback";
import { createSignal } from "solid-js";

export function ProgressExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const [uploaded, setUploaded] = createSignal(4);
  const total = 8;

  return (
    <div
      style={{
        display: "grid",
        gap: "0.75rem",
        width: "100%",
        "max-width": "24rem",
        "justify-items": "start",
      }}
    >
      <Progress
        value={uploaded()}
        max={total}
        tone={uploaded() === total ? "success" : "primary"}
        label={pt() ? "Envio de arquivos" : "File upload"}
        style={{ width: "100%" }}
      />
      <Button
        size="sm"
        variant="outline"
        disabled={uploaded() === total}
        onClick={() => setUploaded((count) => count + 1)}
      >
        {pt() ? "Avançar envio" : "Advance upload"}
      </Button>
    </div>
  );
}
