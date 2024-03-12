import {SectionLabel} from "../../../common/SectionLabel.tsx";

interface Props {
    text: string;
    type: "text" | "date";
}
export const InputBox = ({text, type}: Props) => {
    return <div className={"input-box"}>
        <SectionLabel>{text}</SectionLabel>
        <input type={`${type}`}/>
    </div>
}