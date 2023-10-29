import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faUser} from "@fortawesome/free-solid-svg-icons";
import {Row} from "../common/Row";
import {MenuBar} from "./MenuBar";
import {MenuElement} from "./MenuElement";
import {useState} from "react";

export const Header = () => {
    const menuItems = ["archive", "current", "future"];
    const [selectedMenuItem, setSelectedMenuItem] = useState("current");
    return (
        <header className={"mainBanner"}>
            <Row>
                <FontAwesomeIcon icon={faBars} size={"xl"} beat/>
                <h1>time manager</h1>
                <FontAwesomeIcon icon={faUser} beat size="xl"/>
            </Row>
            <Row>
                <MenuBar>
                    {
                        menuItems.map(item => <MenuElement
                                text={item}
                                active={item === selectedMenuItem}
                                click={() => setSelectedMenuItem(item)}
                            />
                        )}
                </MenuBar>
            </Row>
        </header>
    )
};