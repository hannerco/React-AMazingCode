import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

const primerCirculo = ["Nela", "Levette"]

function App() {
  const condition = true;

  return (
    <>

      <h1>Renderizado de listas</h1>
      
      {primerCirculo.map((friend) => {
        return ( 
          <p>{friend}</p>
        )
      })}
      

      
    </>
  )
}

export default App
