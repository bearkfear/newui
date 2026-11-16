import { type JSX, splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table.parts";
import { tableRecipe } from "./table.recipe";

/**
 * Table.Root variants: plain/bordered, comfortable/compact, fullWidth, striped, and hoverable.
 * Defaults are plain, comfortable, full width, without stripes or hover treatment.
 */
export type TableRootProps = JSX.IntrinsicElements["table"] &
  VariantProps<typeof tableRecipe> & { striped?: boolean; hoverable?: boolean };
export type TableContainerProps = JSX.HTMLAttributes<HTMLElement>;

export function TableRoot(props: TableRootProps) {
  const [local, rest] = splitProps(props, [
    "variant",
    "density",
    "fullWidth",
    "striped",
    "hoverable",
    "class",
  ]);
  return (
    <table
      {...rest}
      data-variant={local.variant ?? "plain"}
      data-striped={local.striped ? "" : undefined}
      data-hoverable={local.hoverable ? "" : undefined}
      class={tableRecipe({
        variant: local.variant,
        density: local.density,
        fullWidth: local.fullWidth,
      }).root({ class: local.class })}
    />
  );
}

export function TableContainer(props: TableContainerProps) {
  const [local, rest] = splitProps(props, ["class"]);
  return (
    <section
      aria-label="Scrollable table"
      // biome-ignore lint/a11y/noNoninteractiveTabindex: Keyboard users must be able to focus and scroll an overflowing table region.
      tabIndex={0}
      {...rest}
      class={tableRecipe().container({ class: local.class })}
    />
  );
}

/**
 * Native table parts with semantic sections and optional row/appearance states.
 * Wrap wide tables in Table.Container: it provides horizontal scrolling and keyboard focus so users
 * can scroll the region without losing native table semantics.
 */
export const Table = {
  Container: TableContainer,
  Root: TableRoot,
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
};
