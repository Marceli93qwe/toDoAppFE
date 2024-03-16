import {SectionLabel} from "../../common/SectionLabel";
import {Row} from "../../common/Row";
import {BookmarkBox} from "./BookmarkBox";
import {useContext, useEffect} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {AddBookmarkButton} from "./AddBookmarkButton.tsx";
import {countBookmarkTasks, getChosenBookmarkFromStorage} from "../../../utils/tasksInfo.ts";

export const Bookmarks = () => {
    const {bookmarks, setChosenBookmark, allUsersTasks} = useContext(BookmarkContext);

    useEffect(() => {
        const bookmarkFromStorage = getChosenBookmarkFromStorage();
        if (bookmarkFromStorage) {
            const {bookmarkName, id} = bookmarkFromStorage;
            return setChosenBookmark(id, bookmarkName);
        }
        if (bookmarks?.length) setChosenBookmark(bookmarks[0].id, bookmarks[0].bookmarkName);
    }, [bookmarks])

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
                        tasksAmount={Number(countBookmarkTasks(allUsersTasks, bookmarkId))}
                        setBookmark={() => setChosenBookmark(bookmarkId, bookmarkName)}
                    />
                ))}
                <AddBookmarkButton/>
            </Row>
        </>
    );
}

