import {
  Breadcrumb,
  Heading,
  Navbar,
  NavigationMenu,
  Pagination,
  Sidebar,
  Steps,
  Tabs,
  Text,
  VerticalMenu,
} from "@egcs/newui";
import { LayoutGrid } from "lucide-solid";
import { createSignal, For } from "solid-js";
import type { Locales } from "../../../i18n/i18n-types";
import { getLocalizedPath } from "../../../lib/localized-path";

export const labels = {
  "pt-BR": {
    home: "Início",
    catalog: "Componentes",
    trail: "Caminho até Breadcrumb",
    primary: "Navegação da demonstração",
    product: "Navegação do produto",
    menu: "Menu",
    resources: "Recursos",
    start: "Começar",
    install: "Instalação",
    pages: "Páginas de pedidos",
    page: "Página",
    pageOf: "de",
    previous: "Anterior",
    next: "Próxima",
    order: "Pedido",
    workspace: "Área de trabalho",
    navigation: "Navegação da área de trabalho",
    panel: "Navegação lateral",
    toggle: "Alternar navegação lateral",
    dashboard: "Visão geral",
    dashboardBody: "Acompanhe a atividade recente da sua equipe.",
    setup: "Configuração do projeto",
    details: "Detalhes",
    detailsBody: "Defina os detalhes do projeto antes de continuar.",
    review: "Revisão",
    reviewBody: "Confira as informações do projeto.",
    completed: "Configuração concluída.",
    back: "Voltar",
    finish: "Avançar",
    sections: "Seções do relatório",
    overview: "Visão geral",
    overviewBody: "Receita de R$ 12.400 no trimestre.",
    activity: "Atividade",
    activityBody: "Ana atualizou o relatório há poucos minutos.",
  },
  en: {
    home: "Home",
    catalog: "Components",
    trail: "Path to Breadcrumb",
    primary: "Demo navigation",
    product: "Product navigation",
    menu: "Menu",
    resources: "Resources",
    start: "Get started",
    install: "Installation",
    pages: "Order pages",
    page: "Page",
    pageOf: "of",
    previous: "Previous",
    next: "Next",
    order: "Order",
    workspace: "Workspace",
    navigation: "Workspace navigation",
    panel: "Sidebar navigation",
    toggle: "Toggle sidebar",
    dashboard: "Overview",
    dashboardBody: "Keep track of your team’s recent activity.",
    setup: "Project setup",
    details: "Details",
    detailsBody: "Set the project details before continuing.",
    review: "Review",
    reviewBody: "Check the project information.",
    completed: "Setup complete.",
    back: "Back",
    finish: "Next",
    sections: "Report sections",
    overview: "Overview",
    overviewBody: "Quarterly revenue of $12,400.",
    activity: "Activity",
    activityBody: "Ana updated the report a few minutes ago.",
  },
} as const;

export function pages(locale: Locales) {
  return {
    home: getLocalizedPath("/", locale),
    catalog: getLocalizedPath("/components/", locale),
    start: getLocalizedPath("/getting-started/", locale),
    install: getLocalizedPath("/getting-started/installation/", locale),
  };
}

export function BreadcrumbPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const href = () => pages(props.locale);

  return (
    <Breadcrumb.Root aria-label={text().trail}>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href={href().home}>{text().home}</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href={href().catalog}>{text().catalog}</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}

export function NavbarPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const href = () => pages(props.locale);

  return (
    <div class="w-full min-w-0 rounded-lg border border-border">
      <Navbar.Root aria-label={text().primary} width="full" tone="subtle">
        <Navbar.Brand href={href().home}>Studio</Navbar.Brand>
        <Navbar.Toggle aria-label={text().menu} />
        <Navbar.Content>
          <Navbar.List>
            <Navbar.Item value="components">
              <Navbar.Link href={href().catalog}>{text().catalog}</Navbar.Link>
            </Navbar.Item>
            <Navbar.Item value="start">
              <Navbar.Link href={href().start}>{text().start}</Navbar.Link>
            </Navbar.Item>
          </Navbar.List>
        </Navbar.Content>
      </Navbar.Root>
    </div>
  );
}

export function NavigationMenuPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const href = () => pages(props.locale);

  return (
    <div class="min-h-40 w-full">
      <NavigationMenu.Root aria-label={text().product}>
        <NavigationMenu.List>
          <NavigationMenu.Item value="home">
            <NavigationMenu.Link href={href().home}>{text().home}</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item value="resources">
            <NavigationMenu.Trigger>{text().resources}</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <NavigationMenu.Link value="start" href={href().start}>
                {text().start}
              </NavigationMenu.Link>
              <NavigationMenu.Link value="installation" href={href().install}>
                {text().install}
              </NavigationMenu.Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}

export const orderCount = 36;
export const orderPageSize = 6;
const orderNumbers = Array.from({ length: orderCount }, (_, index) => index + 1);

export function PaginationPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [page, setPage] = createSignal(1);
  const orders = () => orderNumbers.slice((page() - 1) * orderPageSize, page() * orderPageSize);

  return (
    <div class="grid w-full justify-items-center gap-4">
      <ul class="m-0 grid w-full list-none grid-cols-2 gap-2 p-0 sm:grid-cols-3">
        <For each={orders()}>
          {(order) => (
            <li class="rounded-md border border-border bg-background px-3 py-2 text-center text-sm">
              {text().order} {order}
            </li>
          )}
        </For>
      </ul>
      <Pagination.Root
        aria-label={text().pages}
        count={orderCount}
        page={page()}
        pageSize={orderPageSize}
        size="sm"
        onPageChange={({ page }) => setPage(page)}
        translations={{
          itemLabel: ({ page, totalPages }) =>
            `${text().page} ${page} ${text().pageOf} ${totalPages}`,
        }}
      >
        <Pagination.PrevTrigger aria-label={text().previous}>
          {text().previous}
        </Pagination.PrevTrigger>
        <Pagination.Items />
        <Pagination.NextTrigger aria-label={text().next}>{text().next}</Pagination.NextTrigger>
      </Pagination.Root>
    </div>
  );
}

export function SidebarPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const href = () => pages(props.locale);

  return (
    <Sidebar.Root
      resizable
      defaultWidth={180}
      minWidth={144}
      class="h-56 w-full min-w-0 rounded-lg border border-border"
    >
      <Sidebar.Panel aria-label={text().panel}>
        <Sidebar.Header>
          <Sidebar.Label>{text().workspace}</Sidebar.Label>
        </Sidebar.Header>
        <Sidebar.Body>
          <VerticalMenu.Root aria-label={text().navigation}>
            <VerticalMenu.List>
              <VerticalMenu.Item>
                <VerticalMenu.Link href={href().catalog}>
                  <VerticalMenu.Icon>
                    <LayoutGrid aria-hidden="true" />
                  </VerticalMenu.Icon>
                  <Sidebar.Label>{text().catalog}</Sidebar.Label>
                </VerticalMenu.Link>
              </VerticalMenu.Item>
            </VerticalMenu.List>
          </VerticalMenu.Root>
        </Sidebar.Body>
      </Sidebar.Panel>
      <Sidebar.Main role="region" aria-label={text().dashboard}>
        <div class="grid justify-items-start gap-2 p-3">
          <Sidebar.Toggle aria-label={text().toggle} />
          <Heading as="h3" size="6" class="m-0">
            {text().dashboard}
          </Heading>
          <Text size="6" tone="muted" class="m-0">
            {text().dashboardBody}
          </Text>
        </div>
      </Sidebar.Main>
    </Sidebar.Root>
  );
}

export function StepsPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const [step, setStep] = createSignal(0);

  return (
    <Steps.Root count={2} step={step()} onStepChange={({ step }) => setStep(step)} class="w-full">
      <Steps.List aria-label={text().setup}>
        <Steps.Item index={0}>
          <Steps.Trigger>
            <Steps.Indicator />
            <Steps.Title>{text().details}</Steps.Title>
          </Steps.Trigger>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1}>
          <Steps.Trigger>
            <Steps.Indicator />
            <Steps.Title>{text().review}</Steps.Title>
          </Steps.Trigger>
        </Steps.Item>
      </Steps.List>
      <Steps.Content index={0}>{text().detailsBody}</Steps.Content>
      <Steps.Content index={1}>{text().reviewBody}</Steps.Content>
      <Steps.CompletedContent>{text().completed}</Steps.CompletedContent>
      <Steps.Actions>
        <Steps.PrevTrigger>{text().back}</Steps.PrevTrigger>
        <Steps.NextTrigger>{text().finish}</Steps.NextTrigger>
      </Steps.Actions>
    </Steps.Root>
  );
}

export function TabsPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];

  return (
    <Tabs.Root defaultValue="overview" variant="segmented" class="w-full max-w-sm">
      <Tabs.List aria-label={text().sections}>
        <Tabs.Trigger value="overview">{text().overview}</Tabs.Trigger>
        <Tabs.Trigger value="activity">{text().activity}</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">{text().overviewBody}</Tabs.Content>
      <Tabs.Content value="activity">{text().activityBody}</Tabs.Content>
    </Tabs.Root>
  );
}

export function VerticalMenuPreview(props: { locale: Locales }) {
  const text = () => labels[props.locale];
  const href = () => pages(props.locale);

  return (
    <VerticalMenu.Root variant="surface" aria-label={text().navigation} class="max-w-xs">
      <VerticalMenu.Group>
        <VerticalMenu.Label as="h3">{text().workspace}</VerticalMenu.Label>
        <VerticalMenu.List>
          <VerticalMenu.Item>
            <VerticalMenu.Link href={href().catalog}>{text().catalog}</VerticalMenu.Link>
          </VerticalMenu.Item>
          <VerticalMenu.Branch defaultOpen>
            <VerticalMenu.BranchTrigger>{text().resources}</VerticalMenu.BranchTrigger>
            <VerticalMenu.BranchContent>
              <VerticalMenu.SubList>
                <VerticalMenu.Item>
                  <VerticalMenu.Link href={href().start}>{text().start}</VerticalMenu.Link>
                </VerticalMenu.Item>
                <VerticalMenu.Item>
                  <VerticalMenu.Link href={href().install}>{text().install}</VerticalMenu.Link>
                </VerticalMenu.Item>
              </VerticalMenu.SubList>
            </VerticalMenu.BranchContent>
          </VerticalMenu.Branch>
        </VerticalMenu.List>
      </VerticalMenu.Group>
    </VerticalMenu.Root>
  );
}
