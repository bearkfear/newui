import type { Accessor } from "solid-js";
import { createContext, useContext } from "solid-js";

export const DialogOptions = createContext<Accessor<{ modal: boolean }>>(() => ({ modal: true }));
export const useDialogOptions = () => useContext(DialogOptions);
