import { SectionLabel } from "../../common/SectionLabel";
import { Row } from "../../common/Row";
import { BookmarkBox } from "./BookmarkBox";
import { useEffect, useState } from "react";
import { bookmarkRecord } from "../../../types/bookmarkRecord";

export const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState<bookmarkRecord[] | null>(null);
    const [chosenBookmark, setChosenBookmark] = useState<bookmarkRecord | null>(null);
    useEffect(() => {
        (async () => {
            const bookmarksFromBE = await fetch("http://localhost:3001/users/bookmarks", {
                method: "GET",
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0OTZkYzk3LWZiMWItNDQyNy1iZDcyLWI1Nzg5YmIxY2FmOSIsImlhdCI6MTcwMDA4NjI0Nn0.N-NBmKtlyYdcesmr-lnu6rFOmGi5U0u1vywty6Hbr_0`,
                    'Content-type': "application/json",
                }
            })
            const { bookmarks } = await bookmarksFromBE.json();
            setBookmarks(bookmarks);
            console.log(bookmarks);
        })()
    }, [])
    return (
        <>
            <SectionLabel>Bookmarks</SectionLabel>
            <Row style={{ overflowX: "scroll", whiteSpace: "nowrap", gap: "1rem", padding: "0.7rem 1rem" }}>
                {bookmarks?.map(({ bookmarkName }, index) => <BookmarkBox key={index} bookmarkName={bookmarkName} tasksAmount={26} />)}
            </Row>
        </>
    );
}
