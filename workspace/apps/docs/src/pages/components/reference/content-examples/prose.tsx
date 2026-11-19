import { Prose } from "@egcs/newui/content";

export function ProseExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  return (
    <Prose size="sm">
      <h3>{pt() ? "Notas da versão" : "Release notes"}</h3>
      <p>
        {pt()
          ? "Esta versão melhora a colaboração entre equipes."
          : "This release improves collaboration across teams."}
      </p>
      <ul>
        <li>{pt() ? "Convites por link" : "Link invitations"}</li>
        <li>{pt() ? "Permissões por projeto" : "Project permissions"}</li>
      </ul>
    </Prose>
  );
}
