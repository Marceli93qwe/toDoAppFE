import {ReactNode} from "react";

interface Props {
    className?: string
    click?: () => void
    children: ReactNode
    style?: object
}

export const Row = ({children, style, click, className}: Props) => {
    return (
        <div
            onClick={click}
            className={className ? "row " + className : "row"}
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