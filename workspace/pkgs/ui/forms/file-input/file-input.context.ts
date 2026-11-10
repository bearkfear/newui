import { createContext, useContext } from "solid-js";
import type { useTextControl } from "../text-control.context";

export const FileInputVisualContext = createContext<ReturnType<typeof useTextControl>>();
export function useFileInputVisual() {
  const context = useContext(FileInputVisualContext);
  if (!context) throw new Error("FileInput parts must be inside FileInput.Root.");
  return context;
}

export function useFileInputState() {
  const visual = useFileInputVisual();
  return () => {
    if (visual.disabled()) return "disabled";
    if (visual.readOnly()) return "readonly";
    if (visual.loading()) return "loading";
    if (visual.invalid()) return "invalid";
    if (visual.valid()) return "valid";
    return "idle";
  };
}
