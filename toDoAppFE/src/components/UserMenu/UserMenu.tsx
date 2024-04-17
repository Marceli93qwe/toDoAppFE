import "./user-menu.css"
import {TopPanel} from "./TopPanel.tsx";
import {BottomPanel} from "./BottomPanel.tsx";
import {InfoDisplay} from "./InfoDisplay.tsx";

export const UserMenu = () => {
    return (
        <div className={"user-menu"}>
            <header>
                <TopPanel/>
                <BottomPanel/>
            </header>
            <main>
                <h3>
                    your data
                </h3>
                <InfoDisplay background={"assets/mountains.webp"}>882 tasks created</InfoDisplay>
                <InfoDisplay background={"assets/header_bg.jpg"}>with us since 2024.03.02</InfoDisplay>
                <InfoDisplay background={"assets/mountains2.webp"}>102 bookmarks ever made</InfoDisplay>
                <h3>settings</h3>
                <InfoDisplay background={"assets/mountains4.webp"}>manage your data</InfoDisplay>
                <InfoDisplay background={"assets/mountains3.webp"}>set the application theme</InfoDisplay>
                <InfoDisplay background={"assets/mountains3.webp"}>manage your personal data</InfoDisplay>
            </main>
        </div>
    )
}