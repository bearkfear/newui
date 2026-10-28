import { Breadcrumb } from "../breadcrumb";

export function BreadcrumbExample(props: { currentLabel?: string }) {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="?path=/story/getting-started-introduction--overview" target="_top">
            Workspace
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="?path=/story/navigation-overview--workspace" target="_top">
            Components
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Page>{props.currentLabel ?? "Breadcrumb"}</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  );
}
