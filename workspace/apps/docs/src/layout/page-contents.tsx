import { VerticalMenu } from "@egcs/newui";
import { For } from "solid-js";

export function PageContents(props: {
  label: string;
  entries: readonly (readonly [string, string])[];
}) {
  return (
    <aside class="min-w-0 rounded-lg border border-border p-3 lg:col-start-2 lg:row-start-1 xl:sticky xl:top-24 xl:col-start-3 xl:row-start-1 xl:rounded-none xl:border-y-0 xl:border-r-0 xl:py-0 xl:pl-4 xl:pr-0">
      <VerticalMenu.Root aria-label={props.label} density="compact">
        <VerticalMenu.Group>
          <VerticalMenu.Label size="6">{props.label}</VerticalMenu.Label>
          <VerticalMenu.List class="flex flex-row flex-wrap gap-x-2 xl:flex-col">
            <For each={props.entries}>
              {([id, title]) => (
                <VerticalMenu.Item>
                  <VerticalMenu.Link class="h-auto whitespace-normal text-sm" href={`#${id}`}>
                    {title}
                  </VerticalMenu.Link>
                </VerticalMenu.Item>
              )}
            </For>
          </VerticalMenu.List>
        </VerticalMenu.Group>
      </VerticalMenu.Root>
    </aside>
  );
}
