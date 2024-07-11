import "./header.css"
import {LeftPanel} from "./LeftPanel";
import {RightPanel} from "./RightPanel";
import {getTheme} from "../../utils/styleFunctions.ts";

export const Header = () => {
    const theme = getTheme();
    return (
        <header className={theme}>
            <LeftPanel/>
            <div className={"black-overlay"}/>
            <RightPanel/>
        </header>
    )
}