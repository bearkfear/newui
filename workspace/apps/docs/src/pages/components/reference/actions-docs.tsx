import { ContextMenu, DropdownMenu, Menubar, Text } from "@egcs/newui";
import { createSignal } from "solid-js";
import { componentSummaries } from "../../../i18n/component-summaries";
import type { Locales } from "../../../i18n/i18n-types";
import type { ComponentDocumentation } from "./reference-types";

const labels = {
  "pt-BR": {
    actions: "Ações do relatório",
    report: "Clique com o botão direito ou mantenha pressionado",
    edit: "Editar",
    duplicate: "Duplicar",
    archive: "Arquivar",
    delete: "Excluir",
    fileMenu: "Arquivo",
    editMenu: "Editar",
    commands: "Comandos do relatório",
    newReport: "Novo relatório",
    print: "Imprimir",
    undo: "Desfazer",
    result: "Ação selecionada",
  },
  en: {
    actions: "Report actions",
    report: "Right-click or press and hold",
    edit: "Edit",
    duplicate: "Duplicate",
    archive: "Archive",
    delete: "Delete",
    fileMenu: "File",
    editMenu: "Edit",
    commands: "Report commands",
    newReport: "New report",
    print: "Print",
    undo: "Undo",
    result: "Selected action",
  },
} as const;

function ContextMenuPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [action, setAction] = createSignal("");
  const entries = () => (
    <>
      <ContextMenu.Item value="edit" onSelect={() => setAction(text().edit)}>
        {text().edit}
      </ContextMenu.Item>
      <ContextMenu.Item value="duplicate" onSelect={() => setAction(text().duplicate)}>
        {text().duplicate}
      </ContextMenu.Item>
    </>
  );

  return (
    <div class="grid w-full max-w-sm justify-items-start gap-3">
      <ContextMenu.Root>
        <ContextMenu.Trigger
          asChild={(triggerProps) => (
            <div
              {...triggerProps()}
              class="w-full rounded-lg border border-dashed border-border px-4 py-6 text-center text-sm"
            >
              {text().report}
            </div>
          )}
        />
        <ContextMenu.Content>{entries()}</ContextMenu.Content>
      </ContextMenu.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{text().actions}</DropdownMenu.Trigger>
        <DropdownMenu.Content>{entries()}</DropdownMenu.Content>
      </DropdownMenu.Root>
      <Text role="status" size="7" tone="muted" class="m-0 min-h-5">
        {action() && `${text().result} · ${action()}`}
      </Text>
    </div>
  );
}

function DropdownMenuPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [action, setAction] = createSignal("");

  return (
    <div class="grid justify-items-center gap-3">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>{text().actions}</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item value="duplicate" onSelect={() => setAction(text().duplicate)}>
            {text().duplicate}
          </DropdownMenu.Item>
          <DropdownMenu.Item value="archive" disabled>
            {text().archive}
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="delete" destructive onSelect={() => setAction(text().delete)}>
            {text().delete}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Text role="status" size="7" tone="muted" class="m-0 min-h-5">
        {action() && `${text().result} · ${action()}`}
      </Text>
    </div>
  );
}

function MenubarPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [action, setAction] = createSignal("");

  return (
    <div class="grid justify-items-center gap-3">
      <Menubar.Root aria-label={text().commands}>
        <Menubar.Menu value="file">
          <Menubar.Trigger>{text().fileMenu}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="new" onSelect={() => setAction(text().newReport)}>
              {text().newReport}
            </Menubar.Item>
            <Menubar.Item value="print" onSelect={() => setAction(text().print)}>
              {text().print}
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>{text().editMenu}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="undo" onSelect={() => setAction(text().undo)}>
              {text().undo}
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
      <Text role="status" size="7" tone="muted" class="m-0 min-h-5">
        {action() && `${text().result} · ${action()}`}
      </Text>
    </div>
  );
}

function contextMenuCode(text: (typeof labels)[Locales]) {
  return `import { ContextMenu, DropdownMenu } from "@egcs/newui/actions";
import { createSignal } from "solid-js";

function ReportItems(props: { onAction: (label: string) => void }) {
  return (
    <>
      <ContextMenu.Item value="edit" onSelect={() => props.onAction("${text.edit}")}>
        ${text.edit}
      </ContextMenu.Item>
      <ContextMenu.Item value="duplicate" onSelect={() => props.onAction("${text.duplicate}")}>
        ${text.duplicate}
      </ContextMenu.Item>
    </>
  );
}

export function ReportActions() {
  const [action, setAction] = createSignal("");

  return (
    <>
      <ContextMenu.Root>
        <ContextMenu.Trigger
          asChild={(props) => <div {...props()}>${text.report}</div>}
        />
        <ContextMenu.Content>
          <ReportItems onAction={setAction} />
        </ContextMenu.Content>
      </ContextMenu.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>${text.actions}</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <ReportItems onAction={setAction} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <p role="status">{action() && "${text.result} · " + action()}</p>
    </>
  );
}`;
}

export const docs = {
  ContextMenu: {
    summary: componentSummaries.ContextMenu,
    usage: {
      "pt-BR":
        "Associe o menu ao conteúdo relevante com a função `asChild` e encaminhe as props recebidas. Ofereça as mesmas ações num DropdownMenu separado para quem navega com teclado ou prefere clicar.",
      en: "Attach the menu to the relevant content with the `asChild` render function and forward its props. Offer the same actions in a separate DropdownMenu for keyboard and click access.",
    },
    rows: [
      ["Root.defaultOpen", "boolean", "false"],
      ["Root.open / onOpenChange", "boolean / ({ open }) => void", "—"],
      ["Trigger.asChild", "(props) => JSX.Element", "—"],
      ["Item.value", "string", "—"],
      ["Item.onSelect", "() => void", "—"],
    ],
    code: (locale) => contextMenuCode(labels[locale]),
    preview: ContextMenuPreview,
  },
  DropdownMenu: {
    summary: componentSummaries.DropdownMenu,
    usage: {
      "pt-BR":
        "Dê um `value` único a cada item e execute a ação em `onSelect`. Use `disabled` para ações indisponíveis e `destructive` para indicar ações destrutivas.",
      en: "Give each item a unique `value` and handle its action in `onSelect`. Use `disabled` for unavailable items and `destructive` to signal destructive actions.",
    },
    rows: [
      ["Root.defaultOpen", "boolean", "false"],
      ["Item.value", "string", "—"],
      ["Item.disabled", "boolean", "false"],
      ["Item.destructive", "boolean", "false"],
      ["Item.closeOnSelect", "boolean", "true"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { DropdownMenu } from "@egcs/newui/actions";
import { createSignal } from "solid-js";

export function ReportActions() {
  const [action, setAction] = createSignal("");

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>${text.actions}</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item value="duplicate" onSelect={() => setAction("${text.duplicate}")}>
            ${text.duplicate}
          </DropdownMenu.Item>
          <DropdownMenu.Item value="archive" disabled>${text.archive}</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item value="delete" destructive onSelect={() => setAction("${text.delete}")}>
            ${text.delete}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <p role="status">{action() && "${text.result} · " + action()}</p>
    </>
  );
}`;
    },
    preview: DropdownMenuPreview,
  },
  Menubar: {
    summary: componentSummaries.Menubar,
    usage: {
      "pt-BR":
        "Nomeie a barra e mantenha um `value` único por menu e por item. Use Tab para chegar à barra, as setas laterais para trocar de menu e Escape para fechar.",
      en: "Name the bar and use a unique `value` for each menu and item. Tab into the bar, use the horizontal arrows to switch menus, and press Escape to dismiss.",
    },
    rows: [
      ["Root.aria-label", "string", "—"],
      ["Menu.value", "string", "—"],
      ["Root.open / onOpenChange", "boolean / ({ open }) => void", "—"],
      ["Root.triggerValue / onTriggerValueChange", "string | null / ({ value }) => void", "—"],
      ["Item.onSelect", "() => void", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Menubar } from "@egcs/newui/actions";
import { createSignal } from "solid-js";

export function ReportCommands() {
  const [action, setAction] = createSignal("");

  return (
    <>
      <Menubar.Root aria-label="${text.commands}">
        <Menubar.Menu value="file">
          <Menubar.Trigger>${text.fileMenu}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="new" onSelect={() => setAction("${text.newReport}")}>
              ${text.newReport}
            </Menubar.Item>
            <Menubar.Item value="print" onSelect={() => setAction("${text.print}")}>
              ${text.print}
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu value="edit">
          <Menubar.Trigger>${text.editMenu}</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item value="undo" onSelect={() => setAction("${text.undo}")}>
              ${text.undo}
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
      <p role="status">{action() && "${text.result} · " + action()}</p>
    </>
  );
}`;
    },
    preview: MenubarPreview,
  },
} satisfies Record<string, ComponentDocumentation>;
