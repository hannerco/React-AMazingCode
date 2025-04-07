import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

const primerCirculo = [
  {
    id: 1,
    name: 'Lourdes Valentina Levette Ipuana',
    age: 23,
    nickName: 'Levi',
  },

  {
    id: 2,
    name: 'Lauren Daniela Cruz Ladino',
    age: 20,
    nickName: 'Nela',
  }
]

const HTMLFriends = primerCirculo.map((friend) => {
  return ( 
    // Es importante que cada elemento tenga una key que lo identifique
    <div key={id}> 

      <h2>Nombre: {friend.name}</h2>
      <p>Edad: {friend.age}</p>
      <p>Apodo: {friend.nickName}</p>
    </div>
  )
})

function App() {

  return (
    <>

      <h1>Renderizado de listas</h1>

      {HTMLFriends}
      

      
    </>
  )
}

export default App
