import {InterfaceContext} from "../../contexts/InterfaceContext.ts";
import {ReactNode, useState} from "react";

interface Props {
    children: ReactNode,
}

export const InterfaceContextProvider = ({children}: Props) => {
    const [userMenuDisplay] = useState(false);
    const toggleUserMenuDisplay = () => {
        console.log(userMenuDisplay);
    }
    return (
        <InterfaceContext.Provider value={{userMenuDisplay, toggleUserMenuDisplay}}>
            {children}
        </InterfaceContext.Provider>
    )
}