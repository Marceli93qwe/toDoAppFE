import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export const LeftPanel = () => {
    return (
        <div className={"left-panel"}>
            <FontAwesomeIcon icon={faBars} beat></FontAwesomeIcon>
            <h2>time manager</h2>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}