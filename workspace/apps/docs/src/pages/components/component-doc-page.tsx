import { Heading, Separator, Text } from "@egcs/newui";
import type { ParentProps } from "solid-js";
import type { Locales } from "../../i18n/i18n-types";
import { PageContents } from "../../layout/page-contents";
import { getLocalizedPath } from "../../lib/localized-path";
import { CatalogNavigation } from "./catalog-navigation";
import { type CatalogComponent, componentHref } from "./component-catalog";

export function ComponentDocPage(
  props: ParentProps<{
    locale: Locales;
    component: CatalogComponent;
    group?: string;
    related: CatalogComponent;
    entries: readonly (readonly [string, string])[];
    text: {
      navigation: string;
      onThisPage: string;
      section: string;
      description: string;
      related: string;
    };
  }>,
) {
  return (
    <div class="grid min-w-0 items-start gap-8 text-left lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-x-8 xl:grid-cols-[14rem_minmax(0,1fr)_12rem]">
      <CatalogNavigation
        locale={props.locale}
        label={props.text.navigation}
        current={props.component}
      />
      <PageContents label={props.text.onThisPage} entries={props.entries} />
      <article class="grid min-w-0 gap-8 lg:col-start-2 xl:row-start-1">
        <header class="grid gap-3">
          <a
            class="w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
            href={`${getLocalizedPath("/components/", props.locale)}#${props.group ?? "actions"}`}
          >
            {props.text.section}
          </a>
          <Heading as="h1" size="2" class="m-0">
            {props.component}
          </Heading>
          <Text size="4" tone="muted" class="m-0">
            {props.text.description}
          </Text>
        </header>
        <Separator decorative />
        {props.children}
        <footer class="grid gap-2 border-t border-border pt-6">
          <Text size="7" tone="muted" class="m-0">
            {props.text.related}
          </Text>
          <a
            class="w-fit font-mono text-primary underline underline-offset-4"
            href={componentHref(props.related, props.locale)}
          >
            {props.related}
          </a>
        </footer>
      </article>
    </div>
  );
}
