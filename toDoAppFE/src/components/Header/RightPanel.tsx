import {RightPanelItem} from "./RightPanelItem";
import {Row} from "../common/Row";
import {RightPanelSummary} from "./RightPanelSummary";
import {useContext} from "react";
import {InterfaceContext} from "../../contexts/InterfaceContext.ts";

export const RightPanel = () => {
    const {isUserLoggedIn} = useContext(InterfaceContext)

    return (
        <div className={"right-panel"}>
            {isUserLoggedIn ?
                <>
                    <h6>
                        hi, marcel
                    </h6>
                    <Row style={{justifyContent: "space-around", height: "9rem"}}>
                        <RightPanelItem/>
                        <RightPanelItem/>
                    </Row>
                    <RightPanelSummary/>
                </>
                :
                <h4>hello, stranger</h4>
            }
        </div>
    )
}