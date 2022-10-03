import React, { useState } from "react";

import PopularNums from "./components/popular-nums";
import NumberBox from "./components/number-box";
import Stats from "./components/stats";

import Meta from "./meta";
import { isEven } from "./api/is-even";

export default function App(): JSX.Element {
    let [num, setNum] = useState(0);
    let [even, setEven] = useState(true);

    function onSubmit(input: number): void {
        isEven(input).then(
            (value) => {
                setEven(value.iseven)
                setNum(input)
            }
        )
    }

    return (
        <React.StrictMode>
            <h1>{Meta.name}</h1>
            <NumberBox caption="Your number" button="Go!" max={6} callback={onSubmit} />
            <div className="centered">
                <small>Brought to you by the <a href="https://isevenapi.xyz/" target="_blank">isEven API</a></small>
            </div>
            <Stats num={num} even={even} />
            <PopularNums count={10} />
        </React.StrictMode>
    );
}
