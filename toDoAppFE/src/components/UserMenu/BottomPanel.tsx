import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export const BottomPanel = () => {
    return (
        <div className={"bottom-panel"}>
            <h3>hello, username</h3>
            <FontAwesomeIcon icon={faUser}/>
            <h5>hope you have a good day</h5>
        </div>
    )
}