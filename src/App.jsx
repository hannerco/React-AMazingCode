import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const [number, setNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1)
    console.log(number)
  }


  return (
    <>
      <Menu></Menu>
      <h2 onClick={addOne}>Number = {number}</h2>
    </>
  )
}

export default App
