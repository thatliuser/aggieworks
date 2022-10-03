import React, { useState, ChangeEvent, MouseEvent } from "react";

import Button from "./button";
import isEven from "./is-even";
import Meta from "./meta";

type Even = "even" | "odd";

export default function App(): JSX.Element {
    let [str, setStr] = useState("");
    let [even, setEven] = useState<Even>("even");
    let [num, setNum] = useState(0);

    function changeNum(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        /* I assume this is a pretty weird way of doing this,
        * but it's concise-ish so I'm not willing to change it.
        */
        if (RegExp("^([1-9][0-9]*|[0-9]|)$").test(value)) {
            setStr(value);
        }
    }

    function update(event: MouseEvent<HTMLButtonElement>): void {
        if (str === "") {
            alert("Enter a number!");
            return;
        }

        const parsed = parseInt(str);
        isEven(parsed).then((value) => {
            setNum(parsed);
            setEven(value.iseven ? "even" : "odd");
        });
    }

    return (
        <React.StrictMode>
            <h1>{Meta.name}</h1>
            <div className="centered">
                <input maxLength={6} value={str} placeholder="Your number" onChange={changeNum} />
                <Button name="Go!" callback={update} />
            </div>
            <div className="centered">
                <small>Brought to you by the <a href="https://isevenapi.xyz/" target="_blank">isEven API</a></small>
            </div>
            <div className="stats centered">
                {num} is <b>{even}</b>
            </div>
        </React.StrictMode>
    );
}
