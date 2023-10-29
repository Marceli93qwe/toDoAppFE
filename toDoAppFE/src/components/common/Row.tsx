import {ReactNode} from "react";

interface Props {
    children: ReactNode
    style?: object
}

export const Row = ({children, style}: Props) => {
    return (
        <div className={"row"} style={{
            ...style,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <>{children}</>
        </div>
    )
}