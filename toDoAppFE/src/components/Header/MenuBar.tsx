import {ReactNode} from "react";

interface Props {
    children: ReactNode,
}

export const MenuBar = ({children}: Props) => {
    return (
        <ul>
            {children}
        </ul>
    )
}