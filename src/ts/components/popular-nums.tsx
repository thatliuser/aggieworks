import { memo } from "react";
import NumCard from "./num-card";

function PopularNums(
    props: {
        count: number,
    }
): JSX.Element {
    let nums: Array<JSX.Element> = []
    for (let i = 0; i < props.count; ++i) {
        let num = Math.floor(Math.random() * 999999);
        nums.push(<NumCard rank={i + 1} num={num} key={num} />);
    }

    // Annoyingly, it doesn't seem like there's a standard way to make a scrollbar. Oh well.
    return (
        <div className="centered">
            <b>Most Popular Numbers</b>
            <div className="nums">
                {nums}
            </div>
        </div>
    );
}

// This is a static component! Don't recreate it when the DOM is updated.
export default memo(PopularNums);
