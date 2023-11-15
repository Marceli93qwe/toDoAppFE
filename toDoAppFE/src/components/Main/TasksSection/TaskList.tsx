import { SectionLabel } from "../../common/SectionLabel";
import { SingleTask } from "./SingleTask";

export function TaskList() {
    return (
        <>
            <SectionLabel>Current Tasks</SectionLabel>
            <ul className="task-list">
                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
            </ul>
        </>
    );
}
