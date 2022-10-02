interface Props {
    label: string,
    placeholder: string,
    maxLength: number,
}

export default function NumberBox(props: Props): JSX.Element {
    return (
        <div>
            <label>{props.label}</label>
            <input type="number" placeholder={props.placeholder} maxLength={props.maxLength} />
        </div>
    );
}