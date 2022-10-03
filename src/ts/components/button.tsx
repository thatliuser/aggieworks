import { MouseEventHandler } from "react";

export default function Button(
    props: {
        name: string,
        callback: MouseEventHandler<HTMLButtonElement>,
    }
): JSX.Element {
    return (
        <button onClick={props.callback}>
            {props.name}
        </button>
    );
}
