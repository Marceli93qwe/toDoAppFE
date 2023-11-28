import {MouseEventHandler} from "react";

interface Props {
    bookmarkName: string;
    tasksAmount: number;
    setBookmark: MouseEventHandler;
}

export const BookmarkBox = ({bookmarkName, tasksAmount, setBookmark}: Props) => {
    return (
        <div className={"bookmark-box"} onClick={setBookmark}>
            <p>{tasksAmount} tasks</p>
            <h5>{bookmarkName}</h5>
            <div className={"progress-bar"}>
                <div className="progress"></div>
            </div>
        </div>
    )
}