function Child(props) {

    const handleClick = () => {
        props.handleLogin("Adrian");
    };


    return (
        <div>
            <h2>Este es un componente hijo</h2>

            <p>Nombre de usuario: {props.username}</p>

            <button onClick={handleClick}>Login</button>
        </div>
    );
}

export default Child;