import {InterfaceContext} from "../../contexts/InterfaceContext.ts";
import {ReactNode, useState} from "react";

interface Props {
    children: ReactNode,
}

export const InterfaceContextProvider = ({children}: Props) => {
    const [userMenuDisplay, setUserMenuDisplay] = useState(false);
    const toggleUserMenuDisplay = () => {
        setUserMenuDisplay(prev => !prev);
        console.log(userMenuDisplay)
    }
    return (
        <InterfaceContext.Provider value={{userMenuDisplay, toggleUserMenuDisplay}}>
            {children}
        </InterfaceContext.Provider>
    )
}