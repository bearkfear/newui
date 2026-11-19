import { VerticalMenu } from "@egcs/newui";
import {
  ChartNoAxesColumnIncreasing,
  Compass,
  FormInput,
  Layers,
  LayoutGrid,
  MessageSquare,
  MousePointer2,
  PanelsTopLeft,
  Table2,
  Type,
} from "lucide-solid";
import { For } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { Locales } from "../../i18n/i18n-types";
import {
  type CatalogComponent,
  componentGroups,
  componentHref,
  groupIncludes,
} from "./component-catalog";

const groupIcons = {
  actions: MousePointer2,
  forms: FormInput,
  content: Type,
  navigation: Compass,
  layout: LayoutGrid,
  feedback: MessageSquare,
  overlays: Layers,
  data: Table2,
  charts: ChartNoAxesColumnIncreasing,
  compositions: PanelsTopLeft,
};

export function CatalogNavigation(props: {
  locale: Locales;
  label: string;
  current?: CatalogComponent;
}) {
  return (
    <aside
      class="min-w-0 border-b border-border pb-4 lg:col-start-1 lg:row-start-1 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4"
      classList={{ "lg:row-span-2 xl:row-span-1": Boolean(props.current) }}
    >
      <VerticalMenu.Root aria-label={props.label} density="compact">
        <VerticalMenu.Group>
          <VerticalMenu.Label>{props.label}</VerticalMenu.Label>
          <VerticalMenu.List>
            <For each={componentGroups}>
              {(group) => (
                <VerticalMenu.Branch
                  defaultOpen={
                    props.current ? groupIncludes(group, props.current) : group.id === "actions"
                  }
                >
                  <VerticalMenu.BranchTrigger>
                    <span class="flex min-w-0 flex-1 items-center gap-2 text-left">
                      <VerticalMenu.Icon>
                        <Dynamic component={groupIcons[group.id]} size={16} aria-hidden="true" />
                      </VerticalMenu.Icon>
                      {group.label[props.locale]}
                    </span>
                  </VerticalMenu.BranchTrigger>
                  <VerticalMenu.BranchContent>
                    <VerticalMenu.SubList>
                      <For each={group.components}>
                        {(name) => (
                          <VerticalMenu.Item>
                            <VerticalMenu.Link
                              href={componentHref(name, props.locale)}
                              current={name === props.current}
                              class="h-auto whitespace-normal"
                            >
                              {name}
                            </VerticalMenu.Link>
                          </VerticalMenu.Item>
                        )}
                      </For>
                    </VerticalMenu.SubList>
                  </VerticalMenu.BranchContent>
                </VerticalMenu.Branch>
              )}
            </For>
          </VerticalMenu.List>
        </VerticalMenu.Group>
      </VerticalMenu.Root>
    </aside>
  );
}
