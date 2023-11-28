import {SectionLabel} from "../../common/SectionLabel";
import {Row} from "../../common/Row";
import {BookmarkBox} from "./BookmarkBox";
import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";

export const Bookmarks = () => {
    const {bookmarks, setChosenBookmark} = useContext(BookmarkContext);
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
                        setBookmark={() => setChosenBookmark(bookmarkId)}
                    />
                ))}
            </Row>
        </>
    );
}

