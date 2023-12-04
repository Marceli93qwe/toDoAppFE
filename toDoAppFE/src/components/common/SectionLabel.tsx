import {ReactNode} from "react";

interface Props {
    children: ReactNode,
    style?: object,
}

export const SectionLabel = ({children, style}: Props) => {
    return (
        <h5 style={{fontFamily: "Ubuntu Mono", color: "#303030", padding: "0.3rem 1rem", ...style}}>{children}</h5>

    );
}
