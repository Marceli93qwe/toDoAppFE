import {InputBox} from "../TasksSection/TaskForm/InputBox.tsx";
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {reload} from "../../../utils/reloader.ts";

export const AddBookmarkForm = () => {
    const {bookmarkFormActive, setBookmarkFormActive} = useContext(BookmarkContext);
    const [bookmarkName, setBookmarkName] = useState("");

    const handleBookmarkFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch("http://192.168.31.115:3001/users/bookmarks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4`
            },
            body: JSON.stringify({bookmarkName})
        });
        // refer user to main page after he adds the bookmark
        reload();
    }

    return (
        <div
            className={`add-bookmark-form-container ${bookmarkFormActive ? "bookmark-form-active" : "bookmark-form-disabled"}`}>
            <form onSubmit={handleBookmarkFormSubmit} className={"add-bookmark-form"}>
                <h3>add new bookmark</h3>
                <InputBox
                    change={(e: ChangeEvent<HTMLInputElement>) => {
                        setBookmarkName(e.target.value);
                    }}
                    name={"bookmarkName"}
                    label={"Bookmark name"}
                    type={"text"}
                    value={bookmarkName}
                />
            </form>
            {/*BUTTON BELOW WILL BE USED ONLY TO CLOSE THE BOOKMARK ADDITION FORM*/}
            <FontAwesomeIcon onClick={setBookmarkFormActive} icon={faCircleXmark} className={"bookmark-addition-button"}
                             size={"3x"}/>
        </div>
    )
}