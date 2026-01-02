import React, {useEffect, useState} from "react";

class Clockk extends React.Component {
    // state comes from react component as part of the API React contract

    getTime() {
        return new Date().toLocaleTimeString()
    }

    state = {time: this.getTime()}

    handleClick = () => {
        // hook looks out for the reference of the object
        this.setState({time: this.getTime()})
    }

    render() {
        return (
            <div>
                <p>{this.state.time}</p>
                <button onClick={this.handleClick}>Refresh</button>
            </div>
        )
    }
} 

function getTime() {
    return new Date().toLocaleTimeString()
}

// useEffect Cleanup Example
function Clock() {
    const [time, setTime] = useState<string>(getTime())

    const refresh = () => {setTime(getTime())}

    useEffect(()=> {
        const timerID = setInterval(refresh, 0)

        return () => {clearInterval(timerID)}
    })

    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default Clock