import {TaskList} from "./TaskList";
import {useContext, useEffect, useState} from "react";
import {TaskRecord} from "../../../types/TaskRecord.ts";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {SectionLabel} from "../../common/SectionLabel.tsx";
import {filterTasksByBookmarkId} from "../../../utils/tasksInfo.ts";

export const TasksSection = () => {
    const {chosenBookmarkId, chosenBookmarkName, allUsersTasks} = useContext(BookmarkContext);
    const [tasks, setTasks] = useState<TaskRecord[]| null>([]);
    useEffect(() => {
        setTasks(filterTasksByBookmarkId(allUsersTasks, chosenBookmarkId));
    }, [allUsersTasks, chosenBookmarkId]);

    return (
        <>
            <div className={"task-lists-wrapper"}>
                <SectionLabel>Chosen bookmark: {chosenBookmarkName}</SectionLabel>
                <TaskList listName="Current tasks" tasks={tasks && tasks.filter(task => !task.active)}></TaskList>
                <TaskList listName={"Completed"} tasks={tasks && tasks.filter(task => task.active)}></TaskList>
            </div>
        </>
    );
}
