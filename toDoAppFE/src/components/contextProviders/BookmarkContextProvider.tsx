import {ReactNode, useEffect, useState} from "react";
import {BookmarkRecord} from "../../types/BookmarkRecord.ts";
import {getBookmarks} from "../../utils/DataGetter.ts";
import {BookmarkContext} from "../../contexts/bookmarkContext.tsx";
import {toggleScreenLock} from "../../utils/styleFunctions.ts";

interface Props {
    children: ReactNode;
}

export const BookmarkContextProvider = ({children}: Props) => {
    const [bookmarks, setBookmarks] = useState<BookmarkRecord[] | null>(null);
    const [chosenBookmarkId, setChosenBookmarkId] = useState<string | null>(null);
    const [formActive, setFormActive] = useState(false);
    const [bookmarkFormActive, setBookmarkFormActive] = useState(false);
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
    // HANDLER FOR A SHOW ADDITION FORM ACTION - WITHOUT IT, TYPES IN BookmarkContext will block the program
    const handleFormActiveChange = () => {
        setFormActive(active => !active);
        // TOGGLE SCREEN LOCK
        toggleScreenLock(!formActive);
    }

    const handleBookmarkFormActiveChange = () => {
        setBookmarkFormActive(bookmarkFormActive => !bookmarkFormActive);
        // TOGGLE SCREEN LOCK
        toggleScreenLock(!bookmarkFormActive);
    }
    return (
        <>
            <BookmarkContext.Provider value={{
                bookmarks,
                chosenBookmarkId,
                setChosenBookmark: handleBookmarkChoice,
                formActive,
                setFormActive: handleFormActiveChange,
                bookmarkFormActive,
                setBookmarkFormActive: handleBookmarkFormActiveChange
            }}>
                {children}
            </BookmarkContext.Provider>
        </>
    )


}