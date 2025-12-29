import './App.css';
import React from "react";
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

export default App


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