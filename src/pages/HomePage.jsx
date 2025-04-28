import React, { useContext } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { UserContext } from '../contexts/user.context'

const HomePage = () => {
  const {user, login, logout} = useContext(UserContext)

  
  return (


    <>
      <HeaderComponent></HeaderComponent>
      <div>HomePage</div>
      <h2>Hola{user && <span>, {user.name}</span>}</h2>


      <button onClick={()=> login()}>Login</button>
      <button onClick={()=> logout()}>Logout</button>

    </>



  )
}

export default HomePage