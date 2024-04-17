import "./user-menu-variation.css"
import {TopPanel} from "./TopPanel.tsx";
import {BottomPanel} from "./BottomPanel.tsx";
import {useContext} from "react";
import {InterfaceContext} from "../../contexts/InterfaceContext.ts";

export const UserMenuVariation = () => {
    const {userMenuDisplay} = useContext(InterfaceContext)

    return (
        <div className="user-menu-variation" style={{left: `${userMenuDisplay ? "0" : "-100%"}`}}>
            <TopPanel/>
            <BottomPanel/>
        </div>
    )
}