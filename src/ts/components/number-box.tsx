import { ChangeEvent, MouseEvent, useState } from "react";

import Button from "./button";
import ErrorText from "./error-text";

export default function NumberBox(
    props: {
        caption: string,
        button: string,
        max: number,
        callback: (num: number) => void,
    }
): JSX.Element {
    let [err, setErr] = useState(false);
    let [str, setStr] = useState("");
    function onClick(event: MouseEvent<HTMLButtonElement>): void {
        if (str === "") {
            setErr(true);
            return;
        }
        setErr(false);

        props.callback(parseInt(str));
    }

    function onChange(event: ChangeEvent<HTMLInputElement>): void {
        const input = event.target.value;
        /* I assume this is a pretty weird way of doing this,
        * but it's concise-ish so I'm not willing to change it.
        */
        if (RegExp("^([1-9][0-9]*|[0-9]|)$").test(input)) {
            setStr(input);
        }
    }
    return (
        <div className="centered">
            {err ? <ErrorText caption="Enter a number!" /> : <></>}
            <div className="centered">
                <input value={str} placeholder={props.caption} maxLength={props.max} onChange={onChange} />
                <Button name={props.button} callback={onClick} />
            </div>
        </div>
    );
}
