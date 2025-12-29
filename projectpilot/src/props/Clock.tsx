import React, {useState} from "react";

class Clock extends React.Component {
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

export default Clock