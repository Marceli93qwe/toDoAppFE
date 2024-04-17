import {Column} from "../common/Column.tsx";

export const TopPanel = () => {
    return (
        <div className={"top-panel"}>
            <div className={"user-icon"}></div>
            <Column style={{width: "auto", alignItems: "start"}}>
                <h2>marcel</h2>
                <p>beginner</p>
            </Column>
        </div>
    )
}