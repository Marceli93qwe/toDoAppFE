
import { TaskList } from "./TaskList";

export const TasksSection = () => {

    // FETCHING DATA FROM OUR BE SERVER
    return (
        <TaskList listName="Current tasks" tasks={[{ taskName: "Zakupy", active: true }, { taskName: "Umyć się", active: false }]}></TaskList>
    );
}
