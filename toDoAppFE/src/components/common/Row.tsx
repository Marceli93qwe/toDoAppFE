import {ReactNode} from "react";

interface Props {
    click?: () => void
    children: ReactNode
    style?: object
}

export const Row = ({children, style, click}: Props) => {
    return (
        <div
            onClick={click}
            className={"row"}
            style={{
                ...style,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

            }}>
            <>{children}</>
        </div>
    )
}