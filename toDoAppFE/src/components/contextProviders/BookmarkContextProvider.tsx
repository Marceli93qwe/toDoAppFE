import {ReactNode, useEffect, useState} from "react";
import {BookmarkRecord} from "../../types/BookmarkRecord.ts";
import {getBookmarks} from "../../utils/DataGetter.ts";
import {BookmarkContext} from "../../contexts/bookmarkContext.tsx";

interface Props {
    children: ReactNode;
}

export const BookmarkContextProvider = ({children}: Props) => {
    const [bookmarks, setBookmarks] = useState<BookmarkRecord[] | null>(null);
    const [chosenBookmarkId, setChosenBookmarkId] = useState<string | null>(null);
    // FETCH USER'S BOOKMARKS FROM DATABASE
    useEffect(() => {
        (async () => {
            setBookmarks(await getBookmarks());
        })()
    }, [])
    // HANDLER FOR A BOOKMARK CHOICE ACTION - WITHOUT IT, TYPES IN BookmarkContext will block the program.
    const handleBookmarkChoice = (id: string) => {
        console.log(id);
        setChosenBookmarkId(id);
    }

    return (
        <>
            <BookmarkContext.Provider value={{bookmarks, chosenBookmarkId, setChosenBookmark: handleBookmarkChoice}}>
                {children}
            </BookmarkContext.Provider>
        </>
    )


}