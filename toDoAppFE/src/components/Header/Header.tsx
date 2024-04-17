import "./header.css"
import {LeftPanel} from "./LeftPanel";
import {RightPanel} from "./RightPanel";
import {InterfaceContextProvider} from "../contextProviders/InterfaceContextProvider.tsx";

export const Header = () => {
    return (
        <InterfaceContextProvider>
            <header>
                <LeftPanel/>
                <div className={"black-overlay"}/>
                <RightPanel/>
            </header>
        </InterfaceContextProvider>
    )
}