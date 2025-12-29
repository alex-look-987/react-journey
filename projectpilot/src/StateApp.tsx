import './App.css';
import Clock from './props/Clock.tsx';
import {JSX, useState} from "react";

function StateApp(): JSX.Element {
  
  const [data, setData] = useState<number[]>([])
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  function handleClick(): void {
    // message = Hi! //does not update DOM
    setMessage("Im here!")
  }

  function loadData(): void {
    setLoading(true)

    setTimeout(() => {
      setLoading(false);
      setData([1, 2, 3, 4]);
    }, 3000)
  }

  return (
    <div className="container">
      <Clock/>

      <button onClick={loadData}>Load Data</button>

      {/*conditional rendering if true first operand else second operand*/}
      {loading && <p>Loading...</p>} 
      <pre>{JSON.stringify(data, null, '')}</pre>

      <button onClick={handleClick}>Display</button>
      <p>{message}</p>
    </div>
  )
}

export default StateApp
