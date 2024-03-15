import {faCircle, faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Row} from "../../common/Row";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {removeTaskFromBookmark} from "../../../utils/DataGetter.ts";


interface Props {
    id: string;
    description: string;
    active: boolean;
    taskName: string;
    deadlineDate: string;
}

export const SingleTask = ({id, taskName, active, deadlineDate}: Props) => {
    const {chosenBookmarkId} = useContext(BookmarkContext);
    return (
        <div className="single-task">
            <Row style={{justifyContent: "space-between" }}>
                <Row style={{gap: 5, color: ""}}>
                    {/*check if the task is done, and adapt the icon to this info*/}
                    <FontAwesomeIcon icon={!active ? faCircle : faCircleCheck} size="xs"/>
                    <p>{taskName}</p>
                </Row>
                <div className="date-label">{new Date(deadlineDate).toLocaleDateString()}</div>
                <FontAwesomeIcon onClick={()=>removeTaskFromBookmark(chosenBookmarkId, id)} style={{marginLeft: "0.3rem", fontSize: "0.8rem", color: "bord  "}} icon={faTrash}/>
            </Row>
        </div>
    );
}
