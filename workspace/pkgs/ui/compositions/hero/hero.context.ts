import { createContext, useContext } from "solid-js";
import { heroRecipe } from "./hero.recipe";

export const HeroStyles = createContext(() => heroRecipe());
export const useHeroStyles = () => useContext(HeroStyles);
