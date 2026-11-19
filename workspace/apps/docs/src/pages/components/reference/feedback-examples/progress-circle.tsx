import { ProgressCircle } from "@egcs/newui/feedback";

export function ProgressCircleExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <div
      style={{ display: "flex", "flex-wrap": "wrap", "justify-content": "center", gap: "1.25rem" }}
    >
      <ProgressCircle value={65} label={pt() ? "Sincronizando" : "Syncing"} />
      <ProgressCircle value={100} tone="success" label={pt() ? "Concluído" : "Complete"} />
    </div>
  );
}
