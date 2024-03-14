import {SectionLabel} from "../../common/SectionLabel";
import {Row} from "../../common/Row";
import {BookmarkBox} from "./BookmarkBox";
import {useContext, useEffect} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {AddBookmarkButton} from "./AddBookmarkButton.tsx";
import {BookmarkRecord} from "../../../types/BookmarkRecord.ts";

export const Bookmarks = () => {
    const {bookmarks, setChosenBookmark} = useContext(BookmarkContext);

    useEffect(() => {
        const bookmarkFromStorage = JSON.parse(localStorage.getItem("chosenBookmark") as string) as BookmarkRecord;
        if (bookmarkFromStorage) {
            const {bookmarkName, id} = bookmarkFromStorage;
            return setChosenBookmark(id, bookmarkName);
        }
        if (bookmarks) setChosenBookmark(bookmarks[0].id, bookmarks[0].bookmarkName);
    }, [])

    return (
        <>
            <SectionLabel>Bookmarks</SectionLabel>
            <Row style={{overflowX: "scroll", whiteSpace: "nowrap", gap: "1rem", padding: "0.7rem 1rem"}}>
                {bookmarks?.map(({
                                     id: bookmarkId,
                                     bookmarkName
                                 }, index) => (
                    <BookmarkBox
                        key={index}
                        bookmarkName={bookmarkName}
                        tasksAmount={26}
                        setBookmark={() => setChosenBookmark(bookmarkId, bookmarkName)}
                    />
                ))}
                <AddBookmarkButton/>
            </Row>
        </>
    );
}

