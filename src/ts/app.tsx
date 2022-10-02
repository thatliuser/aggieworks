import React from "react";
import Button from "./button";

export default class App extends React.Component {
    onClick(event: React.MouseEvent<HTMLElement>) {

    }

    render(): React.ReactNode {
        return (
            <React.StrictMode>
                <div>
                    Hello!
                    <br />
                    <Button name="Test" callback={this.onClick} />
                </div>
            </React.StrictMode>
        );
    }
}