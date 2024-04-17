import {InterfaceContext} from "../../contexts/InterfaceContext.ts";
import {ReactNode, useEffect, useState} from "react";
import {authenticateUser} from "../../utils/authenticateUser.ts";

interface Props {
    children: ReactNode,

}

export const InterfaceContextProvider = ({children}: Props) => {
    const [userMenuDisplay, setUserMenuDisplay] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const toggleUserMenuDisplay = () => {
        setUserMenuDisplay(prev => !prev);
        console.log(userMenuDisplay)
    }

    useEffect(() => {
        (async () => setIsUserLoggedIn(await authenticateUser()))();
    }, [])

    return (
        <InterfaceContext.Provider value={{userMenuDisplay, toggleUserMenuDisplay, isUserLoggedIn}}>
            {children}
        </InterfaceContext.Provider>
    )
}