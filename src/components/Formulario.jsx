import React, {useState} from 'react'
const Formulario = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleUsername = (e) => {
    setUser({...user, username: e.target.value})
  }
  const handlePassword = (e) => {
    setUser({...user, password: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("El formulario se ha enviado")
    console.log(user)
  }
  const handleLogout = () =>{
    setUser({username: "", password: "",});
    console.log(user)
  }
  return (
    <div>
        <h1>Formulario</h1>
        <form action="" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="username">Usuario</label>
                <input type="text" id='username' onChange={handleUsername} value={user.username}/>
            </fieldset>
            <fieldset>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id='password' onChange={handlePassword} value={user.password}/>
            </fieldset>
            <button>Enviar</button>
        </form>
    
        <button onClick={handleLogout}>Logout</button>
    </div>

  )
}
export default Formulario
