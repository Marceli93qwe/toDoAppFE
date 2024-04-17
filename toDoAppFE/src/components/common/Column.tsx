import {ReactNode} from "react";

interface Props {
    children: ReactNode
    style?: object
}

export const Column = ({children, style}: Props) => {
    return (
        <div className={"row"} style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...style
        }}>
            <>{children}</>
        </div>
    )
}