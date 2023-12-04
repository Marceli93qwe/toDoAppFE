import {TaskList} from "./TaskList";
import {useContext, useEffect, useState} from "react";
import {TaskRecord} from "../../../types/TaskRecord.ts";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {getTasksFromBookmark} from "../../../utils/DataGetter.ts";

export const TasksSection = () => {
    const [tasks, setTasks] = useState<TaskRecord[]>([])
    const {chosenBookmarkId} = useContext(BookmarkContext);
    useEffect(() => {
        (async () => {
            setTasks(await getTasksFromBookmark(chosenBookmarkId))
            // console.log(await getTasksFromBookmark(chosenBookmarkId));
        })()
    }, [chosenBookmarkId]);
    // FETCHING DATA FROM OUR BE SERVER
    return (
        <>
            <div className={"task-lists-wrapper"}>
                <TaskList listName="Current tasks" tasks={tasks}></TaskList>
                <TaskList listName={"Completed"} tasks={tasks}></TaskList>
            </div>
        </>
    );
}
