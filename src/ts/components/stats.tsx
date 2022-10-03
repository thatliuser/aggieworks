import { useState } from "react";

export default function Stats(
    props: {
        num: number,
        even: boolean,
    }
): JSX.Element {
    return (
        <div className="stats centered">
            {props.num} is <b>{props.even ? "even" : "odd"}!</b>
        </div>
    )
}
