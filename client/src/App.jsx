import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (

    <>

      {!isOwnerPath && <NavBar setShowLogin={setShowLogin} />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />

      </Routes>

      {!isOwnerPath && <Footer />}

    </>

  )

}

export default App