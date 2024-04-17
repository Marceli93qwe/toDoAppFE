import {createContext} from "react";

export const InterfaceContext = createContext<{
    userMenuDisplay: boolean,
    toggleUserMenuDisplay: () => void,
}>(
    {
        userMenuDisplay: false,
        toggleUserMenuDisplay: () => null,
    }
)