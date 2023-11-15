import { SingleTask } from "./SingleTask";

export function TaskList() {
    return (
        <>
            <h5 style={{ fontFamily: "Ubuntu Mono", color: "#303030", padding: "0 1rem 0.5rem" }}>Current tasks</h5>
            <ul className="task-list">

                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
                <SingleTask></SingleTask>
            </ul>
        </>
    );
}
