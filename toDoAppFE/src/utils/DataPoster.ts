import {TaskRecord} from "../types/TaskRecord.ts";

export const AddTask = async ({taskName, bookmarkId, description }: TaskRecord) => {
    await fetch(`http://192.168.31.115:3001/users/bookmarks/${bookmarkId}/tasks`,
        {
            method: "POST",
            body: JSON.stringify({taskName, description})
        });
}