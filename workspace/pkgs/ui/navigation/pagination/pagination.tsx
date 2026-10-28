import { Pagination as ArkPagination } from "@ark-ui/solid/pagination";
import { splitProps } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import { PaginationStyles } from "./pagination.context";
import { PaginationItems } from "./pagination.items";
import { PaginationNextTrigger, PaginationPrevTrigger } from "./pagination.parts";
import { paginationRecipe } from "./pagination.recipe";

export type PaginationRootProps = Omit<ArkPagination.RootProps, "type" | "getPageUrl"> &
  VariantProps<typeof paginationRecipe>;

export function PaginationRoot(props: PaginationRootProps) {
  const [local, rest] = splitProps(props, ["size", "class", "children"]);
  const styles = () => paginationRecipe({ size: local.size });
  return (
    <PaginationStyles.Provider value={styles}>
      <ArkPagination.Root {...rest} class={styles().root({ class: local.class })}>
        {local.children}
      </ArkPagination.Root>
    </PaginationStyles.Provider>
  );
}

export const Pagination = {
  Root: PaginationRoot,
  Items: PaginationItems,
  PrevTrigger: PaginationPrevTrigger,
  NextTrigger: PaginationNextTrigger,
};
