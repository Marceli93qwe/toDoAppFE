import { ReactNode } from "react";

interface Props {
    children: ReactNode
}
export const SectionLabel = ({ children }: Props) => {
    return (
        <h5 style={{ fontFamily: "Ubuntu Mono", color: "#303030", padding: "0 1rem" }}>{children}</h5>

    );
}
