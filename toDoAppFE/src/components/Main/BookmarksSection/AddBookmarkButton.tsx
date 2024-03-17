import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {Button} from "../../common/button.tsx";


export const AddBookmarkButton = () => {
    const {setBookmarkFormActive} = useContext(BookmarkContext)
    return (
        <Button click={setBookmarkFormActive} text={"Add new"}/>
    )
}