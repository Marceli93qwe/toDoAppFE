import {getTheme} from "../../utils/styleFunctions.ts";

interface Props {
    click: () => void;
    text: string;
}

export const Button = ({click, text}: Props) => {
    const theme = getTheme();
    return (
        <div
            className={"bookmark-box add-bookmark-button " + `${theme}-btn`}
            onClick={click}
        >
            <h6>{text}</h6>
        </div>
    )
}