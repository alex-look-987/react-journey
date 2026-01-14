import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import Counter from './Counter.tsx'
import AppTest from './StateApp.tsx'
import Greeter from './props/Greeter.tsx'
import { createRoot } from 'react-dom/client'
import Scoreboard from './props/Scoreboard.tsx'
import { DropwdownMenuHook, DropdownMenuClass } from './props/Example_CRenderinng.tsx'
import TestAppParent from './Parent_Chidl.tsx'
import TestAppChild from './Child_Parent.tsx'
import {LiftingApp} from './props/Lifting_State_Up.tsx'
import { LIST } from './mockup/Data.ts'
import FilterableProductTable from './mockup/ProductTable.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Greeter first="Srini" last='Kata' /> */}
    <App/>
    <FilterableProductTable products={LIST} />
    
    <AppTest/>
    <Counter initialCount={1}/>
    <Scoreboard/>
    <DropwdownMenuHook/>
    <DropdownMenuClass/>
    <TestAppParent/>
    <TestAppChild/>
    <LiftingApp/>
  </StrictMode>,
)
