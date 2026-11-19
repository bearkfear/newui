import {
  AlertDialog,
  Button,
  Dialog,
  Heading,
  HoverCard,
  Popover,
  Sheet,
  Switch,
  Text,
  Tooltip,
} from "@egcs/newui";
import { Download } from "lucide-solid";
import { createSignal } from "solid-js";
import type { Locales } from "../../../i18n/i18n-types";

export const labels = {
  "pt-BR": {
    cancel: "Cancelar",
    done: "Concluir",
    close: "Fechar",
    delete: "Excluir rascunho",
    deleteTitle: "Excluir este rascunho?",
    deleteDescription: "A exclusão remove todas as alterações ainda não publicadas.",
    deleted: "Rascunho excluído.",
    details: "Ver detalhes",
    report: "Relatório trimestral",
    reportDescription: "Período de janeiro a março.",
    reportBody: "A receita cresceu 12% em relação ao trimestre anterior.",
    hoverTitle: "Passe o ponteiro sobre o link ou foque com Tab.",
    solidDescription: "Biblioteca reativa para construir interfaces com JavaScript.",
    preferences: "Preferências",
    email: "Receber atualizações por e-mail",
    openActivity: "Ver atividade",
    activity: "Atividade do projeto",
    activityDescription: "Mudanças recentes no relatório.",
    activityBody: "Ana publicou a versão revisada do relatório.",
    download: "Exportar relatório",
    downloadHint: "Prepare uma versão CSV do relatório atual.",
    downloadReady: "Relatório pronto para exportação.",
  },
  en: {
    cancel: "Cancel",
    done: "Done",
    close: "Close",
    delete: "Delete draft",
    deleteTitle: "Delete this draft?",
    deleteDescription: "Deleting the draft removes all unpublished changes.",
    deleted: "Draft deleted.",
    details: "View details",
    report: "Quarterly report",
    reportDescription: "January through March.",
    reportBody: "Revenue increased by 12% compared with the previous quarter.",
    hoverTitle: "Hover over the link or focus it with Tab.",
    solidDescription: "A reactive library for building user interfaces with JavaScript.",
    preferences: "Preferences",
    email: "Receive email updates",
    openActivity: "View activity",
    activity: "Project activity",
    activityDescription: "Recent changes to the report.",
    activityBody: "Ana published a revised version of the report.",
    download: "Export report",
    downloadHint: "Prepare a CSV of the current report.",
    downloadReady: "Report ready to export.",
  },
} as const;

export function AlertDialogPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [deleted, setDeleted] = createSignal(false);

  return (
    <div class="grid justify-items-center gap-3">
      <AlertDialog.Root>
        <AlertDialog.Trigger
          asChild={(trigger) => (
            <Button {...trigger()} variant="outline" tone="danger">
              {text().delete}
            </Button>
          )}
        />
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>{text().deleteTitle}</AlertDialog.Title>
            <AlertDialog.Description>{text().deleteDescription}</AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.CancelTrigger>{text().cancel}</AlertDialog.CancelTrigger>
            <AlertDialog.ActionTrigger onClick={() => setDeleted(true)}>
              {text().delete}
            </AlertDialog.ActionTrigger>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <Text role="status" size="7" tone="muted" class="m-0 min-h-5">
        {deleted() ? text().deleted : ""}
      </Text>
    </div>
  );
}

export function DialogPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={(trigger) => <Button {...trigger()}>{text().details}</Button>} />
      <Dialog.Content size="sm">
        <Dialog.Header>
          <Dialog.Title>{text().report}</Dialog.Title>
          <Dialog.Description>{text().reportDescription}</Dialog.Description>
          <Dialog.CloseTrigger aria-label={text().close} />
        </Dialog.Header>
        <Dialog.Body>
          <Text>{text().reportBody}</Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger asChild={(close) => <Button {...close()}>{text().done}</Button>} />
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export function HoverCardPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];

  return (
    <div class="grid justify-items-center gap-2">
      <Text size="7" tone="muted" class="m-0">
        {text().hoverTitle}
      </Text>
      <HoverCard.Root>
        <HoverCard.Trigger
          asChild={(trigger) => (
            <a {...trigger()} href="https://www.solidjs.com/">
              SolidJS
            </a>
          )}
        />
        <HoverCard.Content>
          <Heading as="h3" size="6" class="m-0">
            SolidJS
          </Heading>
          <Text size="6" class="mt-2 mb-0">
            {text().solidDescription}
          </Text>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  );
}

export function PopoverPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [email, setEmail] = createSignal(true);

  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(trigger) => (
          <Button {...trigger()} variant="outline">
            {text().preferences}
          </Button>
        )}
      />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>{text().preferences}</Popover.Title>
          <Popover.CloseTrigger aria-label={text().close} />
        </Popover.Header>
        <Popover.Body>
          <Switch.Root checked={email()} onCheckedChange={({ checked }) => setEmail(checked)}>
            <Switch.Control />
            <Switch.Label>{text().email}</Switch.Label>
          </Switch.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
}

export function SheetPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];

  return (
    <Sheet.Root>
      <Sheet.Trigger asChild={(trigger) => <Button {...trigger()}>{text().openActivity}</Button>} />
      <Sheet.Content side="right" size="sm">
        <Sheet.Header>
          <Sheet.Title>{text().activity}</Sheet.Title>
          <Sheet.Description>{text().activityDescription}</Sheet.Description>
          <Sheet.CloseTrigger aria-label={text().close} />
        </Sheet.Header>
        <Sheet.Body>
          <Text>{text().activityBody}</Text>
        </Sheet.Body>
      </Sheet.Content>
    </Sheet.Root>
  );
}

export function TooltipPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [ready, setReady] = createSignal(false);

  return (
    <div class="grid justify-items-center gap-3">
      <Tooltip.Root>
        <Tooltip.Trigger
          asChild={(trigger) => (
            <Button
              {...trigger()}
              iconOnly
              variant="outline"
              aria-label={text().download}
              startIcon={<Download />}
              onClick={() => setReady(true)}
            />
          )}
        />
        <Tooltip.Content>{text().downloadHint}</Tooltip.Content>
      </Tooltip.Root>
      <Text role="status" size="7" tone="muted" class="m-0 min-h-5">
        {ready() ? text().downloadReady : ""}
      </Text>
    </div>
  );
}
