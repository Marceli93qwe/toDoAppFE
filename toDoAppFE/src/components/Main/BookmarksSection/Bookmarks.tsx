import {SectionLabel} from "../../common/SectionLabel";
import {Row} from "../../common/Row";
import {BookmarkBox} from "./BookmarkBox";
import {useEffect, useState} from "react";
import {BookmarkRecord} from "../../../types/BookmarkRecord";
import {getBookmarks} from "../../../utils/DataGetter";

export const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState<BookmarkRecord[] | null>(null);
    const [chosenBookmarkId, setChosenBookmarkId] = useState<string | null>(null);
    useEffect(() => {
        console.log(chosenBookmarkId)
    }, [chosenBookmarkId]);
    // FETCH USER'S BOOKMARKS FROM DATABASE
    useEffect(() => {
        (async () => {
            setBookmarks(await getBookmarks());
        })()
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
                        setBookmark={() => setChosenBookmarkId(bookmarkId)}
                    />
                ))}
            </Row>
        </>
    );
}

