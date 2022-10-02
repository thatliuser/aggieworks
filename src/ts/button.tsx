import React from "react";

interface ButtonProps {
    name: string,
    callback: React.MouseEventHandler<HTMLButtonElement>
}

export default class Button extends React.Component<ButtonProps> {
    render(): React.ReactNode {
        return (
            <button onClick={this.props.callback}>
                {this.props.name}
            </button>
        );
    }
}
