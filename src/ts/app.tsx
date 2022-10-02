import React, { useState, ChangeEvent, MouseEvent } from "react";

import Button from "./button";

export default function App(): JSX.Element {
    let [num, setNum] = useState(0);
    let [even, setEven] = useState(true);

    // TODO: Make this look and act not stupid
    function onChange(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        if (RegExp("^[0-9]+$").test(value)) {
            setNum(parseInt(value));
        }
    }

    function onClick(event: MouseEvent<HTMLButtonElement>): void {
        let req = new XMLHttpRequest();
        req.open("GET", `https://api.isevenapi.xyz/api/iseven/${num}`);
        req.onload = () => {
            interface IsEven {
                iseven: boolean,
                ad: string,
            }
            let resp = JSON.parse(req.responseText) as IsEven;
            console.log(resp.ad);
            setEven(resp.iseven);
        };
        req.send();
    }

    return (
        <React.StrictMode>
            <div>
                <label>Hello! Please type in a number below.</label>
                <input type="number" placeholder="0" maxLength={10} value={num} onChange={onChange} />
                <Button name="Test" callback={onClick} />
                <br />
                {num} is <b>{even ? "even" : "odd"}</b>
            </div>
        </React.StrictMode>
    );
}