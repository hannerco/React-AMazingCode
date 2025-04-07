import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [text, setText] = useState("Reescribe este texto")

  const handleInput = (e) => {
    setText(e.target.value)
  }

  return (
    <>
      <Menu></Menu>
      <h2>{text || 'Reescribe este texto'}</h2>
      <input type="text" placeholder='Escribe aquí'  onChange={handleInput}/>
    </>
  )
}

export default App
