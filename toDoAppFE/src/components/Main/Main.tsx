import { Bookmarks } from "./BookmarksSection/Bookmarks";
import { TasksSection } from "./TasksSection/TasksSection";
import "./main.css"

export const Main = () => {

    return (
        <main>
            <Bookmarks />
            <TasksSection />
        </main>
    )
}