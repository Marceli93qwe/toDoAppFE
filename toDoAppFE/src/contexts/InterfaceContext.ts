import {createContext} from "react";

export const InterfaceContext = createContext<{
    userMenuDisplay: boolean,
    toggleUserMenuDisplay: () => void,
    isUserLoggedIn: boolean,
}>(
    {
        userMenuDisplay: false,
        toggleUserMenuDisplay: () => null,
        isUserLoggedIn: false,
    }
)