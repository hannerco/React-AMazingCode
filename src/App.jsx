import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const condition = true;

  return (
    <>

      <h1>Renderizado condicional con &&</h1>
      {condition && <h3>Si ves esto, la condición fue True</h3> }
      


      <h1>Renderizado condicional con Operador ternario 'condition ? (ifTrue) : (ifFalse)'</h1>
      {condition ? (<h3>Condición se cumple</h3>) : (<h3>Condición NO se cumple</h3>)}
      

      
    </>
  )
}

export default App
