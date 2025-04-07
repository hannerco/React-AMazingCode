import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'

function App() {
  const sayOtherThing = ()=> console.log('Say other thing')
  return (
    <>
      <Menu></Menu>
      <h1 onClick={()=> {console.log('Say Something')}}>Hello world</h1>
      <h2 onClick={sayOtherThing}>My name is Hanner   </h2>
    </>
  )
}

export default App
