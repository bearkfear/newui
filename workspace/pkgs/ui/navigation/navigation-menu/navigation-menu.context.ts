import { type Accessor, createContext, useContext } from "solid-js";

export const NavigationMenuCloseContext = createContext<() => void>(() => {});
export const useNavigationMenuClose = () => useContext(NavigationMenuCloseContext);
export const NavigationMenuItemContext = createContext<Accessor<string>>();
export const NavigationMenuVisibilityContext = createContext<Accessor<boolean>>(() => true);
export const useNavigationMenuVisibility = () => useContext(NavigationMenuVisibilityContext);
