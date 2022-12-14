import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import LogIN from './pages/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LogIN />

    </>
  )
}

export default App
