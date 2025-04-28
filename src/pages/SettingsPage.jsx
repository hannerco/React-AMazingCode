import React, { useContext } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { useState } from 'react';
import { Navigate } from "react-router-dom"
import { UserContext } from '../contexts/user.context';

const SettingsPage = () => {
    const {user} = useContext(UserContext)
    
    if (!user?.isAdmin) return <Navigate to={"/error"}/>
    return (
        <>
            <HeaderComponent></HeaderComponent>
            <div>SettingsPage</div>
        
        </>
    )
}

export default SettingsPage