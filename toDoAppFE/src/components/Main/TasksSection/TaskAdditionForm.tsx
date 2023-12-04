import {useContext} from "react";
import {BookmarkContext} from "../../../contexts/bookmarkContext.tsx";

export const TaskAdditionForm = () => {
    const {formActive} = useContext(BookmarkContext);
    return (

        <div className={`blur-container ${formActive ? "form-active" : "form-disabled"}`}>
            <form className={"task-addition-form"}>

            </form>
        </div>
    )
}