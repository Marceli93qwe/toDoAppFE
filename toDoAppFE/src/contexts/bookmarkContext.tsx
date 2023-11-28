import {createContext} from "react";
import {BookmarkRecord} from "../types/BookmarkRecord.ts";

export const BookmarkContext = createContext<{
    bookmarks: BookmarkRecord[] | null,
    chosenBookmarkId: string | null,
    setChosenBookmark: (id: string) => void,
}>({
    bookmarks: [],
    chosenBookmarkId: "",
    setChosenBookmark: () => undefined
});
