import { Button } from "@egcs/newui/actions";
import { createToaster, Toast, Toaster } from "@egcs/newui/feedback";
import { onCleanup } from "solid-js";

export function ToastExample(props: { locale?: "pt-BR" | "en" }) {
  const pt = () => props.locale === "pt-BR";
  const toaster = createToaster();
  onCleanup(() => toaster.remove());

  return (
    <>
      <Button
        onClick={() =>
          toaster.create({
            type: "success",
            title: pt() ? "Alterações salvas" : "Changes saved",
            description: pt() ? "Seu projeto está atualizado." : "Your project is up to date.",
            closable: true,
          })
        }
      >
        {pt() ? "Salvar alterações" : "Save changes"}
      </Button>
      <Toaster toaster={toaster} label={pt() ? "Notificações" : "Notifications"}>
        {(toast) => (
          <Toast.Root variant="outline">
            <Toast.Icon />
            <Toast.Content>
              <Toast.Title>{toast().title}</Toast.Title>
              <Toast.Description>{toast().description}</Toast.Description>
            </Toast.Content>
            <Toast.CloseTrigger aria-label={pt() ? "Fechar notificação" : "Dismiss notification"} />
          </Toast.Root>
        )}
      </Toaster>
    </>
  );
}
