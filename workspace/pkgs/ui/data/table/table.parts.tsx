import { type JSX, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { tableCellRecipe, tableRecipe } from "./table.recipe";

export type TableSectionProps = JSX.HTMLAttributes<HTMLTableSectionElement>;
export type TableRowProps = JSX.HTMLAttributes<HTMLTableRowElement> & { selected?: boolean };
export type TableHeadProps = Omit<JSX.ThHTMLAttributes<HTMLTableCellElement>, "align"> &
  VariantProps<typeof tableCellRecipe>;
export type TableCellProps = Omit<JSX.TdHTMLAttributes<HTMLTableCellElement>, "align"> &
  VariantProps<typeof tableCellRecipe>;
export type TableCaptionProps = JSX.HTMLAttributes<HTMLTableCaptionElement>;
const styles = tableRecipe();

export function TableHeader(props: TableSectionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <thead {...rest} class={styles.header({ class: local.class })} />;
}

export function TableBody(props: TableSectionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <tbody {...rest} class={styles.body({ class: local.class })} />;
}

export function TableFooter(props: TableSectionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <tfoot {...rest} class={styles.footer({ class: local.class })} />;
}

export function TableRow(props: TableRowProps) {
  const [local, rest] = splitProps(props, ["class", "selected"]);
  return (
    <tr
      {...rest}
      data-selected={local.selected ? "" : undefined}
      class={styles.row({ class: local.class })}
    />
  );
}

export function TableHead(props: TableHeadProps) {
  const [local, rest] = splitProps(props, ["class", "align"]);
  return (
    <th
      scope="col"
      {...rest}
      class={styles.head({ class: tableCellRecipe({ align: local.align, class: local.class }) })}
    />
  );
}

export function TableCell(props: TableCellProps) {
  const [local, rest] = splitProps(props, ["class", "align"]);
  return (
    <td
      {...rest}
      class={styles.cell({ class: tableCellRecipe({ align: local.align, class: local.class }) })}
    />
  );
}

export function TableCaption(props: TableCaptionProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return <caption {...rest} class={styles.caption({ class: local.class })} />;
}
