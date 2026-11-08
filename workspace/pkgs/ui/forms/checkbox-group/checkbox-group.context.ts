import { type Accessor, createContext, useContext } from "solid-js";

export const CheckboxGroupContext = createContext<{
  labelId: Accessor<string>;
  register: (input: HTMLInputElement) => void;
}>();
export const useCheckboxGroupVisual = () => useContext(CheckboxGroupContext);
