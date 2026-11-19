import { lazy, Show } from "solid-js";
import { Dynamic } from "solid-js/web";
import type { Locales } from "../../../i18n/i18n-types";
import { NotFoundPage } from "../../not-found-page";
import { buttonCopy } from "../button/button-content";
import { ComponentApi } from "../component-api";
import {
  type CatalogComponent,
  type CatalogGroup,
  findCatalogComponent,
} from "../component-catalog";
import { ComponentDocPage } from "../component-doc-page";
import { ComponentExample } from "../component-example";
import type { ComponentDocumentation } from "./reference-types";

type DocModule = { docs: Record<string, ComponentDocumentation> };
const references = import.meta.glob<DocModule>("./*-docs.tsx");

type ReferenceProps = { locale: Locales; component: CatalogComponent; group: CatalogGroup };

const areaPages = Object.fromEntries(
  Object.entries(references).map(([file, load]) => [
    file,
    lazy(async () => {
      const { docs } = await load();
      return {
        default: (props: ReferenceProps) => (
          <Show
            when={docs[props.component]}
            keyed
            fallback={<NotFoundPage locale={props.locale} />}
          >
            {(documentation) => <ComponentReference {...props} doc={documentation} />}
          </Show>
        ),
      };
    }),
  ]),
);

export function ReferencePage(props: { locale: Locales; slug: string }) {
  const entry = () => findCatalogComponent(props.slug);
  const page = () => {
    const group = entry()?.group.id;
    return group ? areaPages[`./${group}-docs.tsx`] : undefined;
  };

  return (
    <Show when={entry()} keyed fallback={<NotFoundPage locale={props.locale} />}>
      {({ group, name }) => (
        <Show when={page()} keyed fallback={<NotFoundPage locale={props.locale} />}>
          {(Page) => <Page locale={props.locale} component={name} group={group} />}
        </Show>
      )}
    </Show>
  );
}

function ComponentReference(props: ReferenceProps & { doc: ComponentDocumentation }) {
  const common = () => buttonCopy[props.locale];
  const related = () => {
    const components: readonly CatalogComponent[] = props.group.components;
    const index = components.indexOf(props.component);
    return components[index + 1] ?? components[index - 1] ?? props.component;
  };
  const entries = () =>
    [
      ["usage", common().usage],
      ["api", common().api],
    ] as const;

  const text = () => ({
    ...common(),
    section: props.group.label[props.locale],
    description: props.doc.summary[props.locale],
    apiDescription:
      props.locale === "en"
        ? "Key props and defaults."
        : "Propriedades principais e seus valores padrão.",
  });

  return (
    <ComponentDocPage
      locale={props.locale}
      component={props.component}
      group={props.group.id}
      related={related()}
      entries={entries()}
      text={text()}
    >
      <ComponentExample
        id="usage"
        title={text().usage}
        description={props.doc.usage[props.locale]}
        text={text()}
        code={typeof props.doc.code === "string" ? props.doc.code : props.doc.code(props.locale)}
      >
        <Dynamic component={props.doc.preview} locale={props.locale} />
      </ComponentExample>
      <ComponentApi text={text()} rows={props.doc.rows} />
    </ComponentDocPage>
  );
}
