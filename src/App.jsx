import React, { useState, useEffect } from 'react'


const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data)
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
      <h1>Todos</h1>
      <section>{HTMLShowUsers}</section>

    </div>
  )
}

export default App