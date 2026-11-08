import { createContext, useContext } from "solid-js";
import type { useTextControl } from "../text-control.context";

export const SelectVisualContext = createContext<ReturnType<typeof useTextControl>>();

export function useSelectVisual() {
  const context = useContext(SelectVisualContext);
  if (!context) throw new Error("Select parts must be used inside Select.Root.");
  return context;
}
