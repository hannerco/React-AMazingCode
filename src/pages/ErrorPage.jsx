import React from 'react'
import {Link} from "react-router-dom"
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <section id='error-page'>
            <h1>ERROR</h1>
            <h2>No puedes entrear aquí</h2>
            <Link to="/">Ir a Home</Link>
        </section>
    )
}

export default ErrorPage