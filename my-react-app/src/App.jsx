import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './AboutMe.jsx'
import TodoList from './TodoList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <h1>Welcome to WDCC</h1>
        <AboutMe name="Werizhou" like="1"/>
        <TodoList/>
        </div>
  )
}

export default App
