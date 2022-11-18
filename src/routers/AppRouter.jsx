import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter