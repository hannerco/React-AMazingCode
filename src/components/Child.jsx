import { useEffect, useState } from "react";

function Child() {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log("Child se ha renderizado (las veces que se renderice o cambie una variable de estado)")
    })


    useEffect(() => {
        console.log("Child se ha montado (solo cuando el componente se monta/renderiza)")
    }, [])


    useEffect(()=> {
        console.log("La variable counter ha cambiado (cuando cambia un estado en específico")
    }, [counter])


    useEffect(() => {
        return () => {
            console.log("El componente se ha desmontado")
        }
    }, [])

    
    return (
        <div className="child">
            <h2>Este es un componente hijo</h2>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
        </div>
    )
}

export default Child;