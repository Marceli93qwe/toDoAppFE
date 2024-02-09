import {Bookmarks} from "./BookmarksSection/Bookmarks";
import {TasksSection} from "./TasksSection/TasksSection";
import "./main.css"
import {BookmarkContextProvider} from "../contextProviders/BookmarkContextProvider.tsx";
import {AdditionButton} from "./AdditionButton.tsx";
import {TaskAdditionForm} from "./TasksSection/TaskForm/TaskAdditionForm.tsx";
import {AddBookmarkForm} from "./BookmarksSection/AddBookmarkForm.tsx";

export const Main = () => {

    return (
        <main>
            <BookmarkContextProvider>
                <AddBookmarkForm/>
                <TaskAdditionForm/>
                <Bookmarks/>
                <TasksSection/>
                <AdditionButton/>
            </BookmarkContextProvider>
        </main>
    )
}