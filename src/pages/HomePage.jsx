import React, { useContext } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { UserContext } from '../contexts/user.context'

const HomePage = () => {
  const {user, setUser} = useContext(UserContext)
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <h2>Hola, {user}</h2>
      <div>HomePage</div>
    </>
  )
}

export default HomePage