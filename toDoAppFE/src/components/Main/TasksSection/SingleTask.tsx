import {faCircle, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Row} from "../../common/Row";


interface Props {
    description: string;
    active: boolean;
    taskName: string;
    deadlineDate: string;

}

export const SingleTask = ({taskName, active, deadlineDate}: Props) => {
    return (
        <div className="single-task">
            <Row style={{justifyContent: "space-between"}}>
                <Row style={{gap: 5, color: ""}}>
                    {/*check if the task is done, and adapt the icon to this info*/}
                    <FontAwesomeIcon icon={!active ? faCircle : faCircleCheck} size="xs"/>
                    <p>{taskName}</p>
                </Row>
                <div className="date-label">{new Date(deadlineDate).toLocaleDateString()}</div>
            </Row>
        </div>
    );
}
