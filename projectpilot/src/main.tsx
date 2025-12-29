import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import Counter from './Counter.tsx'
import AppTest from './StateApp.tsx'
import Greeter from './props/Greeter.tsx'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Greeter first="Srini" last='Kata' /> */}
    <AppTest/>
    <Counter initialCount={1}/>
  </StrictMode>,
)
