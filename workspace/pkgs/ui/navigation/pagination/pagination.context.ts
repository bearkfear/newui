import { createContext, useContext } from "solid-js";
import { paginationRecipe } from "./pagination.recipe";

export const PaginationStyles = createContext(() => paginationRecipe());
export const usePaginationStyles = () => useContext(PaginationStyles);
