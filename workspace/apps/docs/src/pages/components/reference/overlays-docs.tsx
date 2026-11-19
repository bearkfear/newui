import { componentSummaries } from "../../../i18n/component-summaries";
import {
  AlertDialogPreview,
  DialogPreview,
  HoverCardPreview,
  labels,
  PopoverPreview,
  SheetPreview,
  TooltipPreview,
} from "./overlays-previews";
import type { ComponentDocumentation } from "./reference-types";

export const docs = {
  AlertDialog: {
    summary: componentSummaries.AlertDialog,
    usage: {
      "pt-BR":
        "Explique a consequência em `Description` e coloque exatamente um `CancelTrigger` antes de `ActionTrigger`. O foco inicial vai para Cancelar, e clicar fora mantém o diálogo aberto.",
      en: "Explain the consequence in `Description` and place exactly one `CancelTrigger` before `ActionTrigger`. Initial focus lands on Cancel, and clicking outside keeps the dialog open.",
    },
    rows: [
      ["Root.open / onOpenChange", "boolean / ({ open }) => void", "—"],
      ["Root.closeOnEscape", "boolean", "true"],
      ["Content.size", "sm | md | lg", "sm"],
      ["CancelTrigger.children", "JSX.Element", "Cancel"],
      ["ActionTrigger.onClick", "(event) => void", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal } from "solid-js";
import { AlertDialog } from "@egcs/newui/overlays";
import { Button } from "@egcs/newui/actions";

export function DeleteDraft() {
  const [deleted, setDeleted] = createSignal(false);

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild={(props) => (
          <Button {...props()} variant="outline" tone="danger">${text.delete}</Button>
        )} />
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>${text.deleteTitle}</AlertDialog.Title>
            <AlertDialog.Description>${text.deleteDescription}</AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.CancelTrigger>${text.cancel}</AlertDialog.CancelTrigger>
            <AlertDialog.ActionTrigger onClick={() => setDeleted(true)}>
              ${text.delete}
            </AlertDialog.ActionTrigger>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <p role="status">{deleted() ? "${text.deleted}" : ""}</p>
    </>
  );
}`;
    },
    preview: AlertDialogPreview,
  },
  Dialog: {
    summary: componentSummaries.Dialog,
    usage: {
      "pt-BR":
        "Use `Title` para nomear o diálogo e coloque conteúdo longo em `Body`. `Content` já inclui portal e fundo modal. Componha ações de fechar com `CloseTrigger`.",
      en: "Use `Title` to name the dialog and put longer content in `Body`. `Content` includes the portal and modal backdrop. Compose dismissal actions with `CloseTrigger`.",
    },
    rows: [
      ["Root.defaultOpen", "boolean", "false"],
      ["Root.modal", "boolean", "true"],
      ["Root.closeOnEscape", "boolean", "true"],
      ["Content.size", "sm | md | lg", "md"],
      ["Content.variant", "card | free", "card"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Dialog } from "@egcs/newui/overlays";
import { Button } from "@egcs/newui/actions";
import { Text } from "@egcs/newui/content";

<Dialog.Root>
  <Dialog.Trigger asChild={(props) => <Button {...props()}>${text.details}</Button>} />
  <Dialog.Content size="sm">
    <Dialog.Header>
      <Dialog.Title>${text.report}</Dialog.Title>
      <Dialog.Description>${text.reportDescription}</Dialog.Description>
      <Dialog.CloseTrigger aria-label="${text.close}" />
    </Dialog.Header>
    <Dialog.Body><Text>${text.reportBody}</Text></Dialog.Body>
    <Dialog.Footer>
      <Dialog.CloseTrigger asChild={(props) => <Button {...props()}>${text.done}</Button>} />
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>`;
    },
    preview: DialogPreview,
  },
  HoverCard: {
    summary: componentSummaries.HoverCard,
    usage: {
      "pt-BR":
        "Componha `Trigger` com um link real. Mantenha informações essenciais no destino ou no texto visível, pois a prévia é opcional e o toque não tem hover.",
      en: "Compose `Trigger` with a real link. Keep essential information at the destination or in visible text, because the preview is optional and touch has no hover.",
    },
    rows: [
      ["Root.openDelay", "number (ms)", "600"],
      ["Root.closeDelay", "number (ms)", "300"],
      ["Root.positioning.placement", "placement", "bottom-start"],
      ["Root.disabled", "boolean", "false"],
      ["Content.showArrow", "boolean", "true"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { HoverCard } from "@egcs/newui/overlays";
import { Heading, Text } from "@egcs/newui/content";

<HoverCard.Root>
  <HoverCard.Trigger asChild={(props) => (
    <a {...props()} href="https://www.solidjs.com/">SolidJS</a>
  )} />
  <HoverCard.Content>
    <Heading as="h3" size="6">SolidJS</Heading>
    <Text size="6">${text.solidDescription}</Text>
  </HoverCard.Content>
</HoverCard.Root>`;
    },
    preview: HoverCardPreview,
  },
  Popover: {
    summary: componentSummaries.Popover,
    usage: {
      "pt-BR":
        "Nomeie o painel com `Title` ou `aria-label`. Guarde o estado do formulário fora de `Content` quando ele precisar sobreviver ao fechamento.",
      en: "Name the panel with `Title` or `aria-label`. Keep form state outside `Content` if it needs to survive closing.",
    },
    rows: [
      ["Root.defaultOpen", "boolean", "false"],
      ["Root.modal", "boolean", "false"],
      ["Root.positioning.placement", "placement", "bottom-start"],
      ["Root.positioning.sameWidth", "boolean", "false"],
      ["Content.showArrow", "boolean", "true"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal } from "solid-js";
import { Button } from "@egcs/newui/actions";
import { Switch } from "@egcs/newui/forms";
import { Popover } from "@egcs/newui/overlays";

export function Preferences() {
  const [email, setEmail] = createSignal(true);

  return (
    <Popover.Root>
      <Popover.Trigger asChild={(props) => (
        <Button {...props()} variant="outline">${text.preferences}</Button>
      )} />
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>${text.preferences}</Popover.Title>
          <Popover.CloseTrigger aria-label="${text.close}" />
        </Popover.Header>
        <Popover.Body>
          <Switch.Root checked={email()} onCheckedChange={({ checked }) => setEmail(checked)}>
            <Switch.Control />
            <Switch.Label>${text.email}</Switch.Label>
          </Switch.Root>
        </Popover.Body>
      </Popover.Content>
    </Popover.Root>
  );
}`;
    },
    preview: PopoverPreview,
  },
  Sheet: {
    summary: componentSummaries.Sheet,
    usage: {
      "pt-BR":
        "Escolha a borda com `side` e mantenha `Title` para nomear o painel. Use `Body` para conteúdo rolável e `Footer` para ações que devem ficar visíveis.",
      en: "Choose an edge with `side` and include a `Title` to name the panel. Use `Body` for scrollable content and `Footer` for actions that should stay visible.",
    },
    rows: [
      ["Root.defaultOpen", "boolean", "false"],
      ["Root.modal", "boolean", "true"],
      ["Content.side", "left | right | top | bottom", "right"],
      ["Content.size", "sm | md | lg", "md"],
      ["Content.mount", "HTMLElement", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Sheet } from "@egcs/newui/overlays";
import { Button } from "@egcs/newui/actions";
import { Text } from "@egcs/newui/content";

<Sheet.Root>
  <Sheet.Trigger asChild={(props) => <Button {...props()}>${text.openActivity}</Button>} />
  <Sheet.Content side="right" size="sm">
    <Sheet.Header>
      <Sheet.Title>${text.activity}</Sheet.Title>
      <Sheet.Description>${text.activityDescription}</Sheet.Description>
      <Sheet.CloseTrigger aria-label="${text.close}" />
    </Sheet.Header>
    <Sheet.Body><Text>${text.activityBody}</Text></Sheet.Body>
  </Sheet.Content>
</Sheet.Root>`;
    },
    preview: SheetPreview,
  },
  Tooltip: {
    summary: componentSummaries.Tooltip,
    usage: {
      "pt-BR":
        "Passe o ponteiro ou foque o botão com Tab para ver a descrição. Dê um `aria-label` próprio ao botão de ícone e reserve o Tooltip para texto complementar.",
      en: "Hover or tab to the button to see its description. Give an icon button its own `aria-label` and use Tooltip for supplementary text.",
    },
    rows: [
      ["Root.openDelay", "number (ms)", "400"],
      ["Root.closeDelay", "number (ms)", "150"],
      ["Root.positioning.placement", "placement", "top"],
      ["Root.interactive", "boolean", "true"],
      ["Content.showArrow", "boolean", "true"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal } from "solid-js";
import { Download } from "lucide-solid";
import { Button } from "@egcs/newui/actions";
import { Tooltip } from "@egcs/newui/overlays";

export function ExportHelp() {
  const [ready, setReady] = createSignal(false);

  return (
    <>
      <Tooltip.Root>
        <Tooltip.Trigger asChild={(props) => (
          <Button
            {...props()}
            iconOnly
            variant="outline"
            aria-label="${text.download}"
            startIcon={<Download />}
            onClick={() => setReady(true)}
          />
        )} />
        <Tooltip.Content>${text.downloadHint}</Tooltip.Content>
      </Tooltip.Root>
      <p role="status">{ready() ? "${text.downloadReady}" : ""}</p>
    </>
  );
}`;
    },
    preview: TooltipPreview,
  },
} satisfies Record<string, ComponentDocumentation>;
