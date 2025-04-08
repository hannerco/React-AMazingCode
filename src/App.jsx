import React, { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const HTMLShowUsers = users.map(
    (u) => {
      return (
      <div key={u.id}>
        <h2>{u.name}</h2>
        <h3>{u.email}</h3>
      </div>
      )
    }
  )


  return (
    <div>
      <h1>Axios | LLamada a una API</h1>
      <section>{HTMLShowUsers}</section>

    </div>
  )
}

export default App