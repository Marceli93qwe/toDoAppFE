import {removeBookmark} from "../../../utils/DataGetter.ts";
import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";

export const RemoveBookmarkButton = () => {
    const {chosenBookmarkId} = useContext(BookmarkContext)
    return (
        <button
            onClick={() => removeBookmark(chosenBookmarkId)}
            className={"remove-bookmark-button"}
            style={
                {
                    display: chosenBookmarkId ? "block" : "none"
                }
            }
        >
            remove bookmark
        </button>
    )
}