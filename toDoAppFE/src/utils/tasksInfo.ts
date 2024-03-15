import {TaskRecord} from "../types/TaskRecord.ts";

export const filterTasksByBookmarkId = (tasks: TaskRecord[] | null, chosenBookmarkId: string | null) => {
    if (tasks) return tasks.filter(task=>
        task.bookmarkId === chosenBookmarkId
    );
    return null
}

export const countBookmarkTasks = ( tasks: TaskRecord[] | null,bookmarkId: string | null) => {
return filterTasksByBookmarkId(tasks, bookmarkId)?.length;
}