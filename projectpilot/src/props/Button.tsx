import React, { JSX } from "react";

class Button extends React.Component {
    constructor (props: {}) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        console.log("Button clicked", event);
    } 
    
    render(): JSX.Element {
        return (
            <button onClick={this.handleClick}>
            Click Me!!
            </button>)
    }
}

export default Button