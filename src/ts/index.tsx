import ReactDOM from "react-dom/client";

import Meta from "./meta";
import App from "./app";

import "../css/index.css";

function main(): void {
    const doc = document;
    doc.title = Meta.name;

    let root = ReactDOM.createRoot(doc.getElementById("react") as HTMLElement);
    root.render(
        <App />
    );
}

main();
