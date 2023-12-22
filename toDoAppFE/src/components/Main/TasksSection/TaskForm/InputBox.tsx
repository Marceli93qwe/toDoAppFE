import {SectionLabel} from "../../../common/SectionLabel.tsx";

export const InputBox = () => {
    return <div className={"input-box"}>
        <SectionLabel>Task name</SectionLabel>
        <input type="text"/>
    </div>
}