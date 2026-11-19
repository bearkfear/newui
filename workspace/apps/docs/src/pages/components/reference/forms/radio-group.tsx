import { RadioGroup } from "@egcs/newui/forms";

export function Example(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <RadioGroup.Root name="plan" defaultValue="personal">
      <RadioGroup.Label>{pt() ? "Plano do workspace" : "Workspace plan"}</RadioGroup.Label>
      <RadioGroup.Item value="personal">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>{pt() ? "Pessoal" : "Personal"}</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="team">
        <RadioGroup.ItemControl />
        <RadioGroup.ItemText>{pt() ? "Equipe" : "Team"}</RadioGroup.ItemText>
      </RadioGroup.Item>
    </RadioGroup.Root>
  );
}
