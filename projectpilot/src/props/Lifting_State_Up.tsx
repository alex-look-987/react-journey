import React, { useState } from "react"

interface ButtonProps {
    onClickFunction: () => void
}

interface ResultProps {
    value: number
}

interface AppState {
    counter: number
}

interface AppProps {}

// Function Component Example

function ButtonFunc({onClickFunction}: ButtonProps) {
    return <button onClick={onClickFunction}>+1</button>
}

const Result = ({value}: ResultProps) => {
    return <div>Result: {value}</div>
}

export function LiftingApp() {
    const [counter, setCounter] = useState<number>(0)

    const incrementCounter = () => {
        setCounter((previousCounter)=>previousCounter+1)
    }

    return (
        <div>
            <ButtonFunc onClickFunction={incrementCounter}/>
            <Result value={counter}/>
        </div>
    )
}

// Class Component Example

class ButtonClass extends React.Component<ButtonProps,{}> {
    render(): React.ReactNode {  
        return <button onClick={this.props.onClickFunction}>+1</button>
    }
}

const ResultClass = (props: ResultProps) => {
    return <div>Result Class: {props.value} </div>    
}

export class LiftingAppClass extends React.Component<AppProps,AppState>{
    state: AppState = {
        counter: 0
    }

    incrementCounter = (): void => {
        this.setState((prevState)=> ({
                counter: prevState.counter+1   
        }))
    }

    render(): React.ReactNode {
        return (
            <div>
            <ButtonClass onClickFunction={this.incrementCounter}/>
            <ResultClass value={this.state.counter}/>
        </div>
        )
    }
}

