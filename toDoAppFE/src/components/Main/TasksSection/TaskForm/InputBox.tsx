import {SectionLabel} from "../../../common/SectionLabel.tsx";
import {ChangeEvent} from "react";

interface Props {
    change?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string;
    label?: string;
    type?: "text" | "date" | "number" | "color" | "submit";
    value?: string | number;
}

export const InputBox = ({name, label, type, value, change}: Props) => {
    return <div className={"input-box"}>
        <SectionLabel>{label}</SectionLabel>
        <input name={name} type={`${type}`} value={value} onChange={change}/>
    </div>
}