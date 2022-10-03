import { useState } from "react";

import { isEven } from "../api/is-even";

export default function NumCard(
    props: {
        rank: number,
        num: number,
    }
): JSX.Element {
    let [even, setEven] = useState("Loading");
    isEven(props.num).then(
        (value) => {
            setEven(value.iseven ? "Even" : "Odd");
        }
    );
    return (
        <div className="num">
            <h2>{`#${props.rank}`}</h2>
            {props.num} <br />
            <b>{even}!</b>
        </div>
    );
}
