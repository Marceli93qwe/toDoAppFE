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

export const BottomPanel = () => {

    return (
        <div className="bottom-panel">
            <Column style={{gap: "1.5rem"}}>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faGear}/> settings</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faChartLine}/> statistics</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faPalette}/> theme</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faCircleInfo}/> info</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faEnvelope}/> contact</Row>
                <Row style={{gap: "0.6rem"}}><FontAwesomeIcon icon={faRightFromBracket}/> logout</Row>
            </Column>
        </div>
    )
}