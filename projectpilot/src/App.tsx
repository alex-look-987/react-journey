import './App.css';
import React from "react";
import Hello from './Hello';

const App: React.FC = () => {
  return (
      <div className='App'> 
      <Hello name='Elvis' enthusiasmLevel={3}> 
      </Hello> 
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