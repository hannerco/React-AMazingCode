import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

const primerCirculo = ["Nela", "Levette"]

const HTMLFriends = primerCirculo.map((friend) => {
  return ( 
    <p key={friend}>{friend}</p>
  )
})

function App() {
  const condition = true;

  return (
    <>

      <h1>Renderizado de listas</h1>

      {HTMLFriends}
      

      
    </>
  )
}

export default App
