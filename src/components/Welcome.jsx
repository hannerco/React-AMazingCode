import React, { use, useState } from 'react'

const Welcome = (props) => {
    const [nombreHijo, setNombreHijo] = useState("");

    const handleInput = (e) => {
        setNombreHijo(e.target.value);
    }

    const handleClick = () => {
        props.handleChild(nombreHijo);
    }
    

    return (
        <>
        <label htmlFor="">Escribe tu nombre</label>
        <input type="text" placeholder='Aquí' onChange={handleInput} />
        <button onClick={handleClick}>Enviar nombre</button>
        <h3>Desde el hijo: Bienvenido {nombreHijo}</h3>
        </>
    )
}

export default Welcome