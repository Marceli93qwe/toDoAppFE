import AdditionButton from "../AdditionButton";
import { Categories } from "./CategoriesSection/Categories";
import "./main.css"
import { TaskList } from "./TasksSection/TaskList";

export const Main = () => {
    return (
        <main>
            <Categories />
            <TaskList />
        </main>
    )
}