import React, {SyntheticEvent} from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

interface State {
    currentEnthusiasm: number
}

class Hello extends React.Component<Props, State> {
    // state its an object with a currentEnthusiasm property (see State interface)
    // if Hello component starts empty, default value as 1
    state = {currentEnthusiasm: this.props.enthusiasmLevel || 1}

    updateEnthusiasm(change: number) {
        // setState takes current value inside function through currenState argument
        // same resource/behaviour as state in the return of the function inside setState
         this.setState((currentState) => ({
            currentEnthusiasm:
            Math.max(0, currentState.currentEnthusiasm + change)
        }));
    } 

    onIncrement = (event: SyntheticEvent) => {
        console.log(event.currentTarget)
        this.updateEnthusiasm(1);
    }

    onDecrement = (event: SyntheticEvent) => {
        console.log(event.currentTarget)
        this.updateEnthusiasm(-1);
    }

    getExclamationMarks(numChars: number) {
        return Array(numChars + 1).join("!");
    }
    
    render() {
        // property from props. takes name property and declare variable with same name
        const {name} = this.props; 

        return (
        <div className="hello">
            <div className="greeting">
            Hello {name}
            {this.state.currentEnthusiasm > 0 && this.getExclamationMarks(this.state.currentEnthusiasm)}
            </div>
            <button onClick={this.onIncrement}>Increment</button>
            <button onClick={this.onDecrement} disabled = {this.state.currentEnthusiasm === 0}>Decrement</button>
        </div>
        );
    }
}

export default Hello;

