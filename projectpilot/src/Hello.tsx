import React, {SyntheticEvent} from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number
}

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}

class Hello extends React.Component<Props, State> {
    state = {currentEnthusiasm: this.props.enthusiasmLevel || 1}

    updateEnthusiasm(change: number) {
        this.setState((currentState) => {
            return {currentEnthusiasm: currentState.currentEnthusiasm + change};
        });
    } 

    onIncrement = (event: SyntheticEvent) => {
        console.log(event)
        this.updateEnthusiasm(1);
    }

    onDecrement = (event: SyntheticEvent) => {
        console.log(event.target)
        this.updateEnthusiasm(-1);
    }
    
    render() {
        const { name} = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return (
        <div className="hello">
            <div className="greeting">
            Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement}>Decrement</button>
        </div>
        );
    }
}

export default Hello;

