import {faCircle, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Row} from "../../common/Row";


interface Props {
    taskName: string;
    active: boolean;
}

export const SingleTask = ({taskName, active}: Props) => {
    return (
        <div className="single-task">
            <Row style={{justifyContent: "space-between"}}>
                <Row style={{gap: 5, color: ""}}>
                    <FontAwesomeIcon icon={active ? faCircle : faCircleCheck} size="xs"/>
                    <p>{taskName}</p>
                </Row>
                <div className="date-label">12.05.2022</div>
            </Row>
        </div>
    );
}
