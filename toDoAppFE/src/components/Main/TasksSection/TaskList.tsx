import {SectionLabel} from "../../common/SectionLabel";
import {SingleTask} from "./SingleTask";
import {TaskRecord} from "../../../types/TaskRecord.ts";


interface Props {
    listName: string;
    tasks: TaskRecord[] | null;
}

export function TaskList({listName, tasks}: Props) {

    return (
        <>
            <SectionLabel>{listName}</SectionLabel>
            <ul className="task-list">
                {
                    tasks && tasks.map((task, index) => (
                        <SingleTask
                            key={index}
                            taskName={task.taskName}
                            active={task.active}
                            description={task.description}
                            deadlineDate={task.deadlineDate}
                        />
                    ))
                }
            </ul>
        </>
    );
}
