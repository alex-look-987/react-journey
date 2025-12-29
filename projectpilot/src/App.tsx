import './App.css';
import Hello from './Hello';
import Clock from './Clock.tsx';
import FruitList from './Lists';
import Button from './props/Button.tsx'
import React, { JSX, useState } from "react";
import ProjectsPage from './projects/ProjectsPage.tsx';

interface DataFruit {
  id: number;
  name: string
}

const data: DataFruit[] = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'orange' },
  { id: 3, name: 'blueberry' },
  { id: 4, name: 'banana' },
  { id: 5, name: 'kiwi' },
];

function handleClick (): void {console.log('clicked!')}

const App: React.FC = () => {
  return (
      <div className='App'> 
      
      {/* <Hello name='Elvis' enthusiasmLevel={3}> 
      </Hello>
      <FruitList fruits = {data} ></FruitList>
      <button onClick={handleClick}>Click me!</button>
      <Button></Button> */}
      <ProjectsPage/>
      </div> 
  );
};

function AppTest(): JSX.Element {
  
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

export default AppTest

/* import ProjectsPage from './projects/ProjectsPage';
import Hello from './Hello';

function App() {
  return (
    <div className='container'>
      <Hello name='David'/>
      <ProjectsPage/>
    </div>
  );
}

export default App;
 */