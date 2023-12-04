import {faCirclePlus, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import {BookmarkContext} from "../../contexts/bookmarkContext.tsx";

export const AdditionButton = () => {
    const {formActive, setFormActive} = useContext(BookmarkContext);
    return (
        <FontAwesomeIcon onClick={setFormActive} icon={formActive ? faCircleXmark : faCirclePlus}
                         className="main-addition-button" size="3x"/>
    );
}

