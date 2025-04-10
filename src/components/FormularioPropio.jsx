import React, {useState} from 'react'
const Formulario = () => {

    const [user, setUser] = useState({username: "", password: ""});
    const handleUsername = (e) => {
    setUser({...user, username: e.target.value})
    }
    const handlePassword = (e) => {
    setUser({...user, password: e.target.value})
    }
    const handleLogin = (e) => {
    e.preventDefault();
    console.log(user)
    }
    const handleLogout = () => {
    setUser({username: "", password: "",})
    console.log(user)
    }
    
    return (
    <div>
        <h1>Formulario</h1>
        
        <form action="" onSubmit={handleLogin}>
        <fieldset>
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='hanner' onChange={handleUsername} value={user.username}/>
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='******' onChange={handlePassword} value={user.password}/>
        </fieldset>
        <button>Login</button>
        </form>
        <button onClick={handleLogout}>Logout</button>
    </div>
    )
}
export default Formulario