import {Column} from "../common/Column.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {InterfaceContext} from "../../contexts/InterfaceContext.ts";

export const TopPanel = () => {
    const {toggleUserMenuDisplay} = useContext(InterfaceContext)
    return (
        <div className={"top-panel"}>
            <FontAwesomeIcon
                onClick={toggleUserMenuDisplay}
                icon={faXmark}
                size={"2xl"}
                className={"user-menu-xmark"}
                beat
            >
            </FontAwesomeIcon>
            <div className={"user-icon"}></div>
            <Column style={{width: "auto", alignItems: "start"}}>
                <h2>marcel</h2>
                <p>beginner</p>
            </Column>
        </div>
    )
}