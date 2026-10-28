import { createSignal, For, Show } from "solid-js";
import { Button } from "../../../actions/button/button";
import { Heading } from "../../../content/heading/heading";
import { Text } from "../../../content/text/text";
import { Breadcrumb } from "../breadcrumb";

const destinations = [
  { slug: "workspace", label: "Workspace" },
  { slug: "projects", label: "Projects" },
  { slug: "design-system", label: "Design system" },
] as const;

export function BreadcrumbNavigation() {
  const [current, setCurrent] = createSignal(2);
  let heading: HTMLHeadingElement | undefined;
  const destination = () => destinations[current()] ?? destinations[0];
  return (
    <div style={{ display: "grid", gap: "1.5rem", "max-width": "40rem" }}>
      <Breadcrumb.Root aria-label="Project hierarchy">
        <Breadcrumb.List>
          <For each={destinations.slice(0, current() + 1)}>
            {(item, index) => (
              <Breadcrumb.Item>
                <Show
                  when={index() < current()}
                  fallback={<Breadcrumb.Page>{item.label}</Breadcrumb.Page>}
                >
                  <Breadcrumb.Link
                    href={`#${item.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      setCurrent(index());
                      heading?.focus();
                    }}
                  >
                    {item.label}
                  </Breadcrumb.Link>
                </Show>
              </Breadcrumb.Item>
            )}
          </For>
        </Breadcrumb.List>
      </Breadcrumb.Root>
      <section id={destination().slug} style={{ display: "grid", gap: "0.5rem" }}>
        <Heading as="h2" size="5" ref={heading} tabIndex={-1}>
          {destination().label}
        </Heading>
        <Text size="7" tone="muted" role="status">
          Current page: {destination().label}
        </Text>
      </section>
      <div>
        <Button
          size="sm"
          tone="neutral"
          variant="outline"
          onClick={() => {
            setCurrent(2);
            heading?.focus();
          }}
        >
          Open Design system
        </Button>
      </div>
    </div>
  );
}
