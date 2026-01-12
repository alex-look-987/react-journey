import { useState } from "react";

function TestAppParent() {
  return <Parent />;
}

function Parent() {
  const [words, setWords] = useState('');

  const handleClick = () => {
    setWords('Did you do your homework?');
  };

  return (
    <div>

      <h1>Parent (Parent-To-Child)</h1>
      <button onClick={handleClick}>Ask</button>
      <Child hears={words} />
    </div>
  );
}

function Child(props: ChildProps) {
  return (
    <div>
      <h2>Child</h2>
      <p>{props.hears}</p>
    </div>
  );
}

interface ChildProps {
    hears: string
}

export default TestAppParent