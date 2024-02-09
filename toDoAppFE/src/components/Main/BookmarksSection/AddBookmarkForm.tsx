import {InputBox} from "../TasksSection/TaskForm/InputBox.tsx";
import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

export const AddBookmarkForm = () => {
    const {bookmarkFormActive, setBookmarkFormActive} = useContext(BookmarkContext);

    return (
        <div
            className={`add-bookmark-form-container ${bookmarkFormActive ? "bookmark-form-active" : "bookmark-form-disabled"}`}>
            <form className={"add-bookmark-form"}>
                <h3>add new bookmark</h3>
                <InputBox change={() => console.log("ok")} name={"bookmarkName"} label={"Bookmark name"} type={"text"}
                          value={""}/>
            </form>
            {/*BUTTON BELOW WILL BE USED ONLY TO CLOSE THE BOOKMARK ADDITION FORM*/}
            <FontAwesomeIcon onClick={setBookmarkFormActive} icon={faCircleXmark} className={"bookmark-addition-button"}
                             size={"3x"}/>
        </div>
    )
}