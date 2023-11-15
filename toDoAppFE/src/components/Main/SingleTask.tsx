import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row } from "../common/Row";

export const SingleTask = () => {
    return (
        <div className="single-task">
            <Row style={{ justifyContent: "space-between" }}>
                <Row style={{ gap: 5, color: "" }}>
                    <FontAwesomeIcon icon={faCircle} size="1x" />
                    <p>Zakupy</p>
                </Row >
                <div className="date-label">12.05.2022</div>
            </Row>
        </div>
    );
}
