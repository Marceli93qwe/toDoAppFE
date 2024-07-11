import {MouseEventHandler} from "react";
import {getTheme} from "../../../utils/styleFunctions.ts";

interface Props {
    bookmarkName: string;
    tasksAmount: number;
    setBookmark: MouseEventHandler;
}

export const BookmarkBox = ({bookmarkName, tasksAmount, setBookmark}: Props) => {
    const theme = getTheme();
    return (
        <div className={"bookmark-box"} onClick={setBookmark}>
            <p>{tasksAmount} tasks</p>
            <h5>{bookmarkName}</h5>
            <div className={"progress-bar"}>
                <div className={"progress " + `${theme}-bookmark-progress`}></div>
            </div>
        </div>
    )
}