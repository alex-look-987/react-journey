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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Greeter first="Srini" last='Kata' /> */}
    <AppTest/>
    <Counter initialCount={1}/>
    <Scoreboard/>
    {/* <App/> */}
    <DropwdownMenuHook/>
    <DropdownMenuClass/>
    <TestAppParent/>
    <TestAppChild/>
  </StrictMode>,
)
