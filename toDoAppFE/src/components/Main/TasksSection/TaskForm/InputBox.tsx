import {SectionLabel} from "../../../common/SectionLabel.tsx";
import {ChangeEvent} from "react";

interface Props {
    change?: (e: ChangeEvent<HTMLInputElement>) => void
    name?: string;
    label?: string;
    type?: "text" | "date" | "number" | "color" | "submit" | "password";
    value?: string | number;
    maxLength?: number;
}

export const InputBox = ({name, label, type, value, change, maxLength}: Props) => {
    return <div className={"input-box"}>
        <SectionLabel>{label}</SectionLabel>
        <input maxLength={maxLength} name={name} type={`${type}`} value={value} onChange={change}/>
    </div>
}