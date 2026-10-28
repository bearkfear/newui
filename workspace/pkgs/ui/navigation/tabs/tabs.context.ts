import { createContext, useContext } from "solid-js";
import { tabsRecipe } from "./tabs.recipe";

export const TabsStyles = createContext(() => tabsRecipe());
export const useTabsStyles = () => useContext(TabsStyles);
