import React from 'react'
import Home from './Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './SignIn/SignIn'

export default function AppRoutes() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/signin' element = {<SignIn />}/>
    </Routes>
    </BrowserRouter>
  )
}
