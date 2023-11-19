
interface Props {
    bookmarkName: string;
    tasksAmount: number;
}

export const BookmarkBox = ({ bookmarkName, tasksAmount }: Props) => {
    return (
        <div className={"bookmark-box"}>
            <p>{tasksAmount} tasks</p>
            <h5>{bookmarkName}</h5>
            <div className={"progress-bar"}>
                <div className="progress"></div>
            </div>
        </div>
    )
}