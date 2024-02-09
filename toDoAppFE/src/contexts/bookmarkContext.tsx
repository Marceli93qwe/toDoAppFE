import {createContext} from "react";
import {BookmarkRecord} from "../types/BookmarkRecord.ts";

export const BookmarkContext = createContext<{
    bookmarks: BookmarkRecord[] | null,
    chosenBookmarkId: string | null,
    setChosenBookmark: (id: string) => void,
    formActive: boolean,
    setFormActive: () => void,
    bookmarkFormActive: boolean,
    setBookmarkFormActive: () => void,
}>({
    bookmarks: [],
    chosenBookmarkId: "",
    setChosenBookmark: () => undefined,
    formActive: false,
    setFormActive: () => undefined,
    bookmarkFormActive: false,
    setBookmarkFormActive: () => undefined,
});
