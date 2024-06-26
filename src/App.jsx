import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Cart from './pages/Cart'
import Order from './pages/Order'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route default path='/' element={<Home />} />
        <Route path='/Cart' element = {<Cart />} />
        <Route path='/Order' element = {<Order />} />
      </Routes>

    </div>
  )
}

export default App