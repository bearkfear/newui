import { Accordion } from "@egcs/newui/content";

export function AccordionExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";

  return (
    <Accordion.Root defaultValue={["sharing"]} style={{ width: "100%", "max-width": "28rem" }}>
      <Accordion.Item value="sharing">
        <Accordion.ItemHeading>
          <Accordion.ItemTrigger>
            {pt() ? "Quem pode ver o projeto?" : "Who can see the project?"}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeading>
        <Accordion.ItemContent>
          {pt()
            ? "Os membros do espaço têm acesso ao projeto."
            : "Workspace members can access the project."}
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="access">
        <Accordion.ItemHeading>
          <Accordion.ItemTrigger>
            {pt() ? "Como solicito acesso?" : "How do I request access?"}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeading>
        <Accordion.ItemContent>
          {pt()
            ? "Peça um convite à pessoa responsável pelo projeto."
            : "Ask the project owner for an invitation."}
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
