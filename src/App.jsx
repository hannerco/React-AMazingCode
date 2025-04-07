import './App.css'
import React, { use, useState } from 'react'
import Welcome from './components/Welcome'

function App() {
    const [displayWelcome, setDisplayWelcome] = useState("")

  const getName = (name) => {
    setDisplayWelcome("Desde el padre: Bienvenido " + name)
  }

  return (
    <> 
    <h1>{displayWelcome}</h1>
    <Welcome  handleChild={getName}> </Welcome>
    </>
  )
}

export default App
