import React, { JSX, SyntheticEvent } from "react";

// Arrowing a function when its a this. method/component of the Class
// props/handlers
// methods outside of direct method stream

type ButtonClickEvent = React.MouseEvent<HTMLButtonElement> 
type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement> 

class BindingComp extends React.Component {
    protected handleClick: ButtonClickHandler = (event: ButtonClickEvent) => {
        console.log(this)
    }

    render(): React.ReactNode {
        return (
            <button onClick={this.handleClick} type="button">
            </button>
        )
    }
}

function ExplainBindingsComponent() {
  const memberValue = 'test';
  function handleClick() {
    console.log(memberValue);
  }

  return (
    <button onClick={handleClick} type="button">
      Click Me
    </button>
  );
}

function BindingsComponent() {
  const memberValue = 'test';
  const handleClick = () => {
    console.log(memberValue);
  };

  return (
    <button onClick={handleClick} type="button">
      Click Me
    </button>
  );
}
  