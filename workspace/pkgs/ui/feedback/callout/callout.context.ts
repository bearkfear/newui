import type { Accessor } from "solid-js";
import { createContext, useContext } from "solid-js";
import type { VariantProps } from "tailwind-variants/lite";
import type { calloutRecipe } from "./callout.recipe";

export type CalloutTone = NonNullable<VariantProps<typeof calloutRecipe>["tone"]>;
export const CalloutOptions = createContext<Accessor<{ tone: CalloutTone }>>(() => ({
  tone: "info" as const,
}));
export const useCalloutOptions = () => useContext(CalloutOptions);
