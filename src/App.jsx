import React, { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import axios from 'axios'
import Formulario from './components/Formulario'
import FormularioPropio from './components/FormularioPropio'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import PostDetails from './pages/PostDetails'


const App = () => {
  
  
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/blog/:id' element={<PostDetails/>}/>
    
      
    </Routes>
  )
}

export default App