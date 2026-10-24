import { createContext, useContext } from "solid-js";
import { verticalMenuRecipe } from "./vertical-menu.recipe";

export const VerticalMenuStyles = createContext(() => verticalMenuRecipe());
export const useVerticalMenuStyles = () => useContext(VerticalMenuStyles);
