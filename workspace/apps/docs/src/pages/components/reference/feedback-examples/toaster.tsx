import { Button } from "@egcs/newui/actions";
import { createToaster, Toaster } from "@egcs/newui/feedback";
import { onCleanup } from "solid-js";

export function ToasterExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const toaster = createToaster({ placement: "bottom-end", max: 2 });
  onCleanup(() => toaster.remove());

  return (
    <>
      <Button
        onClick={() =>
          toaster.create({
            type: "info",
            title: pt() ? "Convite enviado" : "Invitation sent",
            description: pt()
              ? "A pessoa receberá um e-mail para entrar no projeto."
              : "The recipient will receive an email invitation.",
          })
        }
      >
        {pt() ? "Enviar convite" : "Send invitation"}
      </Button>
      <Toaster
        toaster={toaster}
        label={pt() ? "Notificações do projeto" : "Project notifications"}
      />
    </>
  );
}
