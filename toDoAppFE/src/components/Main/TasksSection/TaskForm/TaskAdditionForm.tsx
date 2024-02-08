import {ChangeEvent, useContext, useState} from "react";
import {BookmarkContext} from "../../../../contexts/bookmarkContext.tsx";
import {InputBox} from "./InputBox.tsx";

export const TaskAdditionForm = () => {
    const {formActive} = useContext(BookmarkContext);
    const [formState, setFormState] = useState({
        taskName: "",
        description: "",
        deadlineDate: "",
        priority: "",
        color: "#000000",
    })
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormState(prevState => {
            return {
            ...prevState,
                [e.target.name]: e.target.value
            }
        });
    }
    return (

        <div className={`blur-container ${formActive ? "form-active" : "form-disabled"}`}>
            <form className={"task-addition-form"}>
                <h3>add new task</h3>
                <InputBox change={handleInputChange} label={"Task Name"} name={"taskName"} value={formState.taskName} type={"text"}/>
                <InputBox change={handleInputChange} label={"Description"} name={"description"} value={formState.description} type={"text"}/>
                <InputBox change={handleInputChange} label={"Dead-line date"} name={"deadlineDate"} value={formState.deadlineDate} type={"date"}/>
                <InputBox change={handleInputChange} label={"Priority"} name={"priority"} value={formState.priority} type={"number"}/>
                <InputBox change={handleInputChange} label={"Color"} name={"color"} value={formState.color} type={"color"}/>
            </form>
        </div>
    )
}