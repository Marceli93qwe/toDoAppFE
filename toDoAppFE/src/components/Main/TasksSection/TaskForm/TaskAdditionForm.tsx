import {FormEventHandler, useContext} from "react";
import {BookmarkContext} from "../../../../contexts/bookmarkContext.tsx";
import {InputBox} from "./InputBox.tsx";
import {AddTask} from "../../../../utils/DataPoster.ts";

export const TaskAdditionForm = () => {
    const {formActive, chosenBookmarkId} = useContext(BookmarkContext);
    const handleFormSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        AddTask({})
    }
    return (
        <div className={`blur-container ${formActive ? "form-active" : "form-disabled"}`}>
            <form className={"task-addition-form"} onSubmit={handleFormSubmit} >
                <h3>add new task</h3>
                <InputBox text={"Task name"}/>
                <InputBox text={"Description"}/>
                <InputBox text={"Deadline"} type={"date"}/>
            </form>
        </div>
    )
}