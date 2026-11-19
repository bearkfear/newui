import { Table } from "@egcs/newui";
import { For } from "solid-js";
import { ExampleSection } from "./component-example";

export function ComponentApi(props: {
  text: {
    api: string;
    apiDescription: string;
    property: string;
    values: string;
    default: string;
  };
  rows: readonly (readonly [string, string, string])[];
}) {
  return (
    <ExampleSection id="api" title={props.text.api} description={props.text.apiDescription}>
      <Table.Container aria-label={props.text.api}>
        <Table.Root density="compact">
          <Table.Header>
            <Table.Row>
              <Table.Head>{props.text.property}</Table.Head>
              <Table.Head>{props.text.values}</Table.Head>
              <Table.Head>{props.text.default}</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <For each={props.rows}>
              {([name, values, defaultValue]) => (
                <Table.Row>
                  <Table.Head scope="row">
                    <code class="font-mono text-sm">{name}</code>
                  </Table.Head>
                  <Table.Cell>
                    <code class="font-mono text-sm">{values}</code>
                  </Table.Cell>
                  <Table.Cell>
                    <code class="font-mono text-sm">{defaultValue}</code>
                  </Table.Cell>
                </Table.Row>
              )}
            </For>
          </Table.Body>
        </Table.Root>
      </Table.Container>
    </ExampleSection>
  );
}
