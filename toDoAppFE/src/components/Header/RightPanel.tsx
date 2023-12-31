import {RightPanelItem} from "./RightPanelItem";
import {Row} from "../common/Row";
import {RightPanelSummary} from "./RightPanelSummary";

export const RightPanel = () => {
    return (
        <div className={"right-panel"}>
            <Row style={{justifyContent: "space-around", height: "9rem"}}>
                <RightPanelItem/>
                <RightPanelItem/>
            </Row>
            <RightPanelSummary/>
        </div>
    )
}