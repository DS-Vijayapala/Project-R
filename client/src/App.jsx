import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import MyBookings from './pages/MyBookings'
import Footer from './components/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddProduct from './pages/owner/AddProduct'
import ManageProducts from './pages/owner/ManageProducts'
import ManageBookings from './pages/owner/ManageBookings'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const { showLogin } = useAppContext()

  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (

    <>

      <Toaster />

      {showLogin && <Login />}

      {!isOwnerPath && <NavBar />}

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        <Route path='/owner' element={<Layout />} >

          <Route index element={<Dashboard />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path='manage-product' element={<ManageProducts />} />
          <Route path='manage-bookings' element={<ManageBookings />} />

        </Route>

      </Routes >

      {!isOwnerPath && <Footer />
      }

    </>

  )

}

export default App