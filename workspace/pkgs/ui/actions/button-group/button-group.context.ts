import { createContext, type JSX, useContext } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { buttonRecipe } from "../button/button.recipe";

export type ButtonGroupOptions = Pick<
  VariantProps<typeof buttonRecipe>,
  "size" | "variant" | "tone"
> &
  Pick<JSX.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;
export const ButtonGroupContext = createContext<ButtonGroupOptions>({});
export const useButtonGroup = () => useContext(ButtonGroupContext);
