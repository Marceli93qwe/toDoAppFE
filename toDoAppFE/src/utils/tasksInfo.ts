import {TaskRecord} from "../types/TaskRecord.ts";
import {BookmarkRecord} from "../types/BookmarkRecord.ts";

export const filterTasksByBookmarkId = (tasks: TaskRecord[] | null, chosenBookmarkId: string | null) => {
    if (tasks) return tasks.filter(task =>
        task.bookmarkId === chosenBookmarkId
    );
    return null
}

export const countBookmarkTasks = (tasks: TaskRecord[] | null, bookmarkId: string | null) => {
    return filterTasksByBookmarkId(tasks, bookmarkId)?.length;
}


export const getChosenBookmarkFromStorage = () => {
    return JSON.parse(localStorage.getItem("chosenBookmark") as string) as BookmarkRecord;
}