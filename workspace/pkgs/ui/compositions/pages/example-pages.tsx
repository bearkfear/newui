import { createSignal, Match, onCleanup, Switch } from "solid-js";
import { Badge, Breadcrumb, createToaster, Sidebar, Toaster } from "../../index";
import { AnalyticsPage } from "./analytics-page";
import { HelpPage } from "./help-page";
import { OrdersPage } from "./orders-page";
import { PageNavigation, pageLinks } from "./page-navigation";
import type { Notify, PageId } from "./page-parts";
import { ProjectPage } from "./project-page";
import { StatusPage } from "./status-page";
import "./pages.css";

export function ExamplePages(props: { initialPage: PageId }) {
  const [page, setPage] = createSignal(props.initialPage);
  let main: HTMLElement | undefined;
  const navigate = (next: PageId) => {
    setPage(next);
    main?.scrollTo({ top: 0 });
  };
  const toaster = createToaster();
  const notify: Notify = (title, description) =>
    toaster.create({ title, description, type: "success" });
  onCleanup(() => toaster.dismiss());
  return (
    <Sidebar.Root class="example-app" defaultWidth={224} style={{ height: "100dvh" }}>
      <PageNavigation current={page()} onNavigate={navigate} />
      <Sidebar.Main ref={main}>
        <PageTopbar page={page()} onNavigate={navigate} />
        <div class="example-stage" data-page={page()}>
          <Switch>
            <Match when={page() === "analytics"}>
              <AnalyticsPage notify={notify} />
            </Match>
            <Match when={page() === "orders"}>
              <OrdersPage notify={notify} />
            </Match>
            <Match when={page() === "project"}>
              <ProjectPage notify={notify} />
            </Match>
            <Match when={page() === "status"}>
              <StatusPage />
            </Match>
            <Match when={page() === "help"}>
              <HelpPage onStatus={() => navigate("status")} />
            </Match>
          </Switch>
        </div>
        <Toaster toaster={toaster} />
      </Sidebar.Main>
    </Sidebar.Root>
  );
}

function PageTopbar(props: { page: PageId; onNavigate: (page: PageId) => void }) {
  return (
    <div class="example-topbar">
      <div class="example-actions">
        <Sidebar.Toggle />
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link
                href="#analytics"
                onClick={(event) => {
                  event.preventDefault();
                  props.onNavigate("analytics");
                }}
              >
                Studio
              </Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Breadcrumb.Page>
                {pageLinks.find((link) => link.id === props.page)?.label}
              </Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </div>
      <Badge tone="primary" size="sm">
        Pro workspace
      </Badge>
    </div>
  );
}
