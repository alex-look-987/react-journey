import './App.css';
import React from "react";
import Hello from './Hello';
import FruitList from './Lists';

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

const App: React.FC = () => {
  return (
      <div className='App'> 
      <Hello name='Elvis' enthusiasmLevel={3}> 
      </Hello>
      <FruitList fruits = {data} ></FruitList>
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