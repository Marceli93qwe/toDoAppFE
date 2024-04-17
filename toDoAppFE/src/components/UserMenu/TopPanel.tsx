import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faXmark} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export const TopPanel = () => {
    return (
        <div className={"top-panel"}>
            <Link to={"/"}>
                <FontAwesomeIcon beat className={"link-style"} icon={faXmark} size={"xl"}/>
            </Link>
            <h4>time manager</h4>
            <FontAwesomeIcon icon={faEnvelope}/>
        </div>
    )
}