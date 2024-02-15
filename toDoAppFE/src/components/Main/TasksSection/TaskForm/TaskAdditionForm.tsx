import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {BookmarkContext} from "../../../../contexts/bookmarkContext.tsx";
import {InputBox} from "./InputBox.tsx";
import {reload} from "../../../../utils/reloader.ts";

export const TaskAdditionForm = () => {
    const {formActive, chosenBookmarkId} = useContext(BookmarkContext);
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`http://localhost:3001/users/bookmarks/${chosenBookmarkId}/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImEzZDYwNTc4LWM2ZWEtNDlkNC1hNTZiLTI3YjY1OTZjYmU1NyIsImlhdCI6MTcwNjc4ODkxM30.w0hFeHXasU4TDF_F8oJ88dbzMGj69hthSceCsQCT6S4`,
                },
                body: JSON.stringify(
                    {
                        taskName: formState.taskName,
                        description: formState.description,
                        deadlineDate: formState.deadlineDate,
                        priority: formState.priority,
                        color: formState.color,
                        active: false,
                    }
                )
            }
        )
        reload();
    }

    return (

        <div className={`blur-container ${formActive ? "form-active" : "form-disabled"}`}>
            <form onSubmit={handleSubmit} className={"task-addition-form"}>
                <h3>add new task</h3>
                <InputBox change={handleInputChange} label={"Task Name"} name={"taskName"} value={formState.taskName}
                          type={"text"}/>
                <InputBox change={handleInputChange} label={"Description"} name={"description"}
                          value={formState.description} type={"text"}/>
                <InputBox change={handleInputChange} label={"Dead-line date"} name={"deadlineDate"}
                          value={formState.deadlineDate} type={"date"}/>
                <InputBox change={handleInputChange} label={"Priority"} name={"priority"} value={formState.priority}
                          type={"number"}/>
                <InputBox change={handleInputChange} label={"Color"} name={"color"} value={formState.color}
                          type={"color"}/>
                <InputBox type={"submit"}/>
            </form>
        </div>
    )
}