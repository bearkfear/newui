import { createContext, useContext } from "solid-js";
import type { ButtonProps } from "../button/button";

export type ButtonGroupOptions = Pick<ButtonProps, "size" | "variant" | "tone" | "disabled">;
export const ButtonGroupContext = createContext<ButtonGroupOptions>({});
export const useButtonGroup = () => useContext(ButtonGroupContext);
