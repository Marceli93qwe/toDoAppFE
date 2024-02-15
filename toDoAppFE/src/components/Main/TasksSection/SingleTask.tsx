import {faCircle, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Row} from "../../common/Row";


interface Props {
    description: string;
    priority: number;
    taskName: string;
    active: boolean;
    deadlineDate: string;

}

export const SingleTask = ({taskName, active, deadlineDate, description}: Props) => {
    return (
        <div className="single-task">
            <Row style={{justifyContent: "space-between"}}>
                <Row style={{gap: 5, color: ""}}>
                    <FontAwesomeIcon icon={!active ? faCircle : faCircleCheck} size="xs"/>
                    <p>{taskName}</p>
                    {description}
                </Row>
                <div className="date-label">{new Date(deadlineDate).toLocaleDateString()}</div>
            </Row>
        </div>
    );
}
