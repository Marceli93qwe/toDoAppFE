import {ReactNode, useEffect} from "react";
import {authenticateUser} from "./authenticateUser.ts";
import {navigate} from "./navigator.ts";

interface Props {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
    //if you are not logged in, useEffect refers you to login page
    useEffect(() => {
        (async () => {
            const test = await authenticateUser();
            if (!test) navigate("/login")
        })()
    }, []);
    return (
        <>
            {children}
        </>
    )
}