import { componentSummaries } from "../../../i18n/component-summaries";
import {
  BreadcrumbPreview,
  labels,
  NavbarPreview,
  NavigationMenuPreview,
  orderCount,
  orderPageSize,
  PaginationPreview,
  pages,
  SidebarPreview,
  StepsPreview,
  TabsPreview,
  VerticalMenuPreview,
} from "./navigation-previews";
import type { ComponentDocumentation } from "./reference-types";

export const docs = {
  Breadcrumb: {
    summary: componentSummaries.Breadcrumb,
    usage: {
      "pt-BR":
        "Coloque os links dos níveis anteriores em ordem e termine com um único `Page`. Ele marca o item atual e fica fora da ordem de foco.",
      en: "List ancestor links in order and finish with a single `Page`. It marks the current item and stays out of the tab order.",
    },
    rows: [
      ["Root.aria-label", "string", "Breadcrumb"],
      ["Link.href", "string", "—"],
      ["Page.children", "JSX.Element", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      const href = pages(locale);
      return `import { Breadcrumb } from "@egcs/newui/navigation";

<Breadcrumb.Root aria-label="${text.trail}">
  <Breadcrumb.List>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="${href.home}">${text.home}</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Link href="${href.catalog}">${text.catalog}</Breadcrumb.Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
    </Breadcrumb.Item>
  </Breadcrumb.List>
</Breadcrumb.Root>`;
    },
    preview: BreadcrumbPreview,
  },
  Navbar: {
    summary: componentSummaries.Navbar,
    usage: {
      "pt-BR":
        "Use `Brand`, `Toggle` e `Content` na mesma raiz. O conteúdo fica recolhível abaixo de 768 px. Cada `Item` precisa de um `value` único.",
      en: "Use `Brand`, `Toggle`, and `Content` in the same root. Content collapses below 768 px. Each `Item` needs a unique `value`.",
    },
    rows: [
      ["Root.tone", "default | subtle", "default"],
      ["Root.width", "sm | md | lg | full", "lg"],
      ["Root.open / onOpenChange", "boolean / ({ open }) => void", "—"],
      ["Item.value", "string", "—"],
      ["Link.current", "boolean", "false"],
    ],
    code: (locale) => {
      const text = labels[locale];
      const href = pages(locale);
      return `import { Navbar } from "@egcs/newui/navigation";

<Navbar.Root aria-label="${text.primary}" width="full" tone="subtle">
  <Navbar.Brand href="${href.home}">Studio</Navbar.Brand>
  <Navbar.Toggle aria-label="${text.menu}" />
  <Navbar.Content>
    <Navbar.List>
      <Navbar.Item value="components">
        <Navbar.Link href="${href.catalog}">${text.catalog}</Navbar.Link>
      </Navbar.Item>
      <Navbar.Item value="start">
        <Navbar.Link href="${href.start}">${text.start}</Navbar.Link>
      </Navbar.Item>
    </Navbar.List>
  </Navbar.Content>
</Navbar.Root>`;
    },
    preview: NavbarPreview,
  },
  NavigationMenu: {
    summary: componentSummaries.NavigationMenu,
    usage: {
      "pt-BR":
        "Coloque `Trigger` e `Content` dentro de um `Item` com valor único. Use `Link` para destinos reais e `current` para a página ativa.",
      en: "Place `Trigger` and `Content` inside an `Item` with a unique value. Use `Link` for real destinations and `current` for the active page.",
    },
    rows: [
      ["Root.defaultValue", "string", "—"],
      ["Root.disableHoverTrigger", "boolean", "true"],
      ["Content.layout", "simple | wide", "simple"],
      ["Content.align", "start | end", "start"],
      ["Link.current", "boolean", "false"],
    ],
    code: (locale) => {
      const text = labels[locale];
      const href = pages(locale);
      return `import { NavigationMenu as Menu } from "@egcs/newui/navigation";

<Menu.Root aria-label="${text.product}">
  <Menu.List>
    <Menu.Item value="home">
      <Menu.Link href="${href.home}">${text.home}</Menu.Link>
    </Menu.Item>
    <Menu.Item value="resources">
      <Menu.Trigger>${text.resources}</Menu.Trigger>
      <Menu.Content>
        <Menu.Link value="start" href="${href.start}">${text.start}</Menu.Link>
        <Menu.Link value="installation" href="${href.install}">${text.install}</Menu.Link>
      </Menu.Content>
    </Menu.Item>
  </Menu.List>
</Menu.Root>`;
    },
    preview: NavigationMenuPreview,
  },
  Pagination: {
    summary: componentSummaries.Pagination,
    usage: {
      "pt-BR":
        "Passe o total de registros em `count` e use páginas que começam em 1. Controle `page` e `onPageChange` para carregar ou selecionar os registros correspondentes.",
      en: "Pass the total number of records as `count` and use one-based pages. Control `page` and `onPageChange` to fetch or select the matching records.",
    },
    rows: [
      ["Root.count", "number (records)", "0"],
      ["Root.defaultPage / page", "number", "1"],
      ["Root.defaultPageSize / pageSize", "positive number", "10"],
      ["Root.onPageChange", "({ page, pageSize }) => void", "—"],
      ["Root.size", "sm | md | lg", "md"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal, For } from "solid-js";
import { Pagination } from "@egcs/newui/navigation";

export function Orders() {
  const [page, setPage] = createSignal(1);
  const count = ${orderCount};
  const pageSize = ${orderPageSize};
  const orders = Array.from({ length: count }, (_, index) => index + 1);
  const visible = () => orders.slice((page() - 1) * pageSize, page() * pageSize);

  return (
    <>
      <ul><For each={visible()}>{(order) => <li>${text.order} {order}</li>}</For></ul>
      <Pagination.Root
        aria-label="${text.pages}"
        count={count}
        page={page()}
        pageSize={pageSize}
        size="sm"
        onPageChange={({ page }) => setPage(page)}
        translations={{
          itemLabel: ({ page, totalPages }) => \`${text.page} \${page} ${text.pageOf} \${totalPages}\`,
        }}
      >
        <Pagination.PrevTrigger aria-label="${text.previous}">${text.previous}</Pagination.PrevTrigger>
        <Pagination.Items />
        <Pagination.NextTrigger aria-label="${text.next}">${text.next}</Pagination.NextTrigger>
      </Pagination.Root>
    </>
  );
}`;
    },
    preview: PaginationPreview,
  },
  Sidebar: {
    summary: componentSummaries.Sidebar,
    usage: {
      "pt-BR":
        "Dê uma altura à raiz e coloque um `Panel` seguido de `Main`. No desktop, `resizable` habilita o redimensionamento. Em telas menores que 48 rem, use o botão para abrir o painel.",
      en: "Give the root a height and place one `Panel` followed by `Main`. On desktop, `resizable` enables resizing. Below 48 rem, use the toggle to open the panel.",
    },
    rows: [
      ["Root.resizable", "boolean", "false"],
      ["Root.defaultWidth / minWidth / maxWidth", "number (px)", "256 / 216 / 360"],
      ["Root.compactWidth", "number (px)", "64"],
      ["Root.collapsed / onCollapsedChange", "boolean / (collapsed) => void", "—"],
      ["Root.mobileOpen / onMobileOpenChange", "boolean / (open) => void", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      const href = pages(locale);
      return `import { Heading, Text } from "@egcs/newui/content";
import { Sidebar, VerticalMenu } from "@egcs/newui/navigation";
import { LayoutGrid } from "lucide-solid";

<Sidebar.Root resizable defaultWidth={180} minWidth={144} style={{ height: "14rem" }}>
  <Sidebar.Panel aria-label="${text.panel}">
    <Sidebar.Header><Sidebar.Label>${text.workspace}</Sidebar.Label></Sidebar.Header>
    <Sidebar.Body>
      <VerticalMenu.Root aria-label="${text.navigation}">
        <VerticalMenu.List>
          <VerticalMenu.Item>
            <VerticalMenu.Link href="${href.catalog}">
              <VerticalMenu.Icon><LayoutGrid aria-hidden="true" /></VerticalMenu.Icon>
              <Sidebar.Label>${text.catalog}</Sidebar.Label>
            </VerticalMenu.Link>
          </VerticalMenu.Item>
        </VerticalMenu.List>
      </VerticalMenu.Root>
    </Sidebar.Body>
  </Sidebar.Panel>
  <Sidebar.Main>
    <Sidebar.Toggle aria-label="${text.toggle}" />
    <Heading as="h2" size="6">${text.dashboard}</Heading>
    <Text>${text.dashboardBody}</Text>
  </Sidebar.Main>
</Sidebar.Root>`;
    },
    preview: SidebarPreview,
  },
  Steps: {
    summary: componentSummaries.Steps,
    usage: {
      "pt-BR":
        "Conte as etapas em `count` e use índices a partir de zero em `Item` e `Content`. Coloque a confirmação em `CompletedContent` e use `linear` quando a ordem for obrigatória.",
      en: "Set the number of steps with `count` and index `Item` and `Content` from zero. Put confirmation in `CompletedContent` and use `linear` when order is required.",
    },
    rows: [
      ["Root.count", "number (steps)", "—"],
      ["Root.defaultStep / step", "number", "0"],
      ["Root.orientation", "horizontal | vertical", "horizontal"],
      ["Root.linear", "boolean", "false"],
      ["Root.onStepChange", "({ step }) => void", "—"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { createSignal } from "solid-js";
import { Steps } from "@egcs/newui/navigation";

export function ProjectSetup() {
  const [step, setStep] = createSignal(0);

  return (
    <Steps.Root count={2} step={step()} onStepChange={({ step }) => setStep(step)}>
      <Steps.List aria-label="${text.setup}">
        <Steps.Item index={0}>
          <Steps.Trigger><Steps.Indicator /><Steps.Title>${text.details}</Steps.Title></Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1}>
          <Steps.Trigger><Steps.Indicator /><Steps.Title>${text.review}</Steps.Title></Steps.Trigger>
        </Steps.Item>
      </Steps.List>
      <Steps.Content index={0}>${text.detailsBody}</Steps.Content>
      <Steps.Content index={1}>${text.reviewBody}</Steps.Content>
      <Steps.CompletedContent>${text.completed}</Steps.CompletedContent>
      <Steps.Actions>
        <Steps.PrevTrigger>${text.back}</Steps.PrevTrigger>
        <Steps.NextTrigger>${text.finish}</Steps.NextTrigger>
      </Steps.Actions>
    </Steps.Root>
  );
}`;
    },
    preview: StepsPreview,
  },
  Tabs: {
    summary: componentSummaries.Tabs,
    usage: {
      "pt-BR":
        'Dê um nome à lista e use o mesmo `value` no gatilho e no painel. As setas movem o foco. Com `activationMode="manual"`, Enter ou Espaço abre o painel focado.',
      en: 'Name the list and give each trigger and panel a matching `value`. Arrow keys move focus. With `activationMode="manual"`, Enter or Space opens the focused panel.',
    },
    rows: [
      ["Root.variant", "underline | boxed | toggle | rounded | segmented", "underline"],
      ["Root.size", "sm | md | lg | xl", "md"],
      ["Root.defaultValue / value", "string", "—"],
      ["Root.activationMode", "automatic | manual", "automatic"],
      ["Trigger.disabled", "boolean", "false"],
    ],
    code: (locale) => {
      const text = labels[locale];
      return `import { Tabs } from "@egcs/newui/navigation";

<Tabs.Root defaultValue="overview" variant="segmented">
  <Tabs.List aria-label="${text.sections}">
    <Tabs.Trigger value="overview">${text.overview}</Tabs.Trigger>
    <Tabs.Trigger value="activity">${text.activity}</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">${text.overviewBody}</Tabs.Content>
  <Tabs.Content value="activity">${text.activityBody}</Tabs.Content>
</Tabs.Root>`;
    },
    preview: TabsPreview,
  },
  VerticalMenu: {
    summary: componentSummaries.VerticalMenu,
    usage: {
      "pt-BR":
        "Use `Item` para páginas e `Branch` para grupos expansíveis. Defina `current` conforme a rota ativa e mantenha destinos reais em `href`.",
      en: "Use `Item` for pages and `Branch` for expandable groups. Set `current` from the active route and keep real destinations in `href`.",
    },
    rows: [
      ["Root.variant", "plain | surface", "plain"],
      ["Root.density", "comfortable | compact", "comfortable"],
      ["Link.href", "string", "—"],
      ["Link.current", "boolean", "false"],
      ["Branch.defaultOpen", "boolean", "false"],
    ],
    code: (locale) => {
      const text = labels[locale];
      const href = pages(locale);
      return `import { VerticalMenu } from "@egcs/newui/navigation";

<VerticalMenu.Root variant="surface" aria-label="${text.navigation}">
  <VerticalMenu.Group>
    <VerticalMenu.Label as="h3">${text.workspace}</VerticalMenu.Label>
    <VerticalMenu.List>
      <VerticalMenu.Item>
        <VerticalMenu.Link href="${href.catalog}">${text.catalog}</VerticalMenu.Link>
      </VerticalMenu.Item>
      <VerticalMenu.Branch defaultOpen>
        <VerticalMenu.BranchTrigger>${text.resources}</VerticalMenu.BranchTrigger>
        <VerticalMenu.BranchContent>
          <VerticalMenu.SubList>
            <VerticalMenu.Item><VerticalMenu.Link href="${href.start}">${text.start}</VerticalMenu.Link></VerticalMenu.Item>
            <VerticalMenu.Item><VerticalMenu.Link href="${href.install}">${text.install}</VerticalMenu.Link></VerticalMenu.Item>
          </VerticalMenu.SubList>
        </VerticalMenu.BranchContent>
      </VerticalMenu.Branch>
    </VerticalMenu.List>
  </VerticalMenu.Group>
</VerticalMenu.Root>`;
    },
    preview: VerticalMenuPreview,
  },
} satisfies Record<string, ComponentDocumentation>;
