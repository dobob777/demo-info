import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Faqs from './pages/Faqs'
import Singup from './pages/Singup'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/login' element={ <Login /> } />
                    <Route path='/faqs' element={ <Faqs /> } />
                    <Route path='/sing-up' element={ <Singup /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App