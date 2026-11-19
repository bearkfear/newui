import type * as NewUI from "@egcs/newui";
import type * as Charts from "@egcs/newui/charts";
import type { Locales } from "../../i18n/i18n-types";
import { getLocalizedPath } from "../../lib/localized-path";

type ComponentName = keyof typeof NewUI | keyof typeof Charts;

export const componentGroups = [
  {
    id: "actions",
    label: { "pt-BR": "Ações", en: "Actions" },
    components: ["Button", "ButtonGroup", "ContextMenu", "DropdownMenu", "Menubar"],
  },
  {
    id: "forms",
    label: { "pt-BR": "Formulários", en: "Forms" },
    components: [
      "Checkbox",
      "CheckboxGroup",
      "ColorPicker",
      "CurrencyInput",
      "DateInput",
      "DatePicker",
      "DateRangePicker",
      "Field",
      "FileInput",
      "Input",
      "InputGroup",
      "LocaleProvider",
      "MaskedInput",
      "NumberInput",
      "RadioGroup",
      "RichTextEditor",
      "Select",
      "Switch",
      "Textarea",
    ],
  },
  {
    id: "content",
    label: { "pt-BR": "Conteúdo", en: "Content" },
    components: [
      "Accordion",
      "Avatar",
      "Badge",
      "BadgeGroup",
      "Card",
      "CodeHighlight",
      "Collapsible",
      "Counter",
      "CounterAnchor",
      "Heading",
      "Prose",
      "Separator",
      "Text",
      "Timeline",
    ],
  },
  {
    id: "navigation",
    label: { "pt-BR": "Navegação", en: "Navigation" },
    components: [
      "Breadcrumb",
      "Navbar",
      "NavigationMenu",
      "Pagination",
      "Sidebar",
      "Steps",
      "Tabs",
      "VerticalMenu",
    ],
  },
  {
    id: "layout",
    label: { "pt-BR": "Layout", en: "Layout" },
    components: ["Container", "Resizable", "Section"],
  },
  {
    id: "feedback",
    label: { "pt-BR": "Feedback", en: "Feedback" },
    components: [
      "Callout",
      "Empty",
      "Loading",
      "PageLoading",
      "Progress",
      "ProgressCircle",
      "Toast",
      "Toaster",
      "TopProgress",
    ],
  },
  {
    id: "overlays",
    label: { "pt-BR": "Sobreposições", en: "Overlays" },
    components: ["AlertDialog", "Dialog", "HoverCard", "Popover", "Sheet", "Tooltip"],
  },
  {
    id: "data",
    label: { "pt-BR": "Dados", en: "Data" },
    components: ["BadgeDelta", "BarList", "DeltaBar", "Table"],
  },
  {
    id: "charts",
    label: { "pt-BR": "Gráficos", en: "Charts" },
    components: ["BarChart", "DonutChart", "LineChart"],
  },
  {
    id: "compositions",
    label: { "pt-BR": "Composições", en: "Compositions" },
    components: ["ActionBar", "Footer", "Hero", "MediaObject", "Panel"],
  },
] as const satisfies readonly {
  id: string;
  label: { "pt-BR": string; en: string };
  components: readonly ComponentName[];
}[];

export function componentAnchor(name: ComponentName) {
  return name.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export const documentedComponents = [
  "Button",
  "ButtonGroup",
] as const satisfies readonly ComponentName[];
export type DocumentedComponent = (typeof documentedComponents)[number];

export function hasComponentPage(name: ComponentName): name is DocumentedComponent {
  return documentedComponents.some((component) => component === name);
}

export function componentHref(name: ComponentName, locale: Locales, inCatalog = false) {
  if (hasComponentPage(name))
    return getLocalizedPath(`/components/${componentAnchor(name)}/`, locale);
  const anchor = `#${componentAnchor(name)}`;
  return inCatalog ? anchor : `${getLocalizedPath("/components/", locale)}${anchor}`;
}
