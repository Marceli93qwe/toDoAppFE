import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AdditionButton = () => {
    return (
        <FontAwesomeIcon icon={faCirclePlus} className="main-addition-button" size="3x" />
    );
}

export default AdditionButton;