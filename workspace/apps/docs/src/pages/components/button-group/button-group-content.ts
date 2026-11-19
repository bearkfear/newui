import { buttonCopy, buttonSizes, buttonTones, buttonVariants } from "../button/button-content";

export const buttonGroupCopy = {
  "pt-BR": {
    ...buttonCopy["pt-BR"],
    description:
      "Organize ações relacionadas e compartilhe tamanho, tom, variante e estado entre os botões.",
    usageDescription:
      "Dê um nome ao grupo com `aria-label` ou `aria-labelledby`. Cada botão continua acessível com Tab e pode definir seu próprio `size`, `variant` ou `tone`.",
    document: "Ações do documento",
    duplicate: "Duplicar",
    delete: "Excluir",
    save: "Salvar",
    layout: "Disposição",
    layoutDescription:
      "Use `attached` para unir os botões. O grupo unido fica na mesma linha, então prefira rótulos curtos. Sem `attached`, um grupo horizontal quebra a linha quando necessário.",
    vertical: "Orientação vertical",
    verticalDescription:
      'Use `orientation="vertical"` para empilhar as ações. `align` posiciona o grupo no eixo principal. Com `fullWidth`, o grupo preenche o espaço disponível e distribui a largura entre os botões filhos diretos.',
    edit: "Editar",
    archive: "Arquivar",
    stateDescription:
      "Defina `disabled` no grupo para bloquear todos os botões, inclusive os que têm propriedades próprias. Use o controle abaixo para experimentar.",
    disableGroup: "Desabilitar grupo",
    apiDescription:
      "ButtonGroup aceita atributos nativos de div. Use botões como filhos diretos para unir bordas ou distribuir larguras. Cada botão mantém sua própria ação.",
  },
  en: {
    ...buttonCopy.en,
    description:
      "Organize related actions and share size, tone, variant, and state across buttons.",
    usageDescription:
      "Name the group with `aria-label` or `aria-labelledby`. Each button remains reachable with Tab and can set its own `size`, `variant`, or `tone`.",
    document: "Document actions",
    duplicate: "Duplicate",
    delete: "Delete",
    save: "Save",
    layout: "Layout",
    layoutDescription:
      "Use `attached` to join buttons. An attached horizontal group stays on one line, so keep labels short. A spaced horizontal group wraps when needed.",
    vertical: "Vertical orientation",
    verticalDescription:
      'Use `orientation="vertical"` to stack actions. `align` positions the group along its main axis. With `fullWidth`, the group fills the available space and distributes width across its direct buttons.',
    edit: "Edit",
    archive: "Archive",
    stateDescription:
      "Set `disabled` on the group to disable every button, including those with their own props. Try the control below.",
    disableGroup: "Disable group",
    apiDescription:
      "ButtonGroup accepts native div attributes. Use buttons as direct children to join edges or distribute widths. Each button retains its own action.",
  },
};

export type ButtonGroupCopy = (typeof buttonGroupCopy)[keyof typeof buttonGroupCopy];

export const buttonGroupProps = [
  ["orientation", "horizontal, vertical", "horizontal"],
  ["align", "start, center, end", "start"],
  ["attached", "boolean", "false"],
  ["fullWidth", "boolean", "false"],
  ["variant", buttonVariants.join(", "), "solid"],
  ["tone", buttonTones.join(", "), "primary"],
  ["size", buttonSizes.join(", "), "md"],
  ["disabled", "boolean", "false"],
  ["aria-label / aria-labelledby", "string", "—"],
] as const;
