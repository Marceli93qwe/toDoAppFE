import {createContext} from "react";
import {BookmarkRecord} from "../types/BookmarkRecord.ts";
import {TaskRecord} from "../types/TaskRecord.ts";

export const BookmarkContext = createContext<{
    allUsersTasks: TaskRecord[] | null,
    bookmarks: BookmarkRecord[] | null,
    chosenBookmarkId: string | null,
    setChosenBookmark: (id: string, name: string) => void,
    chosenBookmarkName: string | null,
    formActive: boolean,
    setFormActive: () => void,
    bookmarkFormActive: boolean,
    setBookmarkFormActive: () => void,
}>({
    allUsersTasks: [],
    bookmarks: [],
    chosenBookmarkId: "",
    setChosenBookmark: () => undefined,
    chosenBookmarkName: "",
    formActive: false,
    setFormActive: () => undefined,
    bookmarkFormActive: false,
    setBookmarkFormActive: () => undefined,
});
