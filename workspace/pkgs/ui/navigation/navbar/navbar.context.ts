import { createContext, useContext } from "solid-js";

export const NavbarCloseContext = createContext<() => void>(() => {});
export const useNavbarClose = () => useContext(NavbarCloseContext);
