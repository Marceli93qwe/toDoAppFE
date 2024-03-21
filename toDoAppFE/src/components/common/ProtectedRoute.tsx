import {ReactNode, useEffect} from "react";
import {authenticateUser} from "../../utils/authenticateUser.ts";
import {navigate} from "../../utils/navigator.ts";

interface Props {
    children: ReactNode,
    shouldBeLoggedIn: boolean, //decides whether to exclude logged in or unlogged users from accessing the resource
}

export const ProtectedRoute = ({children, shouldBeLoggedIn}: Props) => {
    //if you are not logged in, useEffect refers you to login page
    useEffect(() => {
        (async () => {
            const test = await authenticateUser();
            if (shouldBeLoggedIn) if (!test) return navigate("/login");
            if (!shouldBeLoggedIn) if (test) return navigate("/");
        })()
    }, []);
    return (
        <>
            {children}
        </>
    )
}