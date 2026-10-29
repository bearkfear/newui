# Table

A native HTML table with a restrained default inspired by [Solid UI](https://www.solid-ui.com/docs/components/table) and composable presentation options inspired by [Bulma](https://bulma.io/documentation/elements/table/). Implementation is original; neither upstream's code nor palette is incorporated. All colors use the existing Radix-backed `--nui-*` tokens. No new dependency or Kobalte is used.

```tsx
import { Table } from "newui";
import "newui/styles.css";

<Table.Container aria-label="Recent invoices">
  <Table.Root striped hoverable density="compact">
    <Table.Caption>Recent invoices · Amounts in USD.</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.Head>Invoice</Table.Head>
        <Table.Head align="end">Amount</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Head scope="row">INV-1042</Table.Head>
        <Table.Cell align="end">$250.00</Table.Cell>
      </Table.Row>
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Head scope="row">Total</Table.Head>
        <Table.Cell align="end">$250.00</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>
</Table.Container>;
```

## Contract

Root renders only `table`. Header, Body, Footer, Row, Head, Cell, and Caption render `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`, and `caption`. Native semantics cover this presentation-only component; an Ark interaction primitive is unnecessary. All parts forward their native attributes, children, events, style, and element refs.

Root supports `variant="plain" | "bordered"`, `density="comfortable" | "compact"`, `striped`, `hoverable`, and `fullWidth`. Defaults are plain, comfortable, full width, without stripes or hover treatment. Bordered adds cell borders; the options combine independently and remain reactive. No row gains click behavior or a pointer cursor from hover styling.

Head defaults to `scope="col"`; pass `scope="row"` for row headers or `scope="colgroup"` for grouped headers. Native `colSpan`, `rowSpan`, `headers`, and IDs remain available. Head and Cell accept `align="start" | "center" | "end"`; end alignment adds tabular numerals. Caption sits below the table by default; native `style` can change its caption side.

Row's `selected` is presentational emphasis with a soft primary background, including over stripes and hover states. It does not add `aria-selected`, focusability, or selection behavior to a native table. Communicate the meaning with text or a control, as demonstrated by the Current label in Storybook. Use links and buttons inside cells for actions.

Container is optional and renders a named `section` with horizontal overflow, keyboard focus, and a visible focus ring. Its default name is Scrollable table; give multiple regions distinct names. Arrow keys scroll through native browser behavior. Container DOM attributes and ref target the section; Root attributes and ref target the table. Applications can set a minimum table width when columns should scroll rather than compress. Native table semantics remain intact on mobile.

Surfaces and stripes use neutral Radix steps 1–2, borders use step 6, hover uses step 3, and selected states use primary steps 3–4. Text retains foreground/muted semantic tokens. System, explicit, and nested themes work through the existing tokens. Class values are additive; arbitrary conflicting utility overrides are not guaranteed to win.

Sorting, filtering, pagination, row-selection logic, virtualization, and column management belong to a future Data Table contract. Table does not introduce a data engine or an ARIA grid. Empty content composes [Empty](../../feedback/empty/README.md) inside a spanning Cell; the user approved this integration.

## Review

Data / Table includes invoice totals and badges, individual and combined options, natural width, highlighted rows, grouped headers, an empty state, native cell actions, mobile scrolling, and dark/nested themes. The user validated the implementation and examples, including square bordered corners without scroll-container clipping. No new automated tests were created or expanded.
