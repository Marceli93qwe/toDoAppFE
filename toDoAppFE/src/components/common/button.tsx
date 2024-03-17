interface Props {
    click: () => void;
    text: string;
}

export const Button = ({click, text}: Props) => {
    return (
        <div
            className={"bookmark-box add-bookmark-button"}
            onClick={click}
        >
            <h6>{text}</h6>
        </div>
    )
}