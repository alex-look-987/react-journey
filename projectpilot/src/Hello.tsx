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
         this.setState((currentState) => ({
            currentEnthusiasm: 
            Math.max(0, currentState.currentEnthusiasm + change)
        }));
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
        const {name} = this.props;

        return (
        <div className="hello">
            <div className="greeting">
            Hello {name}
            {this.state.currentEnthusiasm > 0 && getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement} disabled = {this.state.currentEnthusiasm === 0}>Decrement</button>
        </div>
        );
    }
}

export default Hello;

