import { SectionLabel } from "../../common/SectionLabel";
import { SingleTask } from "./SingleTask";


interface Props {
    listName: string;
    tasks: { taskName: string, active: boolean }[];
}
export function TaskList({ listName, tasks }: Props) {
    return (
        <>
            <SectionLabel>{listName}</SectionLabel>
            <ul className="task-list">
                {
                    tasks.map((task, index) => (
                        <SingleTask key={index} taskName={task.taskName} active={task.active} />
                    ))
                }
            </ul>
        </>
    );
}
