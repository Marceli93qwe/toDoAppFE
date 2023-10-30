import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {Row} from "../common/Row";

export const RightPanelSummary = () => {
    return (
        <div className={"right-panel-summary"}>
            <Row style={{justifyContent: "center", gap: 5}}>
                <FontAwesomeIcon icon={faSpinner} spin color={"#2F9EA8"}/>
                <p> 60% ready</p>
            </Row>
        </div>
    )
}