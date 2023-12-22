import {useContext} from "react";
import {BookmarkContext} from "../../../../contexts/bookmarkContext.tsx";
import {InputBox} from "./InputBox.tsx";

export const TaskAdditionForm = () => {
    const {formActive} = useContext(BookmarkContext);
    return (

        <div className={`blur-container ${formActive ? "form-active" : "form-disabled"}`}>
            <form className={"task-addition-form"}>
                <h3>add new task</h3>
                <InputBox/>
                <InputBox/>
                <InputBox/>
                <InputBox/>
            </form>
        </div>
    )
}