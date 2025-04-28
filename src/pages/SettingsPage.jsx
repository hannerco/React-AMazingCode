import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useState } from 'react';
import { Navigate } from "react-router-dom"

const SettingsPage = () => {
    const [hasAcces, setAcess] = useState(false);

    if (!hasAcces) return <Navigate to={"/error"}/>
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div>SettingsPage</div>
        
        </>
    )
}

export default SettingsPage