import './App.css';
import Clock from './props/Clock.tsx';
import {JSX, useState, useEffect} from "react";
import LikeButton from './props/LikeButton.tsx';

function StateApp(): JSX.Element {
  
  const [page, setPage] = useState<number>(1)
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

      // conditiontal for each page 
      if (page === 1) {
        setData([1])
      } else if (page === 2) {
        setData([2])
      } else {
        setData([1, 2, 3, 4]);
      }
    }, 1000)
  }
 
  // generates behaviour based on page variable
  useEffect(loadData, [page])

  // triggers behaviour by changing page value through useState hook
  function handleNext() {
    setPage((currentPage) => currentPage + 1)
  }

  return (
    <div className="container">
      <LikeButton/>
      <Clock/>


      {/* <button onClick={loadData}>Load Data</button> */}

      {/*conditional rendering if true first operand else second operand*/}
      {loading && <p>Loading...</p>} 

      <span>Current Page {page} </span>

      <button onClick={handleNext}>Next</button>
      <pre>{JSON.stringify(data, null, 1)}</pre>

      <p>{message}</p>
    </div>
  )
}

export default StateApp
