import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";


export const AddBookmarkButton = () => {
    const {setBookmarkFormActive} = useContext(BookmarkContext)
    return (
        <div
            className={"bookmark-box add-bookmark-button"}
            onClick={setBookmarkFormActive}
        >
            <h6>Add new</h6>
        </div>
    )
}