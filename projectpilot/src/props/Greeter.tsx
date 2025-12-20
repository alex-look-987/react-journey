import { JSX } from "react";

interface GreeterProps {
  first: string;
  last: string
}

function Greeter({ first, last }: GreeterProps): JSX.Element {
  // const { first, last } = props;
  return (
    <h1>
      Hello, {first} {last}
    </h1>
  );
}

export default Greeter