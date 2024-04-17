import "./header.css"
import {LeftPanel} from "./LeftPanel";
import {RightPanel} from "./RightPanel";

export const Header = () => {
    return (
        <header>
            <LeftPanel/>
            <div className={"black-overlay"}/>
            <RightPanel/>
        </header>
    )
}