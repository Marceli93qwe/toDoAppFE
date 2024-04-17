import {ReactNode} from "react";

interface Props {
    background: string;
    children: ReactNode
}

export const InfoDisplay = ({background, children}: Props) => {
    return (
        <div className="info-display" style={{
            background: `url("${background}")`
        }}>
            <p>
                {children}
            </p>
        </div>
    )
}