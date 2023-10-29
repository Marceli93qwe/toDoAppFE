interface Props {
    text: string,
    active: boolean,
    click: () => void;
}

export const MenuElement = ({text, active, click}: Props) => {
    return (
        <li onClick={click} className={active ? "active" : ""}>
            {text}
        </li>
    )
}