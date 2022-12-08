import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Nav'
import Hero from './Hero'
import Experiences from './Experiences'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Hero />
      <Experiences />
    </div>
  )
}

export default App
