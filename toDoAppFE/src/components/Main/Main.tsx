import {Bookmarks} from "./BookmarksSection/Bookmarks";
import {TasksSection} from "./TasksSection/TasksSection";
import "./main.css"
import {AdditionButton} from "./AdditionButton.tsx";
import {TaskAdditionForm} from "./TasksSection/TaskForm/TaskAdditionForm.tsx";
import {AddBookmarkForm} from "./BookmarksSection/AddBookmarkForm.tsx";
import {useContext} from "react";
import {BookmarkContext} from "../../contexts/bookmarkContext.tsx";

export const Main = () => {
    const {chosenBookmarkName} = useContext(BookmarkContext)
    return (
        <main>
            <AddBookmarkForm/>
            <TaskAdditionForm/>
            <Bookmarks/>
            <TasksSection/>
            {
                chosenBookmarkName
                    ?
                    <AdditionButton/>
                    :
                    <></>
            }
        </main>
    )
}