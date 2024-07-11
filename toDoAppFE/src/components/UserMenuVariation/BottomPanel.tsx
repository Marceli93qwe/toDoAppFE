import {Column} from "../common/Column.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faCircleInfo,
    faEnvelope,
    faGear,
    faPalette,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {Row} from "../common/Row.tsx";
import {logOut} from "../../utils/authenticateUser.ts";
import {Link} from "react-router-dom";

export const BottomPanel = () => {

    return (
        <div className="bottom-panel">
            <Column style={{gap: "1.5rem"}}>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faGear}/> settings</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faChartLine}/> statistics</Row>
                <Link to={"/themes"} className={"menu-link-style"}>
                    <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faPalette}/> theme</Row>
                </Link>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faCircleInfo}/> info</Row>
                <Link to={"/contact"} className={"menu-link-style"}>
                    <Row style={{gap: "0.6rem"}}><FontAwesomeIcon
                        icon={faEnvelope}/> contact</Row>
                </Link>
                <Row click={logOut} style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faRightFromBracket}/> logout</Row>
            </Column>
        </div>
    )
}