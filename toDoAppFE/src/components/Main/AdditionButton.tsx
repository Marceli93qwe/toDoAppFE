import {faCirclePlus, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useContext} from "react";
import {BookmarkContext} from "../../contexts/bookmarkContext.tsx";
import {getTheme} from "../../utils/styleFunctions.ts";

export const AdditionButton = () => {
    const {formActive, setFormActive} = useContext(BookmarkContext);
    const theme = getTheme();
    return (
        <FontAwesomeIcon
            onClick={setFormActive}
            icon={formActive ? faCircleXmark : faCirclePlus}
            className={"main-addition-button " + `${theme}-plus-btn`} size="3x"
        />
    );
}

