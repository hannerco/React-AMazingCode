import {useEffect, useState} from 'react';
import Child from './components/Child';

function App(){
  //Variable que almacena la info de la API
  //Es useState porque va a cambiar, y ese cambio se debe ver en la página
  const [user, setUser] = useState([])

  // Aquí llamamos a la API y pedimos los datos
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    setUser(data)
    //Ahora user tiene toda la info de la API en su array
  }



  // Se llamará getUsers cada que se monte el componente
  useEffect(()=> {
    getUsers();
  }, [])

  /** Si de repente hay un nuevo usuario, 
   * habría que recargar la página para verlo 
   * (haciendo que se monte el componente de nuevo)
   * o crear un botón que llame a getUsers
  */



  const HTMLUsers = user.map((user) => {
    return (
      <div key={user.id}>
        <h3>{user.name}</h3>
      </div>
    )
  })



  return (
    <div>
      <h1>fetch() | Llamada a una API</h1>
      <section>{HTMLUsers}</section>
    </div>
  )


}



export default App;