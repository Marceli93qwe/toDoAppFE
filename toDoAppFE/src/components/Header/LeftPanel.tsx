import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {InterfaceContext} from "../../contexts/InterfaceContext.ts";


export const LeftPanel = () => {
    const {toggleUserMenuDisplay, isUserLoggedIn} = useContext(InterfaceContext)
    return (
        <div className={"left-panel"}>
            {
                isUserLoggedIn
                    ?
                    <FontAwesomeIcon
                        onClick={toggleUserMenuDisplay}
                        className={"link-style"}
                        icon={faBars}
                        beat
                    />
                    :
                    <></>
            }

            <h2>time manager</h2>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}