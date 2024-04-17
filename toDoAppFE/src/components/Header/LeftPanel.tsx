import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {InterfaceContext} from "../../contexts/InterfaceContext.ts";

export const LeftPanel = () => {
    const {toggleUserMenuDisplay} = useContext(InterfaceContext)
    return (
        <div className={"left-panel"}>
            <FontAwesomeIcon
                onClick={toggleUserMenuDisplay}
                className={"link-style"}
                icon={faBars}
                beat
            >
            </FontAwesomeIcon>
            <h2>time manager</h2>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}