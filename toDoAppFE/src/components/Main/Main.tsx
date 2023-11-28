import {Bookmarks} from "./BookmarksSection/Bookmarks";
import {TasksSection} from "./TasksSection/TasksSection";
import "./main.css"
import {BookmarkContextProvider} from "../contextProviders/BookmarkContextProvider.tsx";

export const Main = () => {

    return (
        <main>
            <BookmarkContextProvider>
                <Bookmarks/>
                <TasksSection/>
            </BookmarkContextProvider>
        </main>
    )
}