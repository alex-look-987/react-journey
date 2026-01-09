import React, { useState } from "react";
import react from '@vitejs/plugin-react';

type elementType = number | any

function Example() {
    const CONDITION: boolean = false
    let elementVariable: elementType;

    // Conditiontal Rendering Types

    // if statement
    if (CONDITION) {
        elementVariable = <div>true</div>
    } else {
        elementVariable = <div>false</div>
    }

    return (
        <>
        <h3>Nothing will be rendered below</h3>
        {elementVariable}
        </>
    )

    // ? (inline)
    // return condition ? <div>true</div> : <div>false</div>;

    // && (inline)
    // return condition && <div>true</div>
    
}

export function DropwdownMenuHook() {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((currentIsOpen) => !currentIsOpen)
    }

    let menu

    if (isOpen) {
        menu = (
            <ul>
                <li>Edit</li>
                <li>Remove</li>
                <li>Archive</li>
            </ul>
        )
    }

    return (
        <div>
            <button onClick={handleClick}>Actions Hook</button>
            {menu}
        </div>
    )

    // Operator ? true: false
    /* 
    return (
    <div>
      <button onClick={handleClick}>Actions</button>
      {isOpen ? (
        <ul>
          <li>Edit</li>
          <li>Remove</li>
          <li>Archive</li>
        </ul>
      ) : null}
    </div>
    );
    */
    
    // Logical && Operator
    /*
    return (
    <div>
      <button onClick={handleClick}>Actions</button>
      {isOpen && (
        <ul>
          <li>Edit</li>
          <li>Remove</li>
          <li>Archive</li>
        </ul>
      )}
    </div>
    );
    */
}

type State = {
    isOpen: boolean
}

export  class DropdownMenuClass extends React.Component<{}, State> {
state = {
        isOpen: false
    }

    handleClick = () => {
        this.setState((state) => {
            return {isOpen: !state.isOpen}
        })
    }

    render(): React.ReactNode {
        let menu: React.ReactNode = null

        if (this.state.isOpen) {
            menu = (
            <ul>
                <li>Edit</li>
                <li>Remove</li>
                <li>Archive</li>
            </ul>
        )
    }

    return (
        <div>
            <button onClick={this.handleClick}>Actions Class</button>
            {menu}
        </div>
        )
    }

    // Operator ? true: false
    /*
    render() {
        return (
            <div>
            <button onClick={this.handleClick}>Actions</button>
            {this.state.isOpen ? (
                <ul>
                <li>Edit</li>
                <li>Remove</li>
                <li>Archive</li>
                </ul>
            ) : null}
            </div>
        );
    }
    */

    // Logical && Operator

    /*
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>Actions</button>
        {this.state.isOpen && (
          <ul>
            <li>Edit</li>
            <li>Remove</li>
            <li>Archive</li>
          </ul>
        )}
      </div>
        );
    }
    */
}

